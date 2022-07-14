import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const ContactPage = () =>
  <div className='Layout'>
    <Layout siteTitle='Website' pageTitle="Contact" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <title>Contact</title>
      <h1>Contact</h1>
      <p>You can contact us at <email>contact@emailaddress.com</email></p>
    </main>
    </Layout>
  </div>
export default ContactPage
