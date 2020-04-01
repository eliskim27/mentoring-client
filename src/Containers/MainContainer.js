import React from 'react';
import MentorContainer from './MentorContainer';
import MenteeContainer from './MenteeContainer';


class MainContainer extends React.Component {
    whichCont = (userType) => {
        if (userType === 'mentor') {
            return (
                <MentorContainer
                    currentUser={this.props.currentUser}
                    allConnections={this.props.allConnections}
                    deleteConnection={this.props.deleteConnection}
                    approveConnection={this.props.approveConnection}
                    editProfile={this.props.editProfile}
                />)
        } if (userType === 'mentee') {
            return (
                <MenteeContainer
                    currentUser={this.props.currentUser}
                    allMentors={this.props.allMentors}
                    allConnections={this.props.allConnections}
                    newConnect={this.props.newConnect}
                    deleteConnection={this.props.deleteConnection}
                    editProfile={this.props.editProfile}
                />)
        } else {}
    }

    render() {
        return(
            <div className="ui center aligned container">
                {this.whichCont(this.props.currentUser.type)}
            </div>
        )
    }


}

export default MainContainer

