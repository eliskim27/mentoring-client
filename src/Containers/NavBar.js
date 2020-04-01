import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    userControls = (userType) => {
        if (userType === 'mentor') {
            return (
                <div 
                    className=" ui right menu"
                    style={{
                        backgroundColor: '#66A9C1'
                        }}>
                    <div>
                        <button className="ui button">Hello, {this.props.currentUser.attributes.first}</button>
                    </div>
                    <span><Link to="/"><button className="ui button" onClick={this.props.logout}>Logout</button></Link></span>
                </div>
            )
        } if (userType === 'mentee') {
            return (
                <div 
                    className=" ui right menu"
                    style={{
                        backgroundColor: '#66A9C1'
                        }}>
                    <div>
                        <button className="ui button">Hello, {this.props.currentUser.attributes.first}</button>
                    </div>
                    <span><Link to="/"><button className="ui button" onClick={this.props.logout}>Logout</button></Link></span>
                </div>
            )
        } else {
            return (
                <span 
                    className=" ui right menu"
                    style={{
                        backgroundColor: '#66A9C1'
                        }}>
                    <Link to="/login"><button className="ui button">Login</button></Link>
                    <Link to="/signup"><button className="ui button">Sign Up</button></Link>
                </span>
    )}}

    
    userMenuShow = (userType) => {
        if (userType === 'mentee') {
            return (
                <span 
                    className="ui center pointing menu"
                    style={{
                        backgroundColor: '#66A9C1'
                        }}
                >
                    <button className="ui inverted disabled button"> Mentee Menu</button>
                    <Link to='/user/profile'><button className="ui button">Profile</button></Link>
                    <Link to='/user/connections'><button className="ui button">Connections</button></Link>
                    <Link to='/user/search'><button className="ui button">Search</button></Link>
                </span>
            )
        } if (userType === 'mentor') {
            return (
                <span 
                    className="ui center pointing menu"
                    style={{
                        backgroundColor: '#66A9C1'
                        }}
                >
                    <button className="ui inverted disabled button"> Mentor Menu</button>
                    <Link to='/user/profile'><button className="ui button">Profile</button></Link>
                    <Link to='/user/connections'><button className="ui button">Connections</button></Link>
                </span>
            )
        }
    }



    render() {
        return (
            <div style={{margin:"10px"}} >
                <div 
                    className="ui pointing menu"
                    style={{
                        backgroundColor: '#66A9C1'
                        }}
                    >
                    <span>
                        <Link to="/"><button className="ui button">Home</button></Link>
                    </span>
                    {this.userMenuShow(this.props.currentUser.type)}
                    {this.userControls(this.props.currentUser.type)}
                </div>
            </div>
        )
    }
}

export default NavBar