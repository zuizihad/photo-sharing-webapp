import React from 'react';

const ImageCard = ({ album }) => {
    return (
        <div className="col-md-4 col-sm-12">
            <img src={album.imageURL} alt="" width="300" />
        </div>
    );
};

export default ImageCard;