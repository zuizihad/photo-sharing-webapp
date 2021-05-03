import React, { useContext, useState } from 'react';
import { userContext } from '../../App';

const CreateAlbum = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [album, setAlbum] = useState({
        email: loggedInUser.email,
        albumName: '',
        albumPrivacy: '',
    })
    const handleChange = (e) => {
        const newAlbumInfo = { ...album };
        newAlbumInfo[e.target.name] = e.target.value;
        setAlbum(newAlbumInfo);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://shrouded-plains-92067.herokuapp.com/api/createAlbum`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(album)
        })
            .then(res => res.json())
            .then(data => alert(data.msg))
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card mt-5">
                <div className="card-body">
                    <h3 className="text-center text-secondary my-3">create an album</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">A</span>
                            <input type="text" onBlur={handleChange} required name="albumName" className="form-control" placeholder="Album Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <select className="form-select" required onClick={handleChange} name="albumPrivacy" id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>select photo album privacy</option>
                                <option value="private">private</option>
                                <option value="public">public</option>
                            </select>
                        </div>
                        <div className="text-center"><button type="submit" className="btn btn-secondary">create</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAlbum;