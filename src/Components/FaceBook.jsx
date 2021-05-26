import React from 'react';
import profiles from '.././data/berlin.json';

class FaceBook extends React.Component {
  state = {
    profiles: profiles,
  };

  handleIsStudent = (profile) => {
    if (profile.isStudent === true) {
      return "Student"
    } else {
      return "Teacher"
    }
  }

  render() {
    return (
      <div>    
        <div>
          {this.state.profiles.map((profile, index) => {
            return (
              <div className="fbContainer"> 
                <div>
                  <img className="fbPhoto" src={profile.img} />
                </div>

                <div className="fbInfo">
                  <p><b>First Name:</b> {profile.firstName}</p>
                  <p><b>Last Name:</b> {profile.lastName}</p>
                  <p><b>Country:</b> {profile.country}</p>
                  <p><b>Type:</b> {this.handleIsStudent(profile)}</p>
                </div>

              </div>

            );
          })}

        </div>
      </div>  
    );
  }
}

export default FaceBook
