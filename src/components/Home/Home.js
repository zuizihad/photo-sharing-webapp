import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import AlbumCard from './AlbumCard';

const Home = () => {
    const [albums, setAlbums] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch(`http://localhost:5000/api/getPublicAlbum?privacy=${'public'}`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    albums.map(album => <AlbumCard album={album}></AlbumCard>)
                }
            </div>
        </div>
    );
};

export default Home;