import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Ramesh"/>
      <Welcome name ="Revin"/> */}

      <Greeting name="Ramesh"/>
      <Greeting name="Umesh"/>
    </div>
  );
}

export default App;
