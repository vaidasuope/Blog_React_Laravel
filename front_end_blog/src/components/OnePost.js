import React from 'react';

function OnePost({chosen, goBack}) {

    return (
        <div className="container">
            <h1>{chosen.title}</h1>
            <p>Category: <strong className="text-dark">{chosen.category.category}</strong> / Posted
                by <strong>{chosen.user.name}.</strong></p>
            <p>{chosen.body}</p>
            <button className='btn btn-primary rounded' onClick={goBack}>Go Back</button>
            <hr/>
            <div className="col-md-12">
                {chosen.comments.length!== 0 ?<h3>Comments</h3>:<h5>No comments added yet</h5>}
                {chosen.comments.map((comment) =>{
                    let dateFormat = comment.created_at.split("T");
                        return (
                            <p key={comment.id}>{dateFormat[0]}: {comment.body}</p>
                        )})}
            </div>
        </div>
    )
}

export default OnePost;