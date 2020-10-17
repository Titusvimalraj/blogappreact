import React, { useState, useEffect } from 'react';

const Post = ({ title, body, userId }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        (async (userId) => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.log(err);
            }
        })(userId);
    }, [userId]);

    return (
        <div className="container">
            <h3>{title}</h3>
            <p>Author: {user.name}</p>
            <p>{body}</p>
        </div>
    );
}

export default Post;