import React from 'react';
import './UploadForm.scss';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';
import Button from '../Button/Button';

const UploadForm = (props) => {
    return (
        <form onSubmit={props.addVideo} className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__item upload__item--1">
                    <h4 className="upload__label">VIDEO THUMBNAIL</h4>
                    <img className="upload__image" src={uploadImg} alt="video" />
                </div>
                <div className="upload__item upload__item--2">
                    <h4 className="upload__label">TITLE YOUR VIDEO</h4>
                    <input className="upload__title" name="title" type="text" placeholder="Add a title to your video" />
                    <h4 className="upload__label">ADD A VIDEO DESCRIPTION</h4>
                    <textarea className="upload__description" name="description" placeholder="Add a description of your video"></textarea>
                </div>
            </div>
            <div className="button__container">
                <Button type="submit" className="upload__button" text="PUBLISH" />
                <button className="button__cancel">CANCEL</button>
            </div>
        </form>
    )
}

export default UploadForm;