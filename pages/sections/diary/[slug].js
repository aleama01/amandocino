import React, { useContext, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { getPosts, getPostDetails, getRecentTenPosts } from "../../../services";
import PostDetail from "../../../components/PostDetail";
import PostDetailMobile from "../../../components/PostDetailMobile";
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
const PostDetails = ({ post }) => {
  const router = useRouter();
  const { setShowContent, setExpandStory, expandStory, mobile } =
    useContext(Context);

  useEffect(() => {
    if (!expandStory) setExpandStory(true);
  }, []);

  const handleClickBack = () => {
    setExpandStory(false);
    setTimeout(() => {
      router.push(`/sections/${post.category.slug}`);
    }, 400); // Match this to your exit animation duration

    setTimeout(() => {
      setShowContent(true);
    }, 400);
  };

  if (mobile) {
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
                <PostDetailMobile
                  post={post}
                  postCategory={post.category.slug}
                />
                <motion.div
                  initial={{ opacity: 0, left: "40vw", top: "-5vh", scale: 0 }}
                  animate={{ opacity: 1, left: "40vw", top: "-5vh", scale: 1 }}
                  exit={{ opacity: 0, left: "40vw", top: "-5vh", scale: 0 }}
                  transition={{
                    duration: 0.1,
                    type: "spring",
                    bounce: 0.1,
                    damping: 15,
                    exit: { delay: 0 },
                  }}
                  className="absolute flex flex-col items-center justify-center"
                  style={{ willChange: "transform, opacity" }}
                >
                  <Image
                    src="/drawings/spring.png"
                    alt="spring"
                    width={150}
                    height={150}
                    className="rotate-[-50deg]"
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  } else {
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
                <PostDetail post={post} postCategory={post.category.slug} />
                <motion.div
                  initial={{ opacity: 0, left: "19vw", top: "47vh", scale: 0 }}
                  animate={{ opacity: 1, left: "19vw", top: "47vh", scale: 1 }}
                  exit={{ opacity: 0, left: "19vw", top: "47vh", scale: 0 }}
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
                    src="/drawings/spring.png"
                    alt="spring"
                    width={300}
                    height={300}
                  />
                </motion.div>
                <motion.div
                  key={"diary-overlay"}
                  initial={{ right: "-100vw", top: "80vh" }}
                  animate={{ right: "56vw", top: "80vh" }}
                  exit={{ right: "-100vw", top: "80vh" }}
                  transition={{ type: "tween", duration: 0.2 }}
                  className="font-bold text-[128px] text-right absolute leading-none"
                  style={{ willChange: "transform, opacity" }}
                >
                  DIARY
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
                    src="/drawings/spring.png"
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
  }
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts("Diary");
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
