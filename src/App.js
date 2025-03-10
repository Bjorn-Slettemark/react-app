import logo from './logo.svg';
import './App.css';
import Message from './Message.js'

function App(props) {
  return (
    <div className="App">
      <p2>{props.title}</p2>
      <Message name="Bjorn" birthYear="1985"/>
      <Message name="Martin" birthYear="1996"/>
      <Message name="Johan" birthYear="1999"/>


    </div>
  )
}
export default App;
