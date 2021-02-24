import React, {useEffect, useState} from 'react';

function AllPost({post, readMore,setDisplay}){

    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {post.map((item) => (
                            <div className="post-preview" key={item.id}>
                                <h2 className="post-title">{item.title}</h2>
                                <h4 className="post-subtitle font-weight-light" id="postText">{item.body}</h4>
                                <button className='btn btn-primary rounded float-right' onClick={()=>readMore(item.id)}>Read more</button>
                                <p className="post-meta">Category: <strong className="text-dark">{item.category.category}</strong>. Posted by
                                    <a href="#"> {item.user.name} </a>
                                    {item.created_at}</p>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

    )
}
export default AllPost;