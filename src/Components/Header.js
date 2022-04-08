import React  from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap'
import '../css/main.css';
import { Link } from 'react-router-dom';
import logo from "../image/w-logo-blue-white-bg.png";


const Header = () => {
    return (
        <div className='container'>
            <div className='header__topline'>
                <div className='header__topline-content'>
                    <div className='header_logo'>
                        <img
                            src={logo}
                            height="41"
                            width="200"
                            alt='Logo'
                        />
                    </div>
                    <div className='header__address header__item fw-normal'>
                        <span>Республика Беларусь, город Минск<br />4-й Загородный переулок, дом 58Б, ком. 321</span>
                    </div>
                    <div className='header__item'>
                        <a href='mailto:woodbudby@gmail.com' className='link-secondary'>woodbudby@gmail.com</a>
                    </div>
                    <div className='header__item'>
                        <a href="tel:+375293303434" className='link-secondary header__phone'>+375 (29) 330-34-34</a>
                    </div>
                    <div className='header__item'>
                        <div>
                            <a href="#" className="btn btn-primary">Заказать обратный звонок</a>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navbar__text' href="/">Главная</Nav.Link>
                            <Nav.Link className='navbar__text' href="/AboutUs">О нас</Nav.Link>
                            <Nav.Link className='navbar__text' href="#link">Галарея</Nav.Link>
                            <Nav.Link className='navbar__text' href="#link">Цены</Nav.Link>
                            <Nav.Link className='navbar__text' href="#link">Партнеры</Nav.Link>
                            <Nav.Link className='navbar__text' href="#link">Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header