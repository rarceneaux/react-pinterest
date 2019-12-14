import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connections';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavbar';
import BoardsContainer from '../components/BoardsContainer/BoardsContainer';

import './App.scss';

firebaseConnection.firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavBar authed={authed}/>
        {
          (authed) ? (<BoardsContainer />) : (<Auth />)
        }
      </div>
    );
  }
}

export default App;
