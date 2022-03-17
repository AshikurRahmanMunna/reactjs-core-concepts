import logo from './logo.svg';
import './App.css';

const singer = {name:'Mr. Mahfuz', job: 'Singer'}
const singer2 = {name:'Eva Rahman', job: 'Singer2'}

const singerStyle = {
  color: 'green',
  backgroundColor: 'white',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component. YAY</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  )
}

function Person() {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricketer</p>
    </div>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h3>Ajay Devgun</h3>
      <p>Job: Maramari</p>
    </div>
  )
}


export default App;
