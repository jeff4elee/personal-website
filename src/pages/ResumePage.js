import React, { Component } from 'react';
import myPDF from './UCSD_Jeffrey_Lee_Resume.pdf'
import PDF from 'react-pdf-js';

export default class ResumePage extends Component {
    state = {};
    
    onDocumentComplete = (pages) => {
      this.setState({ page: 1, pages });
    }
   
    onPageComplete = (page) => {
      this.setState({ page });
    }
   
    render() {
      return (
        <div>
          <PDF file={myPDF} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
        </div>
      )
    }
}