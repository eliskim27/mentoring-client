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
      <div>
{/* REMOVE BELOW!!! FOR TESTING ONLY */}
        {/* <div>
          <span>Who would you like to log in as?</span>
          <select 
            onChange={(e) => {
              let newUser = {}
              if (e.target.value === "mentee") {
                newUser = this.state.allMentees.find(mentee => mentee.id === "1")
              } if (e.target.value === "mentor") {
                newUser = this.state.allMentors.find(mentor => mentor.id === "1")
              } if (e.target.value === "none") {
                newUser = {}
              } 
              this.setState({currentUser: newUser})}}>
              <option defaultValue="none">NONE</option>
              <option value="mentee">MENTEE</option>
              <option value="mentor">MENTOR</option>
          </select>
        </div> */}
{/* REMOVE ABOVE!!! FOR TESTING ONLY */}                                       

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
