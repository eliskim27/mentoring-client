import React from 'react';

const initialState = {
    first: "",
    last: "",
    email: "",
    location: "",
    age: "",
    gender: "",
    bio: "",
    usertype: null
}

class Signup extends React.Component {
    state = initialState

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/${this.state.usertype}`, {
            method: "POST",
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
                usertype: this.state.usertype,
            })
        })
        .then(response => response.json())
        .then(newUserObj => {
            this.props.signupSubmit(newUserObj.data)
        })
        this.setState(initialState)
        this.props.history.push("/user/profile");
    }

    render(){
        return(
            <div> SIGN UP!
                <form onSubmit={this.handleSubmit}>
                    <div> User Type: 
                        <label><input type="radio" name="usertype" onChange={this.handleChange}value="mentors"
                                checked={this.state.usertype === "mentors" ? true : false}/> Mentor </label>
                        <label><input type="radio" name="usertype" onChange={this.handleChange}value="mentees"
                                checked={this.state.usertype === "mentees" ? true : false}/> Mentee </label>
                    </div>
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

export default Signup