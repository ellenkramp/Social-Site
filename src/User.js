import React from 'react';
import './App.css';
import moment from 'moment';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {reducer} from './Reducer.js';

const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

let thisUser = () => {

    fetch("https://my.api.mockaroo.com/sup_app.json?key=e1133e10")
        .then(function(response) {
            return response.json();
        })
        .then(function(body) {
            return body;
        });
    }

let userInfoArray = thisUser();

let addSup = (thingToAdd) => {
    console.log("this works");
    store.dispatch({type: 'CREATE_SUP'});

}

// const UserInfoDisplay =
//     {userInfoArray.map(post, () => 
//     <div>
//         <h1>Ellen's Sups:</h1>
//         <h2>{post.title}</h2>
//         <p>{post.body}</p>
//         <p>{moment(post.time).fromNow()}</p>
//         <img src={post.pic} alt="mypic" />
//     </div>

const User = () => 
  <div>

    <form>
        Title:<input label="title" name="title" type="text" /><br />
        Content:<textarea label="your sup" name="body" rows="10" cols="30" /><br />
        
        <button onClick={addSup}>add your sup</button>
    </form>
  </div>

let mapStateToProps = (state) => {
    return {sups: state.sups};
}

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let Screen = connect(mapStateToProps, mapDispatchToProps, User);

<Provider store={store}>
    <Screen />
</Provider>

export default User;