import './App.css';
import Checkbox from './CheckBox';
import Link from './Link'
import Counter from './Counter'
import AddUser from './AddUser';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <Link />
      <Checkbox />
      <h2>Hey</h2>
      <Counter />
      <AddUser />
      <Todo />
    </div>
  );
}

export default App;
