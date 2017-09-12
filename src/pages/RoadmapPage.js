import React, { Component } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import '../css/Timeline.css'

class Roadmap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            dates: ['2018-01-01', '2018-04-01'],
            values: [
                { title: 'Title', description: 'Hello hello' },
                { title: 'Title', description: 'Hello!!' },
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="timeline">

                    <HorizontalTimeline

                        indexClick={(index) => {
                            this.setState({ i: index });
                        }}
                        values={this.state.dates}
                        index={this.state.i} />

                </div>

                <div className='text-center'>
                    <div>
                        <h2>
                            {this.state.values[this.state.i].title}
                        </h2>
                    </div>
                    {this.state.values[this.state.i].description}
                </div>
            </div>
        );
    }
}

export default Roadmap;