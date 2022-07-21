import * as React from "react"
import { Link } from 'gatsby'
import '../styles/Footer.scss'
import Logo from "../images/icon.png"
import {FooterSocialLinks} from '../helpers/constants'

const Footer = ({organization='Organization'}) =>
  <footer>
    <div className='container'>
      <div className='socialMediaLinks row'>
      {
        FooterSocialLinks.map(link => <a href={link.url} title={link.title} target='_blank' rel='noreferrer'><img src={link.logo} alt={link.title}/></a>)
      }
      </div>
      <Link href='/' target='_blank' rel='noopener noreferrer'><img src={Logo} alt="Logo"/></Link>
      <p>© {organization} {new Date().getFullYear()}.</p>
    </div>
  </footer>

export default Footer
