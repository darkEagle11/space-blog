import React from "react"
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout/Layout';
import Image from "gatsby-image";
import classes from '../components/Blogs/Blog/Blog.module.css';

const ComponentName = props => {
  const { post: { id, title, description: { description }, image: { fluid } } } = props.data;
  return (
    <Layout>
      <Link to="/blogs">Back</Link>
      <header class={classes.BlogHeader}>
        <h2>{title}</h2>
      </header>

      <div class={classes.BlogContent}>
        <Image className={classes.FeaturedImg} fluid={fluid} />
        <p>{description}</p>
      </div>

    </Layout>
  )
}

export const query = graphql`
query PostQuery($id: String){
    post: contentfulBlogPost(contentful_id: {eq: $id}) {
      id: contentful_id
      title
      description {
        description
      }
      image {
        fluid {
            ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ComponentName;