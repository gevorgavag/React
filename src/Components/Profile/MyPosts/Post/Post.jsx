import React from 'react';
import s from "./post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
                <img src="https://tomatoheart.com/wp-content/uploads/2017/03/mr-bean-avatar-or-gay-avatardd.jpg"/>
                <p>post 1</p>
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;
