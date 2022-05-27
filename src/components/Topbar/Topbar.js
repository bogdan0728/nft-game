import React from 'react'
import logoImgage from '../../assets/images/logo.png'
import '../../assets/scss/home/header.scss'

const Topbar = () => {
  return (
    <div className="header--container">
      <div className="header--container__logo">
        <a href="#">
          <img src={logoImgage} alt="Logo Image" />
        </a>
      </div>
      <div className="header--container__menus">
        <ul className="header--container__menus--list">
          <li>
            <a className="header--link" aria-current="page" href="#">
              HOME
            </a>
          </li>
          <li>
            <a className="header--link" aria-current="page" href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a className="header--link" aria-current="page" href="#">
              GAMES
            </a>
          </li>
          <li>
            <a className="header--link" aria-current="page" href="#">
              NODES
            </a>
          </li>
          <li>
            <a className="header--link" aria-current="page" href="#">
              CAREERS
            </a>
          </li>
          <li>
            <a className="header--link" aria-current="page" href="#">
              DISCORD
            </a>
          </li>
        </ul>
      </div>
      <div className="header--container__btns">
        <button
          type="button"
          className="btn btn-outline-primary header--btn__login"
        >
          Login
        </button>
        <button type="button" className="btn btn-primary header--btn__signup">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Topbar
