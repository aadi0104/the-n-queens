import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavComponent from "./Components/NavComponent";
import Rules from "./Pages/Rules";
import Help from "./Pages/Help";
import GameComponent from "./Components/GameComponent";
import CustomGameComponent from "./Components/CustomGameComponent";
import SolveByComputer from "./Components/SolveByComputer";

function App() {
  return (
    <div className="main-class">
      <NavComponent />
      <Routes>
        <Route path="/the-n-queens/" Component={Home} />
        <Route path="/the-n-queens/rules" Component={Rules} />
        <Route path="/the-n-queens/help" Component={Help} />
        <Route path="/the-n-queens/game" Component={GameComponent} />
        <Route path="/the-n-queens/customgame" Component={CustomGameComponent} />
        <Route path="/the-n-queens/solvebycomputer" Component={SolveByComputer} />
      </Routes>
    </div>
  );
}

export default App;
