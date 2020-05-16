import React from 'react';
import './Form.scss';
import image from '../../../assets/Images/Mohan-muruge.jpg';
import Button from '../../Button/Button';

const Form = () => {
    return (
        <>
        <h4 className="form__headerr">3 Comments</h4>
        <div className="form__container">
            <form action="" className="form">
                <img className="form__pic" src={image} alt="profile-pic"/>
                <div className="form__item">
                    <label className="form__label" htmlFor="name">NAME</label>
                    <input className="form__textbox" type="text" name="name" value="Write comment here" />
                    <Button text='COMMENT' />
                </div>
            </form>
        </div>
        </>
    )
}

export default Form;