import * as React from "react"
import { Link } from 'gatsby'
import '../styles/Footer.scss'
import Logo from "../images/icon.png"
import {FooterSocialLinks} from '../helpers/constants'

const Footer = ({organization='Organization'}) =>
  <footer>
    <div className='container'>
      <div>
      {
        FooterSocialLinks.map(link => <a href={link.url}>{link.text}</a>)
      }
      </div>
      <Link href='/' target='_blank' rel='noopener noreferrer'><img src={Logo} alt="Logo"/></Link>
      <p>© {organization} {new Date().getFullYear()}.</p>
    </div>
  </footer>

export default Footer
