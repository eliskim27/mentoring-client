import React from 'react';

class MentorMenteeCardCon extends React.Component {
    
    deleteClick = () => {
        fetch(`http://localhost:3000/connections/data/${this.props.connection.id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(deletedObj => this.props.deleteConnection(deletedObj))
    }

    approveClick = () => {
        fetch(`http://localhost:3000/connections/data/${this.props.connection.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                status: `approved`
            })
        })
        .then(response => response.json())
        .then(updatedObj => this.props.approveConnection(updatedObj.data))
    }

    render(){
        return(
            <div>
                <h1>{this.props.mentormentee.first} {this.props.mentormentee.last}</h1>
                {this.props.seeAllInfo ? 
                    <div>Email: {this.props.mentormentee.email}</div> :
                null}
                <div>Location: {this.props.mentormentee.location}</div>
                <div>Age: {this.props.mentormentee.age}</div>
                <div>Gender: {this.props.mentormentee.gender}</div>
                <div>Bio: {this.props.mentormentee.bio}</div>
                <button>{this.props.connection.attributes.status === "pending" ? "Connection Pending" : "Connection Approved"}</button>
                <button onClick={this.deleteClick}>Delete Connection</button>
                {this.props.approveConnection ? 
                    <button onClick={this.approveClick}>Approve Connection</button>
                     : null}
            </div>
        )
    }
}

export default MentorMenteeCardCon