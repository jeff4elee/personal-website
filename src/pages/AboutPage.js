import React, { Component } from 'react';
import '../css/AboutPage.css'

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    &emsp; Hi, welcome to my page, stranger! Since you're here, you should probably know a little bit about me.
                    My name is Jeffrey Lee, and I'm currently a second year at UCSD pursuing a B.S. in Computer Science.
                    I'm the co-founder of a startup called 605 Industries, and we are currently developing a decentralized
                    education platform. If you're interested in it, just contact me below!

                    <br />
                    <br />

                    &emsp; I'm experienced in backend development, with my preferred tools being
                    PHP/Laravel, Python/Flask, and Java/Spring. I also have experience (albiet a lot less)
                    with frontend development, and use React & Redux to do the job.

                    <br />
                    <br />

                    &emsp; I also have experience with some machine learning and big data analysis. I'm able to implement neural nets,
                    clustering/classification algorithms, and their ilk in real world situations. Most recently, I worked
                    at Yahoo! to cluster and classify over 100 million photos to analyze potential trends. I utilized
                    distributed computing (PySpark with YARN) to perform this statistical analysis within 30 minutes.

                    <br />
                    <br />

                    <div className="aboutList">
                        Fun Facts:
                        <ul>
                            <li> I used to be challenger in League of Legends (S4) </li>
                            <li> My brother overfed my fish when I was 7 years old </li>
                            <li> I love both cats and dogs, but am allergic to cats </li>
                            <li> I'm open-minded and will try almost anything :) </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    };
}

export default AboutPage;