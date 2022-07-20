import * as React from "react"
import '../styles/Footer.scss'
import Logo from "../images/icon.png"

const Footer = () =>
  <footer>
    <div className='container'>
      <div>
        <a href=''>Twitter</a>
        <a href=''>Github</a>
        <a href=''>Email</a>
      </div>
      <a href='' target='_blank' rel='noopener noreferrer'><img src={Logo} alt="Logo"/></a>
      <p>© Organization {new Date().getFullYear()}.</p>
    </div>
  </footer>

export default Footer
