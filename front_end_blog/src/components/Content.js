import React, {useEffect, useState} from 'react';
import OnePost from "./OnePost";
import AllPost from "./AllPost";
import Pagination from "./Pagination";

function Content() {

    const [post, setPost] = useState([]);
    const [chosen, setChosen] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);




    const fetchData = async () => {
        const response = await fetch(`http://blog.test/api/blog/`);
        const posts = await response.json();
        setPost(posts.data.map(one => {
            return one;
        }));
    }
    useEffect(()=>{
        fetchData();
    },[])

    const readMore = async (id) => {
        const response = await fetch(`http://blog.test/api/post/${id}`);
        const posts = await response.json();
        // console.log(posts.data.title);
        setPost([]);
        setChosen (posts.data);
        window.scroll(0,0);
    }

    useEffect(() => {
        readMore();
    },[])

    const goBack = () => {
        setChosen({});
        fetchData();
        window.scroll(0,0);
    }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = post.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = (e,pageNumber) => {
        e.preventDefault();
        window.scroll(0,0);
        setCurrentPage(pageNumber);
    }

    return (
        <div className="container">
            <AllPost post={currentPost} readMore={readMore}/>
            <div className="d-flex justify-content-end">
            <Pagination postPerPage={postPerPage} totalPosts={post.length} paginate={paginate}/>
            </div>
            {(typeof chosen.title != "undefined") ?<OnePost  chosen={chosen} goBack={goBack}/>: false}
        </div>
    )
}

export default Content;