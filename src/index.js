import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// how to use the variable objects from another file, in this file ??
import users from './Arrays';
import pets from './Arrays';



const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')
const MOUNT4 = document.querySelector('#section4')
const MOUNT5 = document.querySelector('#section5')
const MOUNT6 = document.querySelector('#section6')
const MOUNT7 = document.querySelector('#section7')

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

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function greeting2(props) {
  return <h1>Hello, {props.name}</h1>;
}

const HeyBrad = greeting2({name: "Brad"})


const users1 = ['nick', 'nate', 'kate', 'shin', 'boyo']

function heyPeople(obj){
  let userGreetings = []
  for(const user of obj){
    userGreetings.push(user.firstName)
  }
  return userGreetings 
}

function heyArray(arr){
  let arrElements = []
  for(let element in arr){
    arrElements.push('firstName: ' + element)
  }
  return arrElements 
}



ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<Button />, MOUNT1);
ReactDOM.render(<ShoppingList />, MOUNT2);
ReactDOM.render(myFruits(), MOUNT3);
ReactDOM.render(<MyFruitList />, MOUNT4);
ReactDOM.render(nestedButtons, MOUNT5);
ReactDOM.render(HeyBrad, MOUNT6);
ReactDOM.render(heyArray(users1), MOUNT7);
