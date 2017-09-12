import React, { Component } from 'react';

class TechnicalPage extends Component {
    render() {
        return (
            <div>

                <hr />

                <div>
                    <h4> The X Platform </h4>
                    <p>
                        We plan to utilize X blockchain, and here's why
                    </p>
                </div>
                
                <br/>

                <div>
                    <h4> Smart Contract Utility </h4>
                    <p>
                        This is how we're going to use smart contracts
                    </p>
                </div>

                <br/>

                <div>
                    <h4> Resource Hub </h4>
                    <p>
                        Resources will be posted to specific categories, and those that are upvoted the most will bubble to their
                        respective front page. The value of someone's upvote will be tied directly to their reputation level 
                        on that category. There will be a capped upvote value, modeled by a sigmoid function... go on
                    </p>
                </div>

                <br/>

                <div>
                    <h4> Mentorship Network </h4>
                    <p>
                        Students and mentors alike will be able to post commissions. These commissions can be manually picked up
                        by those with the necessary qualifications. Alternatively, there will be a matchmaking
                        system implemented that will effectively pair users who fit each others' needs.
                    </p>
                </div>

                <br/>

                <div>
                    <h4> Reputation System </h4>
                    <p>
                        A modified page-rank algorithm will be utilized to weigh endorsements, 
                        so that spamming of endorsements will be effectively useless.
                    </p>
                </div>

            </div>
        )
    };
}

export default TechnicalPage;