import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const ConductPage = () =>
  <div className='Layout'>
    <Layout siteTitle='Website' pageTitle="Code of Conduct" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <h1>Code of Conduct</h1>
      <p><strong><a href='https://actionnetwork.org/forms/code-of-conduct-2?source=direct_link&'>Please click here to view and agree to our Code of Conduct.</a></strong></p>
      <p>The following Code of Conduct applies both to our meetings and our digital communities (Slack, Twitter DM Groups, etc). You may be removed from any Medicare for All EVERYWHERE space for failing to abide by the following rules.</p>
      <ul>
        <li>No personal attacks</li>
        <li>No yelling</li>
        <li>No typing in ALL CAPS</li>
        <li>No hate speech or racial slurs</li>
        <li>You may not be in the group under a false identity</li>
        <li>No doxxing</li>
        <li>Conversations are considered private to the group unless consent to share outside of the community is given</li>
        <li>Accusations of being a plant/informant/CIA/FBI/bot are not to be taken lightly, making such an accusation is considered </li>serious and making such an accusation without probable cause is not tolerated.
        <li>Debate and disagreement are encouraged</li>
        <li>It is okay to be wrong in this community</li>
        <li>It is okay for others to be wrong or have a different opinion and you may not attack them for disagreeing</li>
        <li>State single payer is welcome here</li>
        <li>Federal single payer is welcome here</li>
      </ul>
    </main>
    </Layout>
  </div>
export default ConductPage
