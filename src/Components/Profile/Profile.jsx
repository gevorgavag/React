import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    className={s.img}
                    src="https://static.vecteezy.com/ti/photos-gratuite/p1/13485800-fond-de-voyage-d-ete-ile-de-plage-tropicale-exotique-cote-paradisiaque-palmiers-sable-blanc-ciel-incroyable-ocean-lagon-fantastique-fond-de-nature-magnifique-journee-ensoleillee-vacances-idylliques-inspirantes-photo.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;