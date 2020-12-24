import React from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';

const Post = ({caption, username, imageUrl}) => {
    return (
        <div className="post">
            <div className="post__header">
              <Avatar className="post__avatar" src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="react"/>
            <h3>{username}</h3>  
            </div>
            
            <img className="post__image" src={imageUrl}></img>
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
