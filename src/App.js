import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

//how to import named component
import { FirstComponent as FC, SecondComponent } from './components/MyComponent';

//importing default export component
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';

function App() {


  const student = {
    fname: "Revin",
    lname: "Gohil",
    email: "revingohil@gmail.com"
  }

  const skills = ['HTML','CSS','JS'];

  return (
    <div className="App">
      {/* <Welcome name="Ramesh"/>
      <Welcome name ="Revin"/> */}

      {/* <Greeting name="Ramesh"/>
      <Greeting name="Umesh"/>
      <FC/>
      <SecondComponent/>
      <MC/> */}


      {/* <HelloWorld/> */}

      {/* <Student
        fname="Revin"
        lastname="Gohil"
        email="revingohil@gmail.com"
      />
      <Student
        fname="Umesh"
        lastname="Fairy"
        email="umeshfairy@gmail.com"
      /> */}

      {/* <Student 
      student = {student}
      /> */}
{/* 
      <Student
      data= {skills}
      /> */}

      {/* <Employee/> */}

      <User/>
    </div>
  );
}

export default App;
