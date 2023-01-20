import { BrowserRouter, Route } from 'react-router-dom';
import './assets/global.css';
import Main from './pages/Main';
import TempTestPage from './pages/TempTestPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path="/">
          <Main />
        </Route>

        {/* get rid of me after testing links */}
        <Route exact path="/Temp">
          <TempTestPage />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
