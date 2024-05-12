import React from 'react';
import s from "./post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
                <img src="https://tomatoheart.com/wp-content/uploads/2017/03/mr-bean-avatar-or-gay-avatardd.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;
