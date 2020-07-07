const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query MyQuery {
            blogs: allContentfulBlogPost {
                nodes {
                    id: contentful_id
                }
            }
        }
       `);

    result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.id}`,
            component: path.resolve(`src/templates/blog-template.js`),
            context: {
                id: blog.id,
            }
        })
    })
}