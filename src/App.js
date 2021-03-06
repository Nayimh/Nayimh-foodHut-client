import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import AdminRoute from "./Pages/Dashboard/AdminRoute/AdminRoute";
import AllProductManage from "./Pages/Dashboard/AllProductManage/AllProductManage";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllProducts from "./Pages/Dashboard/ManageAllProducts/ManageAllProducts";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Explore from "./Pages/Explore/Explore";

import OrderHome from "./Pages/Explore/Order/OrderHome";
import Login from "./Pages/Home/Authentication/Login/Login";
import Private from "./Pages/Home/Authentication/PrivateRoute/Private";
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
            <Route path="/order/:id" element={<Private><OrderHome /></Private>} />
            {/* <Route path="/dashboard" element={<DashboardHome/> }/> */}
            <Route path="/dashboards" element={<Private><Dashboard /></Private>}>
              
             
            <Route path="makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute> }/>
            <Route path="manageAllProduct" element={<AdminRoute><AllProductManage/></AdminRoute> }/>
            <Route path="manageAllOrders" element={<AdminRoute><ManageAllProducts/></AdminRoute> }/>
            <Route path="addNewProduct" element={<AdminRoute><AddProducts/></AdminRoute> }/>
              <Route path="myOrder" element={<MyOrder />} />
             </Route>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
