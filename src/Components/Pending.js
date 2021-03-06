import React from 'react';
import MentorMenteeCardCon from './MentorMenteeCardCon';

class Pending extends React.Component {

    render(){
        return(
            <div>
                <h1 className="header"> Pending connections: </h1>
                <div className="ui special cards">
                    {this.props.connections.map((connection, index) => {
                        return(
                            <MentorMenteeCardCon
                                key={index}
                                mentormentee={this.props.parentContainer === "mentee connections" ? 
                                        connection.attributes.mentor : connection.attributes.mentee}
                                connection={connection}
                                currentUser={this.props.currentUser}
                                deleteConnection={this.props.deleteConnection}
                                seeAllInfo={false}
                                approveConnection={this.props.approveConnection}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Pending