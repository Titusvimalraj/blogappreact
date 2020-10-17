import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Author = () => {
    const [author, setAuthor] = useState('');
    const { authorId } = useParams();

    useEffect(() => {
        (async (authorId) => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`);
                const data = await response.json();
                setAuthor(data);
            } catch (err) {
                console.log(err);
            }
        })(authorId);
    }, [authorId])

    return (
        <div>
            <p>{author.name}</p>
            <p>{author.email}</p>
            <a href={author.website}>{author.website}</a>
        </div>
    )
};

export default Author;