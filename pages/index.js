import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Zoa's Blog</title>
                <meta name="description" content="I post about programming and web development." />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    );
};

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;