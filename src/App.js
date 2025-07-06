import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

//how to import named component
import { FirstComponent as FC, SecondComponent } from './components/MyComponent';

//importing default export component
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Ramesh"/>
      <Welcome name ="Revin"/> */}

      {/* <Greeting name="Ramesh"/>
      <Greeting name="Umesh"/>
      <FC/>
      <SecondComponent/>
      <MC/> */}
      <HelloWorld/>
    </div>
  );
}

export default App;
