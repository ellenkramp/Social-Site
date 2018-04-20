DATE: APRIL 19th, 2018

ASSIGNMENT---
-create a store
do switch statements to dterment actions upton "type"

do mapStateToProps and mapDispatchToProps functions

REDUX---
State Store
-1 global variable
-each component can directly change the global variable through actions/functions
-we don't have to pass it down all the way through other components
-Types of React Data
--Props - comes from above
--State - comes from yourself

const initialState = {
    sups: []
}
store.subscribe(() => {
    console.log('Changed': store.getState)
})
let store = createStore(reducer);

let action = { type: 'CREATE_SUP',
                body: 'hi there' }

let reducer = (oldState, action) => {
    if (action.type === 'CREATE_SUP') {
        oldState.sups.concat(['Hi there])
        return Object.assign({}, oldState, { sups });
        return { ...oldState, sups: sups }
    }
    return {};
}
let createClass = (ComponentToWrap) =>
^^^^^higher order component ^^^^
vvvvv this is what redux "gives" us vvvvvv
    class Screen extends React.Component {
        constructor(props) {
            super(props);
            this.state = store.getState();
            store.subscribe(() => {
                this.setState(store.getStare())
            })
        }
    }
    render() {
        let { sups } = this.state;
    return (
    <div>
    <p>{sups.toString()}</p>
    <button onClick={() => store.dispatch({type: 'CREATE_SUP'})}>click</button>
    </div> )
}
}

---------------------------------
import { connect } from 'react-redux';
connect takes in 2 functions as arguments... mapStateToProps function and mapDispatchToProps function
let Screen = connect(
    (state)=> {
        return { sups: state.sups };
    },
    (dispatch) => {
        return { dispatch: dispatch };
    },
)(ScreenDumb);

let ui =
<Provider store={store}>
    <Screen />
</Provider>

---------------------------------

sort by date, author (challenge)
query params - reflect in url
enter in a new wassup

/home = home
/users/user_id = profile
/users = all users


one component per route
**if your new state is based on the old set state, then use a callback function for setState:

this.setState(state => function goes here)

const sups = [
  {author: "You",
  body: "Are",
  time: new Date()}
]

const Sups = [sups[0]];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUrl: '/' };
  }

  componentDidMount() {
    window.addEventListener('hashchange', (event) => {
      event.newURL.split("#")[1];
      this.setState({ currentUrl: url });
    });
  }
  render() {
    return (
      <div>
        { currentUrl === 'users/nybblr' ?
          <div>
            <a href="#/users/"></a>
        {
          showSups ? 
        <SupList sups={sups} />
        :
        <SupList sups="hello" />
      }
      </div>
      
    );
    
  }
  }