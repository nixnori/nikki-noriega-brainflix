import React from 'react';
import './Form.scss';
import Button from '../Button/Button';
import ProfilePic from '../ProfilePic/ProfilePic';

const Form = ({commentsLength}) => {
    return (
        <div className="form__section">
            <h4 className="form__header">{commentsLength ? commentsLength.length : null} Comments</h4>
            <div className="form__container">
                <form action="" className="form">
                    <ProfilePic />
                    <div className="form__item">
                        <div className="textbox">
                            <label className="form__label" htmlFor="name">JOIN THE CONVERSATION</label>
                            <textarea className="form__textbox" type="text" name="name" placeholder="Write comment here"></textarea>            
                        </div>
                        <Button text='COMMENT' className="form__button"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;