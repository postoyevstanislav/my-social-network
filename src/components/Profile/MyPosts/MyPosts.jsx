import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    const postsElements =
        props.posts.map(el => <Post key={el.id} message={el.message} like={el.likesCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        const text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''

    }
    return (
        <div className={style.postBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>

                {postsElements}

            </div>
        </div>


    )
}

export default MyPosts