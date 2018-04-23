import React from 'react';
import moment from 'moment';
import sort from 'lodash/sortBy';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { reducer, ADD_SUP } from './Reducer';


const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

let action = {
    type: ADD_SUP,
};

export class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            sortBy: ""
        };
    }

    fetchData = () => {
        fetch("https://my.api.mockaroo.com/sup_app.json?key=e1133e10")
        .then(response => response.json())
        .then(body => this.setState({users: body}))
        }

    componentDidMount() {
        this.fetchData();

    }
    componentDidUpdate(prevProps) {
        let prevUserId = prevProps.match.params.username;
        let currUserId = this.props.match.params.userId;
        if (prevUserId !== currUserId) {
        this.fetchData();
        }
    }
    render() {    
        return <div>{this.state.users.map((thing) => 
            <div class="profiles">
                <img class="prof" alt="user-pic" src={thing.pic}></img>
                <h3>{thing.first}</h3>
                <h2>{thing.title}</h2>
                <li><b>{thing.body}</b></li>
                <p>{moment(Date()).fromNow()}</p>
            </div>
        )}
        
            <select 
                value={this.state.sortBy}
                onChange={event => this.setState( { sortBy: event.target.value })}>
                <option value="title">By User</option>
                <option value="body">By Title</option>
            </select>
        </div>
    }
}

export default List;
