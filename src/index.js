import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'It\'s my first post', likesCount: 15},
    {id: 3, message: 'Ciao bello', likesCount: 5},
    {id: 4, message: 'Ola', likesCount: 8}
]

const dialogs = [
    {id: 1, name: 'Stas'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Ostap'},
    {id: 4, name: 'Volodya'},
    {id: 5, name: 'Anya'},
    {id: 6, name: 'Serhiy'}
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yoyo'},
    {id: 5, message: 'yoyoyo'},

]
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
