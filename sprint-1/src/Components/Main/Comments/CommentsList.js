import pic1 from '../../../assets/Images/asia.JPG';
import pic2 from '../../../assets/Images/chico.JPG';
import pic3 from '../../../assets/Images/cat.jpg';
import { v4 as uuidv4 } from 'uuid';

const commentsList = [
    {
        id: uuidv4(),
        pic: pic1,
        name: 'Theodore Duncan',
        date: '11/15/2018',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
    {
        id: uuidv4(),
        pic: pic2,
        name: 'Gary Wong',
        date: '12/12/2018',
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        id: uuidv4(),
        pic: pic3,
        name: 'Michael Lyons',
        date: '12/18/2018',
        comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    }
];



export default commentsList;