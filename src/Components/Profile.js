import React from 'react';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component {
    state = {
        showEdit: false
    }

    toggleShowEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
    }

    editSubmitToggle = () => {
        console.log("switch")
    }

    render(){
        return(
            <div style={{border:"20px"}} >
                <h1 className="header">Your Profile: </h1>
                {this.state.showEdit ?
                    <ProfileEdit currentUser={this.props.currentUser} editProfile={this.props.editProfile} toggleShowEdit={this.toggleShowEdit}/> :
                    <div style={{border:"20px"}} >
                        <img src={this.props.currentUser.attributes.picture}></img>
                        <h1>{this.props.currentUser.attributes.first} {this.props.currentUser.attributes.last}</h1>
                        <div>Email: {this.props.currentUser.attributes.email}</div>
                        <div>Location (State): {this.props.currentUser.attributes.location}</div>
                        <div>Age: {this.props.currentUser.attributes.age}</div>
                        <div>Gender: {this.props.currentUser.attributes.gender}</div>
                        <div>Bio: {this.props.currentUser.attributes.bio}</div>
                    </div>}
                    <br/>
                <button  
                    className="ui button"
                    onClick={this.toggleShowEdit}
                > {this.state.showEdit ? 'Return to Profile' : 'Edit Information'} </button>                        
            </div>
        )
    }


}

export default Profile