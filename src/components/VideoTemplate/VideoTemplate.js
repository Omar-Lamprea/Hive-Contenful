import * as React from "react"
import { Col, Row } from "react-bootstrap";
import './VideoTemplate.css'
import {graphql, useStaticQuery} from "gatsby"

const VideoTemplate = () => {

  const data = useStaticQuery(graphql`query videoQuery {
    allContentfulVideoTemplate {
      edges {
        node {
          title
          subtitle
          eventData {
            raw
          }
          video {
            file {
              url
            }
          }
        }
      }
    }
  }`)
  const videoData = data.allContentfulVideoTemplate.edges[0].node
  const text = JSON.parse(videoData.eventData.raw).content

  return(
    <div className="Video-template p-0 p-md-3">
      <h4>
        {videoData.title}
      </h4>
      <Row className="my-3">
        <Col md="6">
          <iframe
            style={{ width: "100%", minHeight: "300px"}} 
            src="https://www.youtube.com/embed/0dNJTexxl7o" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          {/* <video src="https://lampreaomar.wistia.com/medias/5ngzjaquee?embedType=async&videoFoam=true&videoWidth=640"></video> */}
        </Col>
        <Col md="6" className="d-flex flex-column justify-content-between pb-1 p-3 ps-md-4">
          <h4 className="subtitle py-0 my-3">{videoData.subtitle}</h4>
          {text.map ((t, i) => { 
            return <p key={"text-" + i}>{t.content[0].value}</p>
          })}
          <a href="/" className="link mt-3 mt-md-0">
            DOWNLOAD PDF REPORT
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#BDB5A7" className="arrow-link" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default VideoTemplate;