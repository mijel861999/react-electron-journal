import './App.css';

// Components
import { TopBar } from './components/topBar/TopBar'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Login />
    </div>
  );
}

export default App;
