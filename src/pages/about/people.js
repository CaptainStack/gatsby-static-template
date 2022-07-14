import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const PeoplePage = () =>
  <div className='Layout'>
    <Layout siteTitle='Website' pageTitle="People" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <h1>People</h1>
      <p>Medicare for All EVERYWHERE does not currently have a membership system, though our meetings and organizing spaces are open to anyone. We also do not currently have a governance structure though we seek consensus among our active volunteers. We are 100% volunteer led and have no paid staff.</p>
      <h2>Our co-founders</h2>
      <ul>
        <li>Andre Stackhouse</li>
        <li>Terence Cudney</li>
        <li>Betty Faye Doumas-Toto</li>
      </ul>
    </main>
    </Layout>
  </div>
export default PeoplePage
