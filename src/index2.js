import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')
const MOUNT4 = document.querySelector('#section4')
const MOUNT5 = document.querySelector('#section5')
const MOUNT6 = document.querySelector('#section6')
const MOUNT7 = document.querySelector('#section7')
 

var Options = React.createClass({
  render: function() {
      var labelStyle = {
          color: this.state.value,
          padding: '0 10px'
      };

      return <div>
          <ButtonGroup value={this.state.value}
                  buttons={[
                      {value: 'red', content: 'red'},
                      {value: 'green', content: 'green'},
                      {value: 'blue', content: 'blue'}
                  ]}
                  onChange={this.handleChange} />
          <span style={labelStyle}>Your useful text</span>
      </div>;
  },

  getInitialState: function() {
      return { value: 'red' };
  },

  handleChange: function(value) {
      this.setState({ value });
  }
});

 
ReactDOM.render(<App />, MOUNT1);
ReactDOM.render(<Options />, MOUNT2);
// ReactDOM.render(asdf(), MOUNT3);
// ReactDOM.render(<asdf />, MOUNT4);
// ReactDOM.render(asdf, MOUNT5);
// ReactDOM.render(asdf, MOUNT6);
// ReactDOM.render(asdf(asdf), MOUNT7);