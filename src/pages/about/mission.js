import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const MissionPage = () =>
  <div className='Layout'>
    <Layout siteTitle='Website' pageTitle="Mission" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <h1>Mission statement</h1>
      <p>We are a coalition of organizations across all 50 US states that is actively working to reform the United States healthcare system so that everyone is guaranteed comprehensive cradle to grave health care regardless of their ability to pay.</p>
      <p>The most immediate way to achieve this is by implementing a single-payer healthcare system federally and we believe that the best way to make this happen is to create a grassroots and democratic mass movement.</p>
      <p>That mass movement must include people from every state so that sufficient pressure can be applied to the entirety of Congress and the President - hence our coalition must include at least one organization from every US state.</p>
    </main>
    </Layout>
  </div>
export default MissionPage
