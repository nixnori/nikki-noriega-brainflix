import React from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import Button from '../Button/Button';
import './Header.scss';
import ProfilePic from '../ProfilePic/ProfilePic';
import upload from '../../assets/Icons/SVG/Icon-upload.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link className="header__logo" to="/">
                <img src={logo} />
            </Link>
            <input className="header__search" type="text" placeholder="Search"/>
            <div className="header__item">
                <Link className="button__link" to="/upload">
                    <Button className="header__button" image={upload} text='UPLOAD'/>
                </Link>
                <ProfilePic className="header__profile" />
            </div>
        </header>
    )
} 

export default Header;
