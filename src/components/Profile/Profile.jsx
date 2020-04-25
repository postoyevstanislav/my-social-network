import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile