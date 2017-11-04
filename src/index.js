import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')
const MOUNT4 = document.querySelector('#section4')
const MOUNT5 = document.querySelector('#section5')

const fruits = ["mango", "apple", "grape", "bananna", "plum", "durian"]

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

const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button),
  React.createElement(Button),
]);

function myFruits(){
  let fruitList = []
  for(let i=0;i<fruits.length;i++){
    fruitList.push(React.createElement('li', {}, fruits[i]))
  }
  return fruitList
}

class MyFruitList extends React.Component {
  render() {
    return React.createElement('div', {},
      [React.createElement('h4', {}, "My Fruits"),
      React.createElement('ul', {}, myFruits())
    ])
  }
}

const MyStuff = React.createElement('div', {}, Button, ShoppingList)

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<Button />, MOUNT1);
ReactDOM.render(<ShoppingList />, MOUNT2);
ReactDOM.render(myFruits(), MOUNT3);
ReactDOM.render(<MyFruitList />, MOUNT4);
ReactDOM.render(nestedButtons, MOUNT5);
