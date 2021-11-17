import './App.css';
import LogoutButton from './components/LogoutButton';
import LoguinButon from "./components/LoguinButton";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <h1>Aplication</h1>
      <LoguinButon />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
