import * as React from "react"
import { Helmet } from 'react-helmet';

const Head = ({pageTitle, siteTitle}) =>
  <Helmet>
    <html lang="en" />
    <title>{pageTitle} | {siteTitle}</title>
    <meta content='' property="og:image" />
    <meta property="og:description" content="Website meta description" />
  </Helmet>

export default Head
