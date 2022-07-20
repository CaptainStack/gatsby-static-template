import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const ContactPage = () =>
  <div className='Layout'>
    <Layout pageTitle="Contact" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
      <h1>Contact</h1>
      <p>You can contact us at <a href='mailto:contact@emailaddress.com'>contact@emailaddress.com</a></p>
    </Layout>
  </div>
export default ContactPage
