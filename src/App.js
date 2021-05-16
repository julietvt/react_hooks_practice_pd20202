import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Stopwatch from './components/Stopwatch';
import Counter_with_reducer from './components/Counter_with_reducer';

function App() {
  //return <Counter step={100} />;
  //return <Stopwatch />;
  return <Counter_with_reducer />;
}
export default App;
