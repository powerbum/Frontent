import React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ProductDetailsContent from "../components/Products/ProductDetailsContent"


const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;

  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle={product.name}
        homePageText="Home"
        homePageUrl="/"
        activePageText={product.name}
      />

      <ProductDetailsContent productDetails={product}/>

      <Footer />
    </Layout>
  );
};

export const Head = ({ pageContext }) => <Seo title={pageContext.product.name} />;

export default ProductTemplate;
