import * as React from "react"
import Layout from '../../components/Layout'
import { AboutSidebarLinks } from '../../helpers/constants'
import '../../styles/styles.scss'

const FAQPage = () =>
  <div className='Layout'>
    <Layout pageTitle="FAQ" sidebarLinks={AboutSidebarLinks} activeHeaderLink="About">
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li>Question 1</li>
        <li>Question 2</li>
        <li>Question 3</li>
      </ul>
    </Layout>
  </div>
export default FAQPage
