import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 15},
            {id: 3, message: 'Ciao bello', likesCount: 5},
            {id: 4, message: 'Ola', likesCount: 8}
        ]
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yoyo'},
            {id: 5, message: 'yoyoyo'},

        ],

        dialogs: [
            {id: 1, name: 'Stas'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Ostap'},
            {id: 4, name: 'Volodya'},
            {id: 5, name: 'Anya'},
            {id: 6, name: 'Serhiy'}
        ]
    }

}

export const addPost = (postMessage) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state