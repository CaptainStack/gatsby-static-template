import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'

const IndexPage = ({activeHeaderLink}) =>
  <Layout pageTitle="Home" siteTitle='Website' activeHeaderLink="Home">
    <main>
      <title>Home Page</title>
      <h1>Website heading</h1>
    </main>
  </Layout>
export default IndexPage
