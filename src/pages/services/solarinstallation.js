import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent"
import RelatedServices from "../../components/ServiceDetails/RelatedServices"
import Footer from "../../components/_App/Footer"
import SolarInstallation from "../../components/ServiceDetails/Solarinstallation"

const ServiceDetailsPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Saulės elektrinių instaliacija"
        homePageText="Namai"
        homePageUrl="/"
        activePageText="Saulės elektrinių instaliacija"
      />

      <SolarInstallation />

      {/* <RelatedServices /> */}

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Service Details" />

export default ServiceDetailsPage
