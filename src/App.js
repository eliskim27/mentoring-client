import React from 'react';
import * as Fetches from './Fetches'
import { Route, Switch } from 'react-router-dom';

// CHILDREN COMPONENTS
import NavBar from './Containers/NavBar';
import MainContainer from './Containers/MainContainer';
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import Login from './Components/Login';

class App extends React.Component {
  state = {
    allMentors: [],
    allMentees: [],
    allConnections: [],
    currentUser: {},
  }

  logout = () => {
    this.setState({currentUser: {}})
  }

  newConnect = () => {
    Fetches.getMentors().then(allMentors => {
      this.setState({allMentors: allMentors.data})})
    Fetches.getMentees().then(allMentees => {
      this.setState({allMentees: allMentees.data})})
    Fetches.getConnections().then(allConnections => {
      this.setState({allConnections: allConnections.data})})
    }

  deleteConnection = (deletedConnection) => {
    let newConnections = [...this.state.allConnections]
    newConnections = newConnections.filter(connection => connection.id.toString() !== deletedConnection.id.toString())
    this.setState({allConnections: newConnections})
    Fetches.getMentors().then(allMentors => {
      this.setState({allMentors: allMentors.data})})
    Fetches.getMentees().then(allMentees => {
      this.setState({allMentees: allMentees.data})})
  }

  approveConnection = (updatedObj) => {
    Fetches.getMentors().then(allMentors => {
      this.setState({allMentors: allMentors.data})})
    Fetches.getMentees().then(allMentees => {
      this.setState({allMentees: allMentees.data})})
    Fetches.getConnections().then(allConnections => {
      this.setState({allConnections: allConnections.data})})
  }

  editProfile = (updatedObj) => {
    Fetches.getMentors().then(allMentors => {
      this.setState({allMentors: allMentors.data})})
    Fetches.getMentees().then(allMentees => {
      this.setState({allMentees: allMentees.data})})
    Fetches.getConnections().then(allConnections => {
      this.setState({allConnections: allConnections.data})})
    this.setState({currentUser: updatedObj})
  }

  signupSubmit = (newUserObj) => {
    this.setState({currentUser: newUserObj})}
  
  loginSubmit = (newUser) => {
    this.setState({currentUser: newUser})}

  componentDidMount() {
    Fetches.getMentors().then(allMentors => {
      this.setState({allMentors: allMentors.data})})
    Fetches.getMentees().then(allMentees => {
      this.setState({allMentees: allMentees.data})})
    Fetches.getConnections().then(allConnections => {
      this.setState({allConnections: allConnections.data})})
  }

  render() {
    return(
      <div 
        className="ui container"
        style={{
          padding:"10px"
        }}
      >
        <NavBar 
          currentUser={this.state.currentUser}
          logout={this.logout}
        />

        <Switch>
          <Route path='/user' render={() => 
            <MainContainer 
              currentUser={this.state.currentUser}
              allMentors={this.state.allMentors}
              allMentees={this.state.allMentees}
              allConnections={this.state.allConnections}
              newConnect={this.newConnect}
              deleteConnection={this.deleteConnection}
              approveConnection={this.approveConnection}
              editProfile={this.editProfile}
            />}/>
          <Route path='/signup' render={(routerProps) => 
            <Signup
              signupSubmit={this.signupSubmit}
              {...routerProps}
            />}/>
          <Route path='/login' render={(routerProps) => 
            <Login
              allMentors={this.state.allMentors}
              allMentees={this.state.allMentees}
              loginSubmit={this.loginSubmit}
              {...routerProps}
            />}/>
          <Route path='/' render={() => 
            <Homepage
            />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
