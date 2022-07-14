import * as React from "react"
import { Helmet } from 'react-helmet'
import Screenshot from '../images/screenshot.png'

const Head = ({pageTitle, siteTitle}) =>
  <Helmet>
    <html lang="en" />
    <title>{pageTitle} | {siteTitle}</title>
    <meta content={Screenshot} property="og:image" />
    <meta property="og:description" content="Website meta description" />
  </Helmet>

export default Head
