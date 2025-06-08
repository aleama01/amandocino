import { getPosts, getPostDetails, getRecentTenPosts } from "../../../services";
import PostDetail from "../../../components/PostDetail";
import PostDetailMobile from "../../../components/PostDetailMobile";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { Context } from "../../../Context";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";

/**
 * Project post details container.
 *
 * @param post Project section's post details
 * @returns {ReactNode} A react component that is a container for Project PostDetail component and the Head component of this page.
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
                initial={{ left: "100vw", top: "5dvh" }}
                animate={{ left: "2vw", top: "5dvh" }}
                exit={{ left: "100vw", top: "5dvh" }}
                transition={{ duration: 0.4, type: "tween" }}
                className="absolute flex flex-col items-center z-20 justify-center"
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={() => handleClickBack()}
                  className="font-thin text-3xl md:text-[32px]"
                  aria-label="Go back to previous page"
                >
                  <BsArrowLeft />
                </button>
              </motion.div>

              <motion.div
                key={"project"}
                initial={{ left: "100vw" }}
                animate={{ left: 0 }}
                exit={{ left: "100vw" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="overflow-hidden bg-[#101411] h-[100dvh] absolute top-0 w-screen justify-end z-10 flex flex-row"
              >
                <PostDetailMobile
                  post={post}
                  postCategory={post.category.slug}
                />
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
                initial={{ left: "-5vw", top: "5dvh" }}
                animate={{ left: "2vw", top: "5dvh" }}
                exit={{ left: "-5vw", top: "5dvh" }}
                transition={{ duration: 0.2, type: "tween" }}
                className="absolute flex flex-col items-center z-50 justify-center"
                style={{ willChange: "transform" }}
              >
                <button
                  onClick={() => handleClickBack()}
                  className="font-thin text-3xl md:text-[32px]"
                  aria-label="Go back to previous page"
                >
                  <BsArrowLeft />
                </button>
              </motion.div>

              <motion.div
                key={"diary-story"}
                initial={{ right: "100vw" }}
                animate={{ right: "30vw" }}
                exit={{ right: "100vw" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="overflow-hidden bg-[#101411] h-[100dvh] absolute top-0 w-[70vw] justify-end z-10 flex flex-row"
                style={{ willChange: "transform", direction: "rtl" }}
              >
                <PostDetail post={post} postCategory={post.category.slug} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, right: "5vw", top: "15vh", scale: 0 }}
                animate={{ opacity: 1, right: "5vw", top: "15vh", scale: 1 }}
                exit={{ opacity: 0, right: "5vw", top: "15vh", scale: 0 }}
                transition={{
                  duration: 0.2,
                  type: "crown",
                  bounce: 0.1,
                  damping: 15,
                  exit: { delay: 0 },
                }}
                className="absolute flex flex-col items-center justify-center z-20"
                style={{ rotate: "10deg" }}
              >
                <Image
                  src="/drawings/crown.png"
                  alt="crown"
                  width={300}
                  height={300}
                />
              </motion.div>
              {/**
               * 
              <motion.div
                initial={{ opacity: 0, right: "45vw", top: "15vh", scale: 0 }}
                animate={{ opacity: 1, right: "45vw", top: "15vh", scale: 1 }}
                exit={{ opacity: 0, right: "45vw", top: "15vh", scale: 0 }}
                transition={{
                  duration: 0.2,
                  type: "crown",
                  bounce: 0.1,
                  damping: 15,
                  exit: { delay: 0 },
                }}
                className="absolute flex flex-col items-center justify-center z-20"
              >
                <Image
                  src="/drawings/crown.png"
                  alt="crown"
                  width={200}
                  height={200}
                  style={{ rotate: "-10deg" }}
                />
              </motion.div>
              */}

              <motion.div
                key={"project-overlay"}
                initial={{ right: "100vw", top: "32px" }}
                animate={{ right: "30vw", top: "32px" }}
                exit={{ right: "100vw", top: "32px" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="font-bold absolute text-[128px] z-20"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  rotate: "180deg",
                }}
              >
                PROJECTS
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
  const posts = await getPosts("Projects");

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
