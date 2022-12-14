import { BrowserRouter } from 'react-router-dom';
import './assets/global.css';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Main />

      </BrowserRouter>
    </div>
  );
}

export default App;
