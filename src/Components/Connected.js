import React from 'react';
import MentorMenteeCardCon from './MentorMenteeCardCon';

class Connected extends React.Component {

    render(){
        return(
            <div> approved connections: 
                {this.props.connections.map((connection, index) => {
                    return(
                        <MentorMenteeCardCon
                            key={index}
                            mentormentee={this.props.parentContainer === "mentee connections" ? 
                                    connection.attributes.mentor : connection.attributes.mentee}
                            connection={connection}
                            currentUser={this.props.currentUser}
                            deleteConnection={this.props.deleteConnection}
                            seeAllInfo={true}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Connected