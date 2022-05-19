
import './App.css';
import Bullet from './components/Dem';

function App() {
  let info = [
    {category:"Samsung"},
    {category:"Android"},
    {category:"Apple"},
    {category:"Mac"},
    {category:"Windows"},
  ]
  return (
    <div className='App'>
      <h1>Mobile Manufactururs</h1>
      {info.map((el)=>(
        <Bullet {...el}></Bullet>
     ) )}
    </div>
  );
}

export default App;

