import React from 'react';
import './Form.scss';
import image from '../../../assets/Images/Mohan-muruge.jpg';
import Button from '../../Button/Button';
import ProfilePic from '../../ProfilePic/ProfilePic';

const Form = () => {
    return (
        <div className="form__section">
            <h4 className="form__header">3 Comments</h4>
            <div className="form__container">
                <form action="" className="form">
                    <ProfilePic />
                    <div className="form__item">
                        <label className="form__label" htmlFor="name">JOIN THE CONVERSATION</label>
                        <textarea className="form__textbox" type="text" name="name" value="Write comment here"></textarea>
                        <Button text='COMMENT' className="form__button"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;