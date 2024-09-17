import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';

//const graphqlAPI = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbfdr89b0mui01t8fixbhdj7/master';

//query to get all posts
export const getPosts = async (category) => {
  const graphQLClient = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbfdr89b0mui01t8fixbhdj7/master'
  );
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
            roles
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
            tag(first:20) {
              name
            }
          }
        }
      }
    }
  `;
  const result = await graphQLClient.request(query, { category })
  //const result = await request(graphqlAPI, query, { category });
  return result.postsConnection.edges.reverse();
};

export const getRecentTenPosts = async (category) => {
  const graphQLClient = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbfdr89b0mui01t8fixbhdj7/master'
  );
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
  const result = await graphQLClient.request(query, { category })
  //const result = await request(graphqlAPI, query, { category });
  return result.postsConnection.edges.reverse();
};

export const getPostDetails = async (slug) => {
  const graphQLClient = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbfdr89b0mui01t8fixbhdj7/master'
  );
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
  const result = await graphQLClient.request(query, { slug })
  return result.post;
};