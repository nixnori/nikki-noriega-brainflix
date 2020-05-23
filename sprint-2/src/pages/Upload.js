import React from 'react';
import './Upload.scss';
import uploadImg from '../assets/Images/Upload-video-preview.jpg';

const Upload = () => {
    return (
        <>
        <h1 className="upload__header">Upload Video</h1>
        <div>
            <img src={uploadImg} />
        </div>
        </>
    )
}

export default Upload;

