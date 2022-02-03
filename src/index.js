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
            <Route path="CreateProduct/ShoppingNow" element={<ShoppingNow />} />

            <Route path="Cart" element={<Cart />} />
            <Route path="ShoppingNow/CreateProduct/Cart" element={<Cart />} />

            <Route path="ShoppingNow/Cart" element={<Cart />} />

            <Route path="CreateProduct/Cart" element={<Cart />} />

    

            <Route path="ShoppingNow/CreateProduct/Cart/Signup" element={<Signup />} />
            <Route path="ShoppingNow/Cart/Signup" element={<Signup />} />
            <Route path="Signup" element={<Signup />} />

            <Route path="SignIn" element={<SignIn />} />
            <Route path="ShoppingNow/Cart/SignIn" element={<SignIn />} />

            <Route path="/SignIn/Signup" element={<Signup />} />
         
            <Route path="/ShoppingNow/Signup" element={<Signup />} />
            <Route path="CreateProduct" element={<CreateProduct />} />
            <Route path="ShoppingNow/CreateProduct" element={<CreateProduct />} />
            <Route path="Cart/CreateProduct" element={<CreateProduct />} />

            <Route path="ShoppingNow/Cart/SignIn/Signup" element={<SignIn />} />
            <Route path="Signup/SignIn" element={<SignIn />} />



    
            <Route path="ShoppingNow/Cart/Signup/SignIn" element={<SignIn />} />
            <Route path="ShoppingNow/Cart/Signup/SignIn/Signup" element={<SignIn />} />


            <Route path="Logout" element={<Logout />} />
            <Route path="Login" element={<SignIn />} />


        </Routes>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

;
