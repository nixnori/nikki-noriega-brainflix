import React from 'react';
import './Form.scss';
import image from '../../../assets/Images/Mohan-muruge.jpg';
import Button from '../../Button/Button';

const Form = () => {
    return (
        <>
        <h4 className="form__headerr">3 Comments</h4>
        <div class="form__container">
            <form action="" class="form">
                <img class="form__pic" src={image} alt="profile-pic"/>
                <div class="form__item">
                    <label class="form__label" for="name">NAME</label>
                    <input class="form__textbox" type="text" name="name" value="Write comment here" />
                    <Button text='COMMENT' />
                </div>
            </form>
        </div>
        </>
    )
}

export default Form;