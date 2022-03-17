import logo from './logo.svg';
import './App.css';

const singers = [
  {name:'Mr. Mahfuz', job: 'Singer'},
  {name:'Eva Rahman', job: 'Singer'},
  {name:'Agun', job: 'sopno'},
  {name:'Shuvro', job: 'pathor'}
]

const singerStyle = {
  color: 'green',
  backgroundColor: 'white',
  borderRadius: '10px'
}

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jashim', 'Salman Shah']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }
      {/* <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2]}></Person> */}
      <h5>New Component. YAY</h5>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  )
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Job: {props.job}</p>
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
