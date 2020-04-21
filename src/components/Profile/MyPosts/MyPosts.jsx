import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'It\'s my first post', likesCount: 15},
    {id: 3, message: 'Ciao bello', likesCount: 5},
    {id: 4, message: 'Ola', likesCount: 8}
]

const postsElements = posts.map(el => {
    return <Post key={el.id} message={el.message} like={el.likesCount} />
})
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
                {postsElements}
            </div>
        </div>


    )
}

export default MyPosts