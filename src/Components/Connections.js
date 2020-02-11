import React from 'react';
import Pending from './Pending';
import Connected from './Connected';

class Connections extends React.Component {

    render(){
        
        return(
            <div>
                <Pending
                    connections={this.props.connections.filter(connection => connection.attributes.status === "pending")}
                    currentUser={this.props.currentUser}
                    deleteConnection={this.props.deleteConnection}
                    parentContainer={this.props.parentContainer === "mentee" ? "mentee connections" : "mentor connections"}
                    approveConnection={this.props.approveConnection}
                />
                <Connected
                    connections={this.props.connections.filter(connection => connection.attributes.status === "approved")}
                    currentUser={this.props.currentUser}
                    deleteConnection={this.props.deleteConnection}
                    parentContainer={this.props.parentContainer === "mentee" ? "mentee connections" : "mentor connections"}
                />
            </div>
        )
    }
}

export default Connections