import React from 'react';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component {
    state = {
        showEdit: false
    }

    toggleShowEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
    }

    render(){
        return(
            <div>
                {this.state.showEdit ?
                    <ProfileEdit/> :
                    <div>
                        <h1>{this.props.currentUser.first} {this.props.currentUser.last}</h1>
                        <div>Email: {this.props.currentUser.email}</div>
                        <div>Location: {this.props.currentUser.location}</div>
                        <div>Age: {this.props.currentUser.age}</div>
                        <div>Gender: {this.props.currentUser.gender}</div>
                        <div>Bio: {this.props.currentUser.bio}</div>
                    </div>}
                    <br/>
                <button 
                    onClick={this.toggleShowEdit}
                > {this.state.showEdit ? 'Return to Profile' : 'Edit Information'} </button>                        
            </div>
        )
    }


}

export default Profile