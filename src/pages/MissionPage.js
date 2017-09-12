import React, { Component } from 'react';

class MissionPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <hr/>
                    <div>
                        <h3> Let's talk features </h3>
                        <div>
                            <ol>
                                <li> <b>Resource Hub</b> - A compilation of resources/tutorials that are created/shared by the community.
                            Resources are ranked by users, with the best resources bubbled to the front page.
                                </li>     
                                <br/>                           
                                <li> <b>Mentorship Network</b> - Any user can learn, and any user can teach. Everyone has a set of skills that
                                    someone else may not have. This feature will allow students to post commissions of things they want to learn, and
                                    mentors to post commissions of things they can teach. It will connect students and mentors in a seamless fashion, while
                                    enabling flexibility of schedule, payment, and users of all skill levels.
                                </li>
                                <br/>
                                <li> <b>Reputation System</b> - To avoid potential abuse and scams from users, we are implementing a
                                reputation system. This system will allow students to endorse or report teachers after lessons, effectively 
                                alerting others about the quality of said mentors.
                                </li>
                            </ol>
                        </div>
                        <div>
                            <i>(Head towards the technical section to find out the logistical implementations of these features!)</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default MissionPage;