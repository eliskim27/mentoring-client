import React from 'react';
import MentorMenteeCard from './MentorMenteeCard';

class Search extends React.Component {
    render(){
        return(
            <div>
                <div>
                    search options bar
                </div>
                <div>
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
        )
    }
}

export default Search