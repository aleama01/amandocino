import React, { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { getPosts, getPostDetails, getRecentTenPosts } from "../../../services";
import PostDetail from "../../../components/PostDetail";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Context } from "../../../Context";
import { useRouter } from "next/router";

/**
 * Diary post details container.
 *
 * @param post friends and diary section's post details
 * @returns {ReactNode} A react component that is a container for Diary PostDetail component and the Head component of this page.
 */
const PostDetails = ({ post, posts }) => {
  const router = useRouter();
  const { showContent, setShowContent, setExpandStory, expandStory } =
    useContext(Context);

  const handleClickBack = () => {
    setExpandStory(false);
    setTimeout(() => {
      router.push(`/sections/${post.category.slug}`);
    }, 400); // Match this to your exit animation duration

    setTimeout(() => {
      setShowContent(true);
    }, 400);
  };

  return (
    <>
      <Head>
        <title>Amandocino | {post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <AnimatePresence>
        {expandStory && (
          <>
            <motion.div
              initial={{ left: "-5vw", top: "5vh" }}
              animate={{ left: "2vw", top: "5vh" }}
              exit={{ left: "-5vw", top: "5vh" }}
              transition={{ duration: 0.2, type: "tween" }}
              className="absolute flex flex-col items-center z-50 justify-center"
              style={{ willChange: "transform" }}
            >
              <button
                onClick={() => handleClickBack()}
                className="font-thin text-3xl sm:text-[32px]"
                aria-label="Go back to previous page"
              >
                <BsArrowLeft />
              </button>
            </motion.div>
            <motion.div
              key={"diary-story"}
              initial={{ left: "100vw" }}
              animate={{ left: 0 }}
              exit={{ left: "100vw" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="overflow-hidden bg-[#101411] h-screen absolute top-0 w-screen justify-end z-10 flex flex-row"
            >
              <PostDetail post={post} posts={posts} />
              <motion.div
                initial={{ opacity: 0, left: "17vw", top: "55vh", scale: 0 }}
                animate={{ opacity: 1, left: "17vw", top: "55vh", scale: 1 }}
                exit={{ opacity: 0, left: "17vw", top: "55vh", scale: 0 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  bounce: 0.1,
                  damping: 15,
                  exit: { delay: 0 },
                }}
                className="absolute flex flex-col items-center justify-center z-20"
              >
                <Image
                  src="/spring.png"
                  alt="spring"
                  width={500}
                  height={500}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, left: "15vw", top: "2vh", scale: 0 }}
                animate={{ opacity: 1, left: "15vw", top: "2vh", scale: 1 }}
                exit={{ opacity: 0, left: "15vw", top: "2vh", scale: 0 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  bounce: 0.1,
                  damping: 15,
                  exit: { delay: 0 },
                }}
                className="absolute flex flex-col items-center justify-center z-20"
              >
                <Image
                  src="/spring.png"
                  alt="spring"
                  width={300}
                  height={300}
                  className="rotate-[-50deg]"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  let posts = (await getRecentTenPosts("Diary")) || [];

  return {
    props: { post: data, posts: posts },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts("Diary");
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
