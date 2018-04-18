sort by date, author (challenge)
query params - reflect in url
enter in a new wassup

/home = home
/users/user_id = profile
/users = all users


one component per route

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