import * as React from "react"
import Layout from '../../components/Layout'
import InfoCard from '../../components/InfoCard'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'
import Icon from '../../images/icon.png'

const AboutPage = () =>
  <Layout pageTitle="About" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
    <title>About Page</title>
    <h1>About heading</h1>
    <div className='row'>
    <InfoCard
      title="Info Card 1"
      description='Description of InfoCard 1'
      image={Icon}
      link='/'
    />
    <InfoCard
      title="Info Card 2"
      description='Description of InfoCard 2'
      image={Icon}
      link='/'
    />
    <InfoCard
      title="Infocard 3"
      description='Description of InfoCard 3'
      image={Icon}
      link='/'
    />
    </div>
  </Layout>
export default AboutPage
