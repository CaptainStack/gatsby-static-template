import * as React from "react"
import Logo from "../images/icon.png"
import { Link } from 'gatsby'

const Footer = () =>
  <footer>
    <div className='container'>
      <div>
        <a href='https://twitter.com/M4A_Everywhere' target='_blank' rel='noreferrer'>Twitter</a>
        <a href='https://github.com/Medicare-for-All-EVERYWHERE/main-site' target='_blank' rel='noreferrer'>Github</a>
        <a href="mailto:massmovement.healthcare@gmail.com" target='_blank' rel='noreferrer'>Email</a>
      </div>
      <Link to='/'><img src={Logo} alt="Logo"/></Link>
      <p>© Medicare for All EVERYWHERE {new Date().getFullYear()}.</p>
    </div>
  </footer>

export default Footer
