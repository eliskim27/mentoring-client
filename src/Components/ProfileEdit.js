import React from 'react';

class ProfileEdit extends React.Component {
    state = {
        id: this.props.currentUser.id,
        first: this.props.currentUser.attributes.first,
        last: this.props.currentUser.attributes.last,
        email: this.props.currentUser.attributes.email,
        location: this.props.currentUser.attributes.location,
        age: this.props.currentUser.attributes.age,
        gender: this.props.currentUser.attributes.gender,
        bio: this.props.currentUser.attributes.bio
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/${this.props.currentUser.type}s/${this.state.id}`,{
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                location: this.state.location,
                age: this.state.age,
                gender: this.state.gender,
                bio: this.state.bio,
            })
        })
        .then(resp => resp.json())
        .then(updatedObj => {
            this.props.editProfile(updatedObj.data)
            this.props.toggleShowEdit()
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> First: <input value={this.state.first} onChange={this.handleChange} name="first"></input></label>
                    <label> Last: <input value={this.state.last} onChange={this.handleChange} name="last"></input></label><br/>
                    <label> Email: <input value={this.state.email} onChange={this.handleChange} name="email"></input></label><br/>
                    <label> Location (State): <input value={this.state.location} onChange={this.handleChange} name="location"></input></label><br/>
                    <label> Age: <input value={this.state.age} onChange={this.handleChange} name="age"></input></label><br/>
                    <div> Gender: 
                        <label><input type="radio" name="gender" onChange={this.handleChange}value="Male"
                                checked={this.state.gender === "Male" ? true : false}/> Male </label>
                        <label><input type="radio" name="gender" onChange={this.handleChange}value="Female"
                                checked={this.state.gender === "Female" ? true : false}/> Female </label>
                    </div>

                    <label> Bio: <textarea value={this.state.bio} onChange={this.handleChange} 
                    name="bio" rows="7" cols="50"></textarea></label><br/>
                    <input type="submit" value="Submit"></input><br/>
                </form>
            </div>
        )
    }


}

export default ProfileEdit