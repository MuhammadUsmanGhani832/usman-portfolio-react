import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css';
import {Home,Projects} from './screen';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Home />
              </div>
            }
          />
          <Route
            path="projects"
            element={
              <div className="container">
                <Projects />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
