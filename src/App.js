import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



function App(props) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.appState.dialogsPage}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.appState.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        state={props.appState.profilePage}
                        addPost={props.addPost}/>}/>

                </div>


            </div>

    )
}


export default App;

