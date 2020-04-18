import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

    return (

        <div className={classes.item}>
            <img src="https://www.chiechiera.it/wp-content/uploads/2019/11/avatar.jpg" alt=""/>
            {props.message}
            <div>
                <span>likes: {props.like}</span>
            </div>
        </div>

    )
}

export default Post