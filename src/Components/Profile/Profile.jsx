import React from 'react';
import s from "./css/Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://static.vecteezy.com/ti/photos-gratuite/p1/13485800-fond-de-voyage-d-ete-ile-de-plage-tropicale-exotique-cote-paradisiaque-palmiers-sable-blanc-ciel-incroyable-ocean-lagon-fantastique-fond-de-nature-magnifique-journee-ensoleillee-vacances-idylliques-inspirantes-photo.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;