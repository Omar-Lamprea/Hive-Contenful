import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import './hero.css'
import { Container } from "react-bootstrap"

const Header = () => {
  const data = useStaticQuery(graphql`query HeroQuery {
    allContentfulHiveHero {
      edges {
        node {
          title
          date
          heroImg {
            file {
              url
            }
          }
        }
      }
    }
  }`)
  const heroData = data.allContentfulHiveHero.edges[0].node

  return(
    <div 
      className="hero-main" 
      style={{
        // backgroundImage: `url('https:${heroData.heroImg.file.url}')`
      }}>
        <img className="hero-image" src={"https:" + heroData.heroImg.file.url} alt="" />
        <Container>
          <p>EVENT</p>
          <h1>{heroData.title}</h1>
          <p>{heroData.date}</p>
        </Container>
    </div>
  )
}

export default Header
