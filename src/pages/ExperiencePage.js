import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import '../css/ExperiencePage.css'

export default class ExperiencePage extends Component {
    render() {
        return (
            <div>

                <br />
                <br />

                <div>
                    <h3> Work History </h3>

                    <div className="work_history_point">

                        <Row>
                            <Col sm="6" className="title">
                                Algorithms and Systems Analysis Tutor
                            </Col>
                            <Col sm="6" className="timeframe">
                                Sep. 2017 - Present
                            </Col>
                        </Row>

                        <div className="subtitle">
                            CSE Department, UCSD
                        </div>

                        <ul>
                            <li> Help students understand material such as Graph Theory, Combinatorics/Probability, Algorithms, etc. </li>
                        </ul>

                    </div>

                    <div className="work_history_point">

                        <Row>
                            <Col sm="6" className="title">
                                Student Software Developer
                            </Col>
                            <Col sm="6" className="timeframe">
                                Mar. 2017 – Present
                            </Col>
                        </Row>

                        <div className="subtitle">
                            Calit2
                        </div>

                        <ul>
                            <li> Develop backend services for businesses; usual tools include PHP7 with Laravel and AWS</li>
                            <li> Services built using knowledge of REST architecture, HTTP/HTTPS protocols, Database Design, and Oauth2 </li>
                            <li> Utilize concepts like master-slave and 3NF to improve database performance and consistency for businesses </li>
                        </ul>

                    </div>

                    <div className="work_history_point">

                        <Row>
                            <Col sm="6" className="title">
                                Co-Owner and Chief Technology Officer
                            </Col>
                            <Col sm="6" className="timeframe">
                                Jan. 2017 – Present
                            </Col>
                        </Row>

                        <div className="subtitle">
                            605 Industries
                        </div>

                        <ul>
                            <li>Manage bi-weekly meetings to design/improve/present software architecture</li>
                            <li>Coordinate development workflow; programmed core backend infrastructure with PHP7 & Laravel</li>
                        </ul>

                    </div>
                    <div className="work_history_point">

                        <Row>
                            <Col sm="6" className="title">
                                Software Engineering Intern
                            </Col>
                            <Col sm="6" className="timeframe">
                                Jun. 2017 – Sep. 2017
                            </Col>
                        </Row>

                        <div className="subtitle">
                            Yahoo!
                        </div>

                        <ul>
                            <li> Used Pyspark on YARN to concurrently process over 100 million rows of media metadata from a Hive table </li>
                            <ul>
                                <li> Clustered metadata by temporal spatial attributes to auto generate photo albums for users </li>
                                <li> Whole process runs to completion in under 30 minutes </li>
                            </ul>
                            <li>Presented to team about Spark cluster resource and partition optimization to speed up Spark jobs by 1000x</li>
                            <li>Created a REST microservice using Spring Boot to serve generated albums to client-side</li>

                        </ul>

                    </div>
                    <div className="work_history_point">

                        <Row>
                            <Col sm="6" className="title">
                                Volunteer Regression Tester
                            </Col>
                            <Col sm="6" className="timeframe">
                                Mar. 2017 - Jun. 2017
                            </Col>
                        </Row>

                        <div className="subtitle">
                            American Red Cross
                            </div>

                        <ul>
                            <li> Performed regression tests on a sandbox site before changes were deployed to production </li>
                        </ul>

                    </div>

                </div>

                <br />
                <br />

                <div>

                    <h3> Projects (These are just a few) </h3>
                    <br/><br/>

                    <Row>
                        <Col sm="6">
                            <Card>
                                <CardImg top width="100%" src={require('../icons/icon-alizon.png')} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Alizon</CardTitle>
                                    <CardSubtitle><i>Chrome Extension</i></CardSubtitle>
                                    <CardText>Notifies you if an Amazon product found on AliExpress is cheaper</CardText>
                                    <Button a href="https://github.com/winsonluk/Alizon" target="_blank">Open Repo</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardImg top width="100%" src={require('../icons/icon-crypto.png')} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>Cryptfolio</CardTitle>
                                    <CardSubtitle><i>Commandline Tool</i></CardSubtitle>
                                    <CardText>Enables you to keep track of your cryptocurrency portfolio</CardText>
                                    <Button a href="https://github.com/jeff4elee/crypto_portfolio" target="_blank">Open Repo</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>

                    <br />

                    <Row>
                        <Col sm="6">
                            <Card>
                                <CardImg top width="100%" src={require('../icons/icon-twitch.png')} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>R.O.B.O.T.</CardTitle>
                                    <CardSubtitle><i>Twitch IRC Bot</i></CardSubtitle>
                                    <CardText>Creative content producing chatbot that delivers Reddit content to Twitch</CardText>
                                    <Button a href="https://github.com/jeff4elee/ROBOT" target="_blank">Open Repo</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardImg top width="100%" src={require('../icons/icon-phrasefight.png')} alt="Card image cap" />
                                <CardBlock>
                                    <CardTitle>PhraseFight</CardTitle>
                                    <CardSubtitle><i>Web App</i></CardSubtitle>
                                    <CardText>A web-app game, that allows two players to duke it out in a type race</CardText>
                                    <Button a href="https://github.com/Derrick56007/PhraseFight2/tree/master/web" target="_blank">Open Repo</Button>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    };
}