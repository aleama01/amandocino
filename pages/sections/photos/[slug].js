import React from "react";
import { getPosts, getPostDetails } from "../../../services";
import PlacePostDetail from "../../../components/PlacePostDetail";
import Head from "next/head";

/**
 * Photos post details container.
 *
 * @param post photos section's post details
 * @returns {ReactNode} A react component that is a container for Photos PlacePostDetail component and the Head component of this page.
 */
const PostDetails = ({ post }) => {
  return (
    <>
      <Head>
        <title>Amandocino | {post.title}</title>
        <meta name="description" content={`${post.title} photos`} />
      </Head>
      <div className="overflow-x-hidden">
        <PlacePostDetail post={post} />
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts("Postcards");
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
