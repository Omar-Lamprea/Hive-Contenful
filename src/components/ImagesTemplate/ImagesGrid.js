import * as React from "react"
import "./ImagesGrid.css"
import { graphql, useStaticQuery } from "gatsby"

const Imagesgrid = () => {

  const data = useStaticQuery(graphql`query albumQuery {
    allContentfulImagesGrid {
      edges {
        node {
          imagesAlbum {
            file {
              url
            }
          }
        }
      }
    }
  }`)

  const album = data.allContentfulImagesGrid.edges[0].node.imagesAlbum

  return (
    <div className="grid-template">
      <div className="row-1">
        <img
          src={"https:"+ album[0].file.url}
          alt=""
        />
      </div>
      <div className="row-1">
        <img
          src={"https:"+ album[1].file.url}
          alt=""
        />
      </div>
      <div className="row-1">
        <img
          src={"https:"+ album[2].file.url}
          alt=""
        />
      </div>
      <div className="row-2">
        <img
          src={"https:"+ album[1].file.url}
          alt=""
        />
      </div>
      <div className="row-2">
        <img
          src={"https:"+ album[0].file.url}
          alt=""
        />
      </div>
      <div className="row-r">
        <img
          src={"https:"+ album[1].file.url}
          alt=""
        />
      </div>
      <div className="row-3">
        <img
          src={"https:"+ album[0].file.url}
          alt=""
        />
      </div>
      <div className="row-3">
        <img
          src={"https:"+ album[1].file.url}
          alt=""
        />
      </div>
    </div>
  )
}

export default Imagesgrid
