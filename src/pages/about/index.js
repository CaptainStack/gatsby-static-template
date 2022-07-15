import * as React from "react"
import Layout from '../../components/Layout'
import InfoCard from '../../components/InfoCard'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const AboutPage = () =>
  <div className='Layout'>
    <Layout pageTitle="About" siteTitle='Website' sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <main>
      <title>About Page</title>
      <h1>About heading</h1>
      <InfoCard
        title="Info Card 1"
        description='Description of Info Card 1'
        link=''
      />
      <InfoCard
        title="Info Card 2"
        description='Description of Info Card 2'
        link=''
      />
      <InfoCard
        title="Infocard 3"
        description='Description of Info Card 3'
        link=''
      />
    </main>
    </Layout>
  </div>
export default AboutPage
