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

    whichButton = () => {
        if (this.props.currentUser.type === "mentor" && this.props.connection.attributes.status === "pending") {
            return(
                <button className="ui button" onClick={this.approveClick}>Approve Connection</button>
                )
            } else if (this.props.currentUser.type === "mentor" && this.props.connection.attributes.status === "approved") {
            return(
                <button className="ui disabled button">Connection Approved</button>
            )
        } else if (this.props.currentUser.type === "mentee" && this.props.connection.attributes.status === "pending") {
            return(
                <button className="ui disabled button">Connection Pending</button>
            )
        } else if (this.props.currentUser.type === "mentee" && this.props.connection.attributes.status === "approved") {
            return(
                <button className="ui disabled button">Connection Approved</button>
            )
        } 
    }

    render(){
        return(
            <div className="card">
                <img src={this.props.currentUser.attributes.picture}></img>
                <h1>{this.props.mentormentee.first} {this.props.mentormentee.last}</h1>
                {this.props.seeAllInfo ? 
                    <div>Email: {this.props.mentormentee.email}</div> :
                null}
                <div>Location: {this.props.mentormentee.location}</div>
                <div>Age: {this.props.mentormentee.age}</div>
                <div>Gender: {this.props.mentormentee.gender}</div>
                <div>Bio: {this.props.mentormentee.bio}</div>
                <div className="ui two bottom attached buttons">
                    {this.whichButton()}
                    <button className="ui button" onClick={this.deleteClick}>Delete Connection</button>
                </div>
            </div>
        )
    }
}

export default MentorMenteeCardCon

{/* <button className="ui disabled button">{this.props.connection.attributes.status === "pending" ? "Connection Pending" : "Connection Approved"}</button>
                    <button className="ui button" onClick={this.deleteClick}>Delete Connection</button>
                    {this.props.approveConnection ? 
                        <button className="ui button" onClick={this.approveClick}>Approve Connection</button>
                        : null} */}