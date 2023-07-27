import { Outlet } from "react-router-dom";
import '../shared/styles/index.scss'

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
