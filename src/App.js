import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import Orders from './Components/Orders/Orders';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import Login from './Components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import Shipment from './Components/Shipment/Shipment';
import Order from './Components/Order/Order';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/addProduct">
              <Orders></Orders>
            </Route>
            <Route path="/manageProducts">
              <ManageProducts/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/checkout/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/shipment/:id">
              <Shipment></Shipment>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
