import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <description name="description" content="A list of all programming-related tutorials and posts!" />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    );
};

export const getStaticProps = () => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
};

export default AllPostsPage;