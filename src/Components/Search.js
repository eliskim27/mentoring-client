import React from 'react';
import MentorCard from './MentorCard';

class Search extends React.Component {

    render(){
        return(
            <div>
                <div>
                    search options bar
                </div>
                <div>
                    {this.props.allMentors.map((mentor, index) => {
                        return(
                            <MentorCard
                                key={index}
                                mentor={mentor}
                                connections={this.props.allConnections.filter(connection => connection.mentee_id === this.props.currentUser.id)}
                                currentUserId={this.props.currentUser.id}
                                newConnect={this.props.newConnect}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }


}

export default Search