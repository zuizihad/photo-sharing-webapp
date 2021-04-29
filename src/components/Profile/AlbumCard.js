import React from 'react';
import './AlbumCard.css'

const AlbumCard = ({ album }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card album-card my-3">
                <div className="card-body">
                    <h5 className="card title">{album.albumName}</h5>
                    <p>privacy: {album.albumPrivacy}</p>
                </div>

            </div>
        </div>

    );
};

export default AlbumCard;