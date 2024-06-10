import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/DataAnalyticsAIStartup/MainBanner"
import FeaturedService from "../components/DataAnalyticsAIStartup/FeaturedService"
import AboutUs from "../components/DataAnalyticsAIStartup/AboutUs"
import OurMission from "../components/DataAnalyticsAIStartup/OurMission"
import Funfacts from "../components/DataAnalyticsAIStartup/Funfacts"
import OurServices from "../components/DataAnalyticsAIStartup/OurServices"
import HowItWork from "../components/DataAnalyticsAIStartup/HowItWork"
import TeamMembers from "../components/DataAnalyticsAIStartup/TeamMembers"
import Testimonials from "../components/DataAnalyticsAIStartup/Testimonials"
import Partner from "../components/DataAnalyticsAIStartup/Partner"
import StartProject from "../components/DataAnalyticsAIStartup/StartProject"
import OurBlog from "../components/DataAnalyticsAIStartup/BlogPost"
import Footer from "../components/_App/Footer"
import Pricing from "../components/SEOAgency/Pricing"
import Subscribe from "../components/DataScienceOnlineCourses/Subscribe"
import ContactForm from '../components/Contact/ContactForm';
import ExpenseChart from '../components/Chart/ExpenseChart';

const IndexPage = () => {
  return (
    <Layout>

      <Navbar />

      <MainBanner />

      <Pricing />

      <OurServices />

      <Subscribe />

      <ExpenseChart />
      
      {/* <ContactForm/> */}

      {/* <AboutUs />

      <FeaturedService />

      <OurMission />

      <Funfacts />

      <OurServices />

      <HowItWork />

      <TeamMembers />

      <Testimonials />

      <Partner />

      <StartProject />

      <OurBlog /> */}

      <Footer />
      
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
