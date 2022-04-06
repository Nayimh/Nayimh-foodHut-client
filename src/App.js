import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Explore from "./Pages/Explore/Explore";

import OrderHome from "./Pages/Explore/Order/OrderHome";
import Login from "./Pages/Home/Authentication/Login/Login";
import Register from "./Pages/Home/Authentication/Register/Register";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/home" element={ <Home/> }/>
            <Route path="/explore" element={<Explore />} />
            <Route path="/order/:id" element={<OrderHome />} />
            <Route path="/dashboard" element={<DashboardHome/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
