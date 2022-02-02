import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ShoppingNow from "./components/ShoppingNow/ShoppingNow";
import Cart from './components/Cart/Cart';
import { store } from './components/Store/Store';
import { Provider } from 'react-redux'
import Signup from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Logout from './components/LogOut/LogOut';
import LogIn from './components/LogIn/LogIn';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
     <Provider store={store}>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="ShoppingNow" element={<ShoppingNow />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="CreateProduct" element={<CreateProduct />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="Login" element={<SignIn />} />


        </Routes>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

;
