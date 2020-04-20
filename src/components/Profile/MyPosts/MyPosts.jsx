import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'It\'s my first post', likesCount: 15}
]
const MyPosts = (props) => {
    return (
        <div className={style.postBlock}>
            <div>
               <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={postData[0].message} like ={postData[0].likesCount}/>
                <Post message={postData[1].message} like ={postData[1].likesCount}/>
            </div>
        </div>


    )
}

export default MyPosts