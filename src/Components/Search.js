import React from 'react';
import MentorMenteeCard from './MentorMenteeCard';

class Search extends React.Component {
    render(){
        return(
            <div>
                {/* <div>
                    search options bar
                </div> */}
                <h1 className="header">Find a Mentor: </h1>
                <div className="ui center aligned container">
                    <div className="ui cards">
                        {this.props.allMentors.map((mentor, index) => {
                            return(
                                <MentorMenteeCard
                                    key={index}
                                    mentor={mentor.attributes}
                                    mentorId={mentor.id}
                                    currentUser={this.props.currentUser}
                                    newConnect={this.props.newConnect}
                                    seeAllInfo={false}
                                />
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    }
}

export default Search