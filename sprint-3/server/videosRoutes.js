const express = require('express');
const router = express.Router();
const videoList = require('./data/videos.json');
const videoData = require('./data/videoData.json');
const { uuid } = require('uuidv4');

const newData = {
    "id": "",
    "title": "",
    "channel": "Daniil's Cat",
    "image": "https://imgur.com/iCL8GFp.jpg",
    "description": "",
    "views": "0",
    "likes": "0",
    "duration": "4:20",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": Date.now(),
    "comments": [
        {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            "likes": 0,
            "timestamp": 1545162149000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            "likes": 0,
            "timestamp": 1544595784046
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
            "likes": 0,
            "timestamp": 1542262984046
        }
    ]
}

const newVideo = {
    "id": "",
    "title": "",
    "channel": "Daniil's Cat",
    "image": "https://imgur.com/iCL8GFp.jpg"
}

router.get('/', (req, res) => {
    res.status(200).json(videoList);
});

router.get('/:id', (req, res) => {
    const search = videoData.find((vid) => vid.id == req.params.id);
    if (search) {
        res.status(200).json(search);
    } else {
        res.status(400).json({
            error: 'Video not found'
          });
    }
});

router.post('/', (req, res) => {
    const data = req.body;

    if (data.title && data.description && data.id) {
        newData.id = data.id;
        newData.title = data.title;
        newData.description = data.description;

        newVideo.title = data.title;
        newVideo.id = data.id;

        videoData.push(newData);
        videoList.push(newVideo);
        
        res.status(200).json(videoList);

    } else {
        res.status(400).send('Error');
    }
    
  });


module.exports = router;