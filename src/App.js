import logo from './logo.svg';
import './App.css';
import FragmentOne from './Component/FragmentOne';
import { FragmentTwo } from './Component/FragmentTwo';

function App() {
  return (
    <div>
      <h2>Ordered list</h2>
     <FragmentOne />
     <h2>UnOrdered list</h2>
     <FragmentTwo />
    </div>
  );
}

export default App;
