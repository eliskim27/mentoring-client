import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../Components/Profile';
import Connections from '../Components/Connections';

class MentorContainer extends React.Component {

    render(){
        return(
            <div>
                MentorContainer
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
                            connections={this.props.allConnections.filter(connection => connection.attributes.mentor.id.toString() === this.props.currentUser.id)}
                            deleteConnection={this.props.deleteConnection}
                            parentContainer={"mentor"}
                            approveConnection={this.props.approveConnection}
                        />
                    }/>
                </Switch>
            </div>
        )
    }
}

export default MentorContainer