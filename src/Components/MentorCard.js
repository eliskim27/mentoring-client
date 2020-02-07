import React from 'react';

class MentorCard extends React.Component {
    state = {
        mentee_id: this.props.currentUserId,
        mentor_id: this.props.mentor.id,
    }

    newCon = () => {
        fetch(`http://localhost:3000/api/v1/connections`, {
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
            console.log(newConObj)
        })

        this.props.newConnect()
    }
    
    render(){
        let connect = this.props.connections.find(connection => connection.mentor_id === this.props.mentor.id)
        return(
            <div>
                <h1>{this.props.mentor.first} {this.props.mentor.last}</h1>
                <div>Email: {this.props.mentor.email}</div>
                <div>Location: {this.props.mentor.location}</div>
                <div>Age: {this.props.mentor.age}</div>
                <div>Gender: {this.props.mentor.gender}</div>
                <div>Bio: {this.props.mentor.bio}</div>
        {connect ? <button>{connect.status === "approved" ? "Connection Approved" : "Connection Pending"}</button> : 
                <button
                    onClick={this.newCon}
                >Connect</button> }
            </div>
        )
    }
}

export default MentorCard