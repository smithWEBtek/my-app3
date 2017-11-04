import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')

class Button extends React.Component {
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
};

class ShoppingList extends React.Component {
  render() {
    return React.createElement('div', {},[ 
    React.createElement('h4', {}, "My List"),
      React.createElement('ul', {}, 
      [React.createElement('li', {}, 'Bananas'),
        React.createElement('li', {}, 'Vanilla ice cream'),
        React.createElement('li', {}, 'Chocolate')
      ])
    ])
  }
}

const MyStuff = React.createElement('div', {}, Button, ShoppingList)


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Button />, MOUNT1);
ReactDOM.render(<ShoppingList />, MOUNT2);
