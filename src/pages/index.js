import * as React from "react"
import Layout from '../components/Layout'
import '../styles/styles.scss'
import JigsawMap from '../images/jigsaw-map.png'

const IndexPage = () =>
  <Layout pageTitle="Home" siteTitle='Website' activeHeaderLink="Home">
    <main>
      <title>Home</title>
      <h1 style={{marginBottom:0}}>Medicare for All EVERYWHERE</h1>
      <img style={{margin:0}} src={JigsawMap} alt="Logo"/>
      <p>Medicare for All EVERYWHERE is an aspiring coalition that includes every US state and territory working in collaboration to build a mass movement with the political power to win national improved Medicare for All federally.</p>
      <p>We believe that Medicare for All will not happen in a vacuum, nor will it be handed down from the top. It will be won through a bottom-up mass movement. Our strategy is to create a universal campaign for universal healthcare that unites the many statewide campaigns for single payer healthcare with a national strategy for Medicare for All.</p>
      <h1>Seattle March for #HealthcareJustice - July 30th 2022</h1>
      <p>Medicare for All EVERYWHERE is proud to be a co-sponsor of the 2022 Seattle March for Healthcare Justice. This action is both a celebration of Medicare's 57th birthday, as well as a demand for its protection and expansion into National Imrproved Medicare for All.</p>
      <img src='https://can2-prod.s3.amazonaws.com/events/photos/001/181/459/original/march.jpg' alt='Photo from the 2021 Seattle March for Medicare for All'/>
      <a class='button' href='https://actionnetwork.org/events/save-the-date-march-for-healthcare-justice-celebrating-57-years-of-medicare'>RSVP</a>
    </main>
  </Layout>
export default IndexPage
