import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import DisplayLinks from "../components/displayLinks/displayLinks";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<DisplayLinks />} />
    </Routes>
  );

  return (
    <Router>
      <div>
        <main className="bg-bg-main dark:bg-bg-main-dark text-text dark:text-text-dark min-h-screen flex items-center justify-center box-border">
          {routes}
        </main>
      </div>
    </Router>
  );
}

export default App;
