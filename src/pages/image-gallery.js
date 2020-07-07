import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from '../components/Layout/Layout';
import classes from '../components/ImageGallery/ImageGallery.module.css';

const ComponentName = ({ data }) => {
    const { allFile: { nodes: images } } = data;
    return (
        <Layout>
            <h1 className={classes.PageTitle}>The image gallery</h1>
            <div className={classes.ImageGroup}>
                {images.map((image, index) => (
                    <Img
                        key={index}
                        className={classes.SingleImage}
                        fluid={image.childImageSharp.fluid} />
                ))}
            </div>

        </Layout>
    )
}

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

export default ComponentName;