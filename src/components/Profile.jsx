import React from 'react';
import classes from './Profile.module.css'
const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
                <img src="https://i.pinimg.com/originals/e7/e9/1f/e7e91f5fef6726ff99a620202694340e.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
                <div>
                    My post
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile