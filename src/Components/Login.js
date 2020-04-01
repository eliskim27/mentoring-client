import React from 'react';
const initialState = {usertype: ""}

class Login extends React.Component {
    state = initialState

    handleChange = (e) => {
        this.setState({usertype: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {}
        if   (this.state.usertype === "mentee") {
            newUser = this.props.allMentees.find(mentee => mentee.id === "1")
        } else if (this.state.usertype === "mentor") {
            newUser = this.props.allMentors.find(mentor => mentor.id === "1")
        } else {
            newUser = {}
        }
        this.props.loginSubmit(newUser)
        this.setState(initialState)
        this.props.history.push("/user/profile");
    }

    render() {
        return(
            <div className="ui center aligned container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="header">Who would you like to log in as?</h1>
                    <select onChange={this.handleChange}>
                        <option></option>
                        <option value="mentee">MENTEE</option>
                        <option value="mentor">MENTOR</option>
                    </select>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )                   
    }
}

export default Login;
