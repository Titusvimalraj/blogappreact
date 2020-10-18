import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import { useParams } from 'react-router-dom';

const useFetchPostByID = (id) => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        (async (id) => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.log(err);
            }
        })(id);
    }, [id]);

    return post;
}

const PostPage = () => {
    const { id } = useParams();
    const post = useFetchPostByID(id);
    return (
        <>
            <h2>Post Page</h2>
            {post.userId ? <Post title={post.title} body={post.body} userId={post.userId} /> : null}
        </>
    )

}

export default PostPage;