import Pricing from "./pages/pricing/Pricing";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element={<Pricing/>}/>
        <Route path = "/users" element={<UserList/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
