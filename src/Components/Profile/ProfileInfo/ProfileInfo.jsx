import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://vellum.myshopify.com/cdn/shop/products/large-lineup-lead__lead-1.jpg?v=1432061824"
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;