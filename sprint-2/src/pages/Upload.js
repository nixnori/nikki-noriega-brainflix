import React from 'react';
import './Upload.scss';
import uploadImg from '../assets/Images/Upload-video-preview.jpg';
import Button from "../components/Button/Button";

const Upload = () => {
    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__item--1">
                    <h4 className="upload__label">VIDEO THUMBNAIL</h4>
                    <img className="upload__image" src={uploadImg} />
                </div>
                <div className="upload__item--2">
                    <h4 className="upload__label">TITLE YOUR VIDEO</h4>
                    <input className="upload__title" type="text" placeholder="Add a title to your video" />
                    <h4 className="upload__label">ADD A VIDEO DESCRIPTION</h4>
                    <textarea className="upload__description" placeholder="Add a description of your video"></textarea>
                </div>
            </div>
            <div className="button__container">
                <Button className="upload__button" text="PUBLISH" />
                <button className="button__cancel">CANCEL</button>
            </div>
        </div>
    )
}

export default Upload;

