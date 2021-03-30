import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const{id,title,body}=props.post;
    const history=useHistory();
    const showComment=()=>{
        const url=`post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2><h4>id:{id}</h4>{title}</h2>
            <p>{body}</p>
            <button onClick={()=>showComment(id)}>Comment</button>
        </div>
    );
};

export default Post;