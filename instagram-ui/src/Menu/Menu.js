import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../user.context';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MenuAvatar from './MenuAvatar/MenuAvatar';
import './Menu.scss';




function  Menu() {

const { user } = useContext(UserContext);

  return (
            <nav className="Menu navbar navbar-expand-lg navbar-light bg-light">
                <div className="d-flex">
                  <a className="navbar-brand" href="#">Instagram</a>
                  <ul className="nav mr-auto">
                    <li className="home  nav-item active">
                      <Link className="navbar d-flex flex-row" to="/">
                        <FontAwesomeIcon icon={faHome} className="1"/>
                        <span className="d-none d-lg-block d-xl-block">Home</span>
                      </Link>
                    </li>
                    <li className="create-post nav-item active">
                      <Link className="navbar nav-link" to="/post/create">
                        <FontAwesomeIcon icon={faPlus} className="1"/>
                          <span className="d-none d-lg-block d-xl-block">Create Post</span>
                                <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar nav-link">
                        <MenuAvatar className=""/>
                      </Link>
                    </li>
                  </ul>
                </div>
            </nav>
  );
}


export default Menu;