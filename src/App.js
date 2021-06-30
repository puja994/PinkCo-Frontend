

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';

import { ProductDisplay } from './pages/productDisplay/ProductDisplay';
import { Cart } from './pages/cart/Cart';
import { ViewProducts } from './pages/viewProduct/ViewProducts.js';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import Login from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import { Checkout } from './pages/checkout/Checkout';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>


          <Route exact path="/home">
            <Home/>
          </Route>
 
          <Route exact path="/cart">
            <Cart/>
          </Route>

           <Route exact path="/products/:slug/">
             <ViewProducts/>
           </Route>  

          <Route exact path="/category/:slug/:_id">
            <ProductDisplay/>
          </Route>

          <Route exact path="/products">
          <Products />
          </Route>


          <Route exact path="/about">
          <About/>
          </Route>

          <Route exact path="/contact">
          <Contact/>
          </Route>

          <Route exact path="/login">
						<Login/>
					</Route>

          <Route exact path="/signup">
           <Signup/>
          </Route>



         

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
