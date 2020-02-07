import React from 'react';
import * as Fetches from './Fetches'
import { Route, Switch } from 'react-router-dom';

// CHILDREN COMPONENTS
import NavBar from './Containers/NavBar';
import MainContainer from './Containers/MainContainer';
import Homepage from './Components/Homepage';



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
    console.log("new con in app")
  }

  componentDidMount() {
    Fetches.getMentors().then(allMentors => {
      this.setState({allMentors: allMentors})})
    Fetches.getMentees().then(allMentees => {
      this.setState({allMentees: allMentees})})
    Fetches.getConnections().then(allConnections => {
      this.setState({allConnections: allConnections})})
  }

  render() {
    return(
      <div>
{/* REMOVE BELOW!!! FOR TESTING ONLY */}
        <div>
          <span>Who would you like to log in as?</span>
          <select 
            onChange={(e) => {
              let newUser = {}
              if (e.target.value === "mentee") {
                newUser = this.state.allMentees.find(mentee => mentee.id === 1)
              } if (e.target.value === "mentor") {
                newUser = this.state.allMentors.find(mentor => mentor.id === 1)
              } if (e.target.value === "none") {newUser = {}} 
              this.setState({currentUser: newUser})}}>
              <option defaultValue="none">NONE</option>
              <option value="mentee">MENTEE</option>
              <option value="mentor">MENTOR</option>
          </select>
        </div>
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
              allConnections={this.state.allConnections}
              newConnect={this.newConnect}
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
