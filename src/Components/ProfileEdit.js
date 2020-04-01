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
        bio: this.props.currentUser.attributes.bio,
        picture: this.props.currentUser.attributes.picture
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
                picture: this.state.picture
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
            <div className="ui grid">
                <div className="ui form eight wide column centered">
                    <div className="ui center aligned container"> 
                    <h1 className="header">
                    SIGN UP!
                    </h1>
                        <form 
                            onSubmit={this.handleSubmit}
                            className="ui form"
                        >
                            <div className="two fields">
                                <div className="field">
                                    <label> First Name: </label>
                                    <input value={this.state.first} onChange={this.handleChange} name="first"></input>
                                </div>
                                <div className="field">
                                    <label> Last Name: </label>
                                    <input value={this.state.last} onChange={this.handleChange} name="last"></input><br/>
                                </div>
                            </div>
                            <div className="field">
                                <label> Email: </label>
                                <input value={this.state.email} onChange={this.handleChange} name="email"></input><br/>
                            </div>
                            <div className="field">
                                <label> Picture URL: </label>
                                <input value={this.state.picture} onChange={this.handleChange} name="picture"></input><br/>
                            </div>
                            <div className="field">
                                <label> Location (State): </label>
                                <input value={this.state.location} onChange={this.handleChange} name="location"></input><br/>
                            </div>
                            <div className="field">
                                <label> Age: </label>
                                <input value={this.state.age} onChange={this.handleChange} name="age"></input><br/>
                            </div>
                            <div className="ui left aligned container">
                                <div className="inline fields"> Gender: 
                                    <div style={{padding:"10px"}}>
                                        <div>
                                            <label><input type="radio" name="gender" onChange={this.handleChange}value="Male"
                                                    checked={this.state.gender === "Male" ? true : false}/> Male </label>
                                        </div>
                                        <div>
                                            <label><input type="radio" name="gender" onChange={this.handleChange}value="Female"
                                                    checked={this.state.gender === "Female" ? true : false}/> Female </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label> Bio: <textarea value={this.state.bio} onChange={this.handleChange} 
                                name="bio" rows="3" cols="50"></textarea></label><br/>
                            </div>
                            <input className="ui submit button" type="submit" value="Submit"></input><br/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default ProfileEdit