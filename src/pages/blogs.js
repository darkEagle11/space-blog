import React from 'react';
import Layout from '../components/Layout/Layout';
import Image1 from '../images/image-1.jpg';
import { Link, graphql } from 'gatsby';
import classes from '../components/Blogs/blogs.module.css';
import Image from 'gatsby-image';

const blogs = props => {
    const { allContentfulBlogPost: { nodes: posts } } = props.data;

    return (
        <Layout>
            <h1 className={classes.PageTitle}>Blogs</h1>

            <section className={classes.BlogsContainer}>
                {posts.map(post => (
                    <article className={classes.Blog}>
                        <Image className={classes.Image} fluid={post.image.fluid} />
                        <h3 className={classes.PostTitle}>{post.title}</h3>
                        {/* <p>date</p> */}
                        {/* <p>{post.description.description}</p> */}
                        <Link to={`/blogs/${post.id}`}>Read More</Link>
                    </article>
                ))}
            </section>
        </Layout >
    )
}


export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        title
        id: contentful_id
        slug
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
  }
`;
export default blogs
