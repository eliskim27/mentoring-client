import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    userControls = (userType) => {
        if (userType === 'mentor') {
            return (
                <span><Link to="/"><button onClick={this.props.logout}>Logout</button></Link></span>)
        } if (userType === 'mentee') {
            return (
                <span><Link to="/"><button onClick={this.props.logout}>Logout</button></Link></span>)
        } else {
            return (
                <span>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </span>
    )}}

    
    userMenuShow = (userType) => {
        if (userType === 'mentee') {
            return (
                <span> Mentee Menu
                    <Link to='/user/profile'><button>Profile</button></Link>
                    <Link to='/user/connections'><button>Connections</button></Link>
                    <Link to='/user/search'><button>Search</button></Link>
                </span>
            )
        } if (userType === 'mentor') {
            return (
                <span> Mentor Menu
                    <Link to='/user/profile'><button>Profile</button></Link>
                    <Link to='/user/connections'><button>Connections</button></Link>
                </span>
            )
        }
    }



    render() {
        return (
            <div>
                <span>
                    <Link to="/"><button>Home</button></Link>
                </span>
                {this.userMenuShow(this.props.currentUser.type)}
                {this.userControls(this.props.currentUser.type)}
            </div>
        )
    }
}

export default NavBar