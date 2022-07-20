import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'

const IndexPage = () =>
  <Layout pageTitle="Home" activeHeaderLink="Home">
      <h1>Website heading</h1>
      <p>Here is your homepage. Use it wisely.</p>
      <a class='button' href='https://github.com/CaptainStack/gatsby-static-template'>Press me</a>
  </Layout>
export default IndexPage
