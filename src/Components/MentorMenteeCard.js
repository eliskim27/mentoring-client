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
        // let menteeConnects = this.props.currentUser.attributes.connections
        // console.log(menteeConnects)
        // let x = menteeConnects.find(connection => connection.mentor_id === this.props.mentor.id)
        // console.log(this.props.mentor)
// console.log(this.props.mentor.connections[0].mentee_id)
        let mentorConnection = this.props.mentor.connections.find(connection => connection.mentee_id.toString() === this.props.currentUser.id.toString())
        console.log(mentorConnection)
        // let x = mentorConnections.find(connection => connection.mentee_id === this.props.currentUser.id)
        // console.log(mentorConnection)

        return(
            <div>
                <h1>{this.props.mentor.first} {this.props.mentor.last}</h1>
                {this.props.seeAllInfo ? 
                    <div>Email: {this.props.mentor.email}</div> :
                null}
                <div>Location: {this.props.mentor.location}</div>
                <div>Age: {this.props.mentor.age}</div>
                <div>Gender: {this.props.mentor.gender}</div>
                <div>Bio: {this.props.mentor.bio}</div>
                { mentorConnection ? 
                    <button>
                        {mentorConnection.status === "approved" ? "Connection Approved" : "Connection Pending"}
                    </button>
                    : 
                    <button onClick={this.newCon}>Connect</button> 
                }
            </div>
        )
    }
}

export default MentorMenteeCard