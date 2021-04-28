import React from 'react';

const CreateAlbum = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card login-card mt-5">
                <div className="card-body">
                    <h3 className="text-center text-secondary my-3">create an album</h3>
                    <form action="">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">A</span>
                            <input type="text" class="form-control" placeholder="Album Name" aria-label="name" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                                <option selected>select photo album privacy</option>
                                <option value="1">private</option>
                                <option value="2">public</option>
                            </select>
                        </div>
                        <div className="text-center"><button type="button" class="btn btn-secondary">create</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAlbum;