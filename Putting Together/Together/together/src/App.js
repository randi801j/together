
import './App.css';
import Name from './components/Name';


function App() {
  return (
    <div className="App">
      <Name fn={'Doe,Jane'} age={45} hc={'Black'}/>
      <Name fn={'Smith, John'} age={88} hc={'Brown'}/>
      <Name fn={'Fillmore, Millard'} age={50} hc={'Brown'}/>
      <Name fn={'Snith,Maria'} age={62} hc={'Brown'}/>
      
    </div>
  );
}

export default App;
