import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../Components/Profile';
import Connections from '../Components/Connections';
import Search from '../Components/Search';

class MenteeContainer extends React.Component {

    render(){
        return(
            <div>
                MenteeContainer
                <Switch>
                    <Route path='/user/profile' render={() =>
                        <Profile
                            currentUser={this.props.currentUser}
                        />    
                    }/>
                    <Route path='/user/connections' render={() =>
                        <Connections
                            currentUser={this.props.currentUser}
                            allConnections={this.props.allConnections}
                            allMentors={this.props.allMentors}
                        />
                    }/>
                    <Route path='/user/search' render={() =>
                        <Search
                            currentUser={this.props.currentUser}
                            allConnections={this.props.allConnections}
                            allMentors={this.props.allMentors}
                            newConnect={this.props.newConnect}
                        />
                    }/>
                </Switch>
            </div>
        )
    }
}

export default MenteeContainer