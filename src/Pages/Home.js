import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import routes from '../routes';
const Home = () => {

    const [posts, setPosts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])

    return (
        <div className="container">
            <h2>Home!</h2>
            {
                posts.map((post, index) => {
                    const openPostsDetails = () => {
                        history.push(routes.post.replace(":id", post.id));
                    };
                    return (
                        <div key={index} className="container">
                            <Post title={post.title} body={post.body} index={index} userId={post.userId} />
                            <Button onClick={openPostsDetails} />
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Home;