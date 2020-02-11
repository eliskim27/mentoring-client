import React from 'react';
import MentorMenteeCardCon from './MentorMenteeCardCon';

class Pending extends React.Component {

    render(){
        return(
            <div> pending connections: 
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
        )
    }
}

export default Pending