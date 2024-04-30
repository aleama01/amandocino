import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

//query to get all posts
export const getPosts = async (category) => {
  const query = gql`
    query MyQuery($category: String!) {
      postsConnection(first:25,where: { category: { name: $category } }) {
        edges {
          node {
            content {
              raw
            }
            excerpt
            date
            highlighted
            slug
            title
            category {
              name
              slug
            }
            image {
              url
            }
            images(first:50) {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { category });
  return result.postsConnection.edges.reverse();
};

export const getRecentTenPosts = async (category) => {
  const query = gql`
    query MyQuery($category: String!) {
      postsConnection(last:10,where: { category: { name: $category } }) {
        edges {
          node {
            excerpt
            highlighted
            slug
            title
            category {
              name
              slug
            }
            image {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { category });
  return result.postsConnection.edges.reverse();
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        authors {
          name
          link
        }
        content {
          raw
        }
        date
        excerpt
        highlighted
        slug
        title
        image {
          url
        }
        category {
          name
          slug
        }
        images (first:50) {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};