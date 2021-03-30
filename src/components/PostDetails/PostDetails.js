import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const{id}=useParams();
    const[post,setPost]=useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h2><h4>id:{post.id}</h4>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;