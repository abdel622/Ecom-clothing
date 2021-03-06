import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
 

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      currentUser : null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser : user} )
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          }, ()=>{
            console.log(this.state)
          })
        })

        console.log(this.state);
      }

      this.setState({
        currentUser:userAuth
      })
      
      // console.log(user) 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}
}

export default App;
