import React from 'react';
import Form from '../../components/UploadForm/UploadForm';
import axios from 'axios';
import { uuid } from 'uuidv4';

const API_URL = "http://localhost:8080/videos";


const Upload = () => {
   
    const addVideo = e => {
        e.preventDefault();

        let title = e.target.title.value;
        let description = e.target.description.value;

        console.log(title);
        console.log(description);

        axios
            .post(API_URL, {
                'title': title,
                'description': description,
                'id': uuid()
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(err => {
                console.log(err)
            })

        e.target.title.value = '';
        e.target.description.value = '';
    }

    return (
        <>
            <Form addVideo={addVideo}/>
        </>
    )
}

export default Upload;
