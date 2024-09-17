import React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ProductsContent from "../../components/Products/ProductsContent"
import Footer from "../../components/_App/Footer"

const CoursesPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Produktai"
        homePageText="Namai"
        homePageUrl="/"
        activePageText="Produktai"
      />

      <ProductsContent />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Courses" />

export default CoursesPage
