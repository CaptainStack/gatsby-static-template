import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const AboutPage = () =>
  <div className='Layout'>
    <Layout pageTitle="About" siteTitle='Website' sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <h1>About</h1>
      <p>Medicare for All EVERYWHERE held its first meeting in October 2021 and has in its short time organized several actions across multiple states and in Washington D.C.</p>
      <p>Medicare for All EVERYWHERE is currently uninorporated, meaning we are a group of activists who meet regularly to organize actions and plan strategy but are not a registered LLC or 501(c) entity. Our goal is to become an official and registered coalition.</p>
      <p>Medicare for All EVERYWHERE does not have a bank account and cannot take financial contributions. We are working to find a fiscal sponsor which will allow us to begin fundraising.</p>
    </main>
    </Layout>
  </div>
export default AboutPage
