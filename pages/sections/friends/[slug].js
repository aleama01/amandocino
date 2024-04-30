import React from "react";
import { getPosts, getPostDetails, getRecentTenPosts } from "../../../services";
import PostDetail from "../../../components/PostDetail";
import Head from "next/head";

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
  let posts = (await getRecentTenPosts("Friends")) || [];
  return {
    props: { post: data, posts: posts },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts("Friends");
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
