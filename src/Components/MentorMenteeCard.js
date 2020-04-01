import React from 'react';

class MentorMenteeCard extends React.Component {
    state = {
        mentee_id: this.props.currentUser.id,
        mentor_id: this.props.mentorId,
        
    }

    newCon = () => {
        fetch(`http://localhost:3000/connections`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                mentee_id: this.state.mentee_id,
                mentor_id: this.state.mentor_id,
                status: `pending`
              })
        })
        .then(resp => resp.json())
        .then(newConObj => {
            this.props.newConnect()
        })
    }
    
    render(){
        let mentorConnection = this.props.mentor.connections.find(connection => connection.mentee_id.toString() === this.props.currentUser.id.toString())

        return(
            <div className="card">
                <img src={this.props.currentUser.attributes.picture}></img>
                <h1>{this.props.mentor.first} {this.props.mentor.last}</h1>
                {this.props.seeAllInfo ? 
                    <div>Email: {this.props.mentor.email}</div> :
                null}
                <div>Location: {this.props.mentor.location}</div>
                <div>Age: {this.props.mentor.age}</div>
                <div>Gender: {this.props.mentor.gender}</div>
                <div>Bio: {this.props.mentor.bio}</div>
                <div className="extra content">
                    { mentorConnection ? 
                        <button className="ui disabled button">
                            {mentorConnection.status === "approved" ? "Connection Approved" : "Connection Pending"}
                        </button>
                        : 
                        <button className="ui button" onClick={this.newCon}>Connect</button> 
                    }
                </div>
            </div>
        )
    }
}

export default MentorMenteeCard