import React from "react";
import { getPosts, getPostDetails, getRecentTenPosts } from "../../../services";
import PostDetail from "../../../components/PostDetail";
import Head from "next/head"


/**
 * Diary post details container.
 * 
 * @param post friends and diary section's post details
 * @returns {ReactNode} A react component that is a container for Diary PostDetail component and the Head component of this page.
 */
const PostDetails = ({ post, posts }) => {
  return (
    <>
      <Head>
        <title>Amandocino | {post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="overflow-x-hidden">
        <PostDetail post={post} posts={posts} />
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  let posts = (await getRecentTenPosts("Stories")) || [];

  return {
    props: { post: data, posts: posts },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts("Stories");
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
