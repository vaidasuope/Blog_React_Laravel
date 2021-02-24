import React from 'react';

function OnePost({chosen, goBack}) {

    return (
        <div className="container">
            <h1>{chosen.title}</h1>
            <p>Category: <strong className="text-dark">{chosen.category.category}</strong> / Posted
                by <strong>{chosen.user.name}.</strong></p>
            <p>{chosen.body}</p>
            <button className='btn btn-primary rounded float-right' onClick={goBack}>Go Back</button>
        </div>
    )
}

export default OnePost;