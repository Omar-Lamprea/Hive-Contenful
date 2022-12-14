/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import Hero from '../components/Hero/Hero'
import VideoTemplate from './VideoTemplate/VideoTemplate'
import Imagesgrid from './ImagesTemplate/ImagesGrid'
import Footer from './Footer/Footer'

import "./layout.css"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container-global">
        <main>
          <Hero />

          <section className="main-template">
            <Container>
              <VideoTemplate />
              <Imagesgrid />
            </Container>
          </section>

        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
