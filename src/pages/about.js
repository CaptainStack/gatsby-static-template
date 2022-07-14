import * as React from "react"
import Layout from '../components/Layout'
import { AboutSidebarLinks } from '../helpers/constants'
import '../styles/styles.scss'

const AboutPage = (activeHeaderLink) =>
  <div className='Layout'>
    <Layout pageTitle="About" siteTitle='Website' sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <title>About Page</title>
      <h1>About heading</h1>
    </main>
    </Layout>
  </div>
export default AboutPage
