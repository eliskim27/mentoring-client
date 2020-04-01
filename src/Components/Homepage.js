import React from 'react';

let pictures = [
    'https://www.theladders.com/wp-content/uploads/success-190926-1000x563.jpg',
    'https://www.cuinsight.com/wp-content/uploads/2017/06/bigstock-Teamwork-Couple-Climbing-Helpi-91037114.jpeg'
]

class Homepage extends React.Component {

    render(){
        return(
            <div 
                className="ui center aligned container"
                style={{
                    padding:"10px"
                }}>
                <h1 
                    className="ui header"
                    style={{
                        padding:"10px"
                      }}
                > Mentoring</h1>
                <div>
                    <img 
                        className="ui fluid image" 
                        src={pictures[1]}
                        style={{
                            padding:"10px"
                          }}
                        ></img>
                </div>
                <div 
                    style={{
                        padding:"10px"
                    }}>
                    <h1 
                        className="ui header"
                        style={{
                            padding:"10px"
                          }}   
                    > Mission</h1>
                    <p>We recruit working professionals to volunteer and become positive role models who inspire youth to expand their horizons and envision what is possible for their lives. Through mentoring and educational programs that serve students from 1st to 12th grade, volunteers guide and support youth to become confident, be ready for college and give back to the community.</p>
                </div>
                <div 
                    style={{
                        padding:"10px"
                    }}>
                    <h1 
                        className="ui header"
                        style={{
                            padding:"10px"
                          }}   
                    > Who We Are</h1>
                    <p>This is who we are. Could potentially show cards of members or testimonials</p>
                </div>
            </div>
        )
    }


}

export default Homepage