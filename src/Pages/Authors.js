import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import Author from '../Components/Author';
const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const { path, url } = useRouteMatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setAuthors(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])

    return (
        <div className="container">
            <h2>
                Authors!
            </h2>
            <ul>
                {
                    authors.map((author, index) => {
                        return <li key={index}>
                            <Link to={url + "/" + author.id}>{author.name}</Link>
                        </li>
                    })
                }
            </ul>
            <Switch>
                <Route path={path + "/:authorId"}>
                    <Author />
                </Route>
            </Switch>
        </div>
    )
}

export default Authors;