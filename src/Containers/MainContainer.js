import React from 'react';
import MentorContainer from './MentorContainer';
import MenteeContainer from './MenteeContainer';


class MainContainer extends React.Component {
    whichCont = (userType) => {
        if (userType === 'mentor') {
            return (
                <MentorContainer
                />)
        } if (userType === 'mentee') {
            return (
                <MenteeContainer
                    currentUser={this.props.currentUser}
                    allMentors={this.props.allMentors}
                    allConnections={this.props.allConnections}
                    newConnect={this.props.newConnect}
                />)
        } else {}
    }

    render() {
        return(
            <div>
                {this.whichCont(this.props.currentUser.usertype)}
            </div>
        )
    }


}

export default MainContainer

