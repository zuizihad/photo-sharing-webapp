import React from 'react';

const ImageCard = ({ album }) => {
    return (
        <div className="col-md-4 col-sm-12 mt-5">
            <img src={album.imageURL} alt="" width="300" className="mb-5" />
        </div>
    );
};

export default ImageCard;