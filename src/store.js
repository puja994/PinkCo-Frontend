
import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from "./pages/category/categorySlice"
import productReducer from './pages/products/productSlice'
import cartReducer from './pages/cart/CartSlice'
import loginReducer from "./pages/login/loginSlice";
import profileReducer from './pages/profile/profileSlice'
import signupReducer from './pages/signup/signupSlice'
import checkoutReducer from './pages/checkout/checkoutSlice'



const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        login: loginReducer,
		profile: profileReducer,
        signup: signupReducer,
        checkout: checkoutReducer,
        
    }
}) 
export default store