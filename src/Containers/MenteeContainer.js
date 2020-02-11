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
                            editProfile={this.props.editProfile}
                        />    
                    }/>
                    <Route path='/user/connections' render={() =>
                        <Connections
                            currentUser={this.props.currentUser}
                            allMentors={this.props.allMentors}
                            connections={this.props.allConnections.filter(connection => connection.attributes.mentee.id.toString() === this.props.currentUser.id)}
                            deleteConnection={this.props.deleteConnection}
                            parentContainer={"mentee"}
                        />
                    }/>
                    <Route path='/user/search' render={() =>
                        <Search
                            currentUser={this.props.currentUser}
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