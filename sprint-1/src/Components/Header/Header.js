import React from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import Button from '../Button/Button';
import './Header.scss';
import ProfilePic from '../ProfilePic/ProfilePic';

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} />
            <input className="header__search" type="text" placeholder="Search"/>
            <div className="header__item">
                <Button className="header__button" text='UPLOAD'/>
                <ProfilePic className="header__profile" />
            </div>
        </header>
    )
} 

export default Header;
