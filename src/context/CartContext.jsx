import { useContext, createContext, useState , useReducer} from "react";

const CartContext = createContext()


// Step 1 : Define initial state
const initialState = {
  cart : []
}

// Step 2 : create reducer function


// the action object is how you tell the reducer function what to do .

// const action = {
        // type : 'ACTION_TYPE', required
        // payload : optionalData // optional
// }

const cartReducer = (state , action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productExist = state.cart.find(item => item.id === action.payload.id)
      if(productExist){
        return state
      }
      return {
        // ...state,
        cart : [...state.cart , {...action.payload, quantity: 1}]
      }
    case 'REMOVE_FROM_CART':
       return  {
        // ...state,
        cart : state.cart.filter(item => item.id !== action.payload.id)
       }
    case 'INCREMENT':
      return {
        cart: state.cart.map(item => action.payload.id === item.id ? {...item, quantity: item.quantity + 1} : item)
      }
    case 'DECREMENT':
      const existingProduct = state.cart.find(item => item.id === action.payload.id)
      if(existingProduct.quantity > 1) {
        return {cart : state.cart.map(item => action.payload.id === item.id ? {...item, quantity: item.quantity - 1} : item)
    }
      }
    default:
      return state;
  }
}



export const CartProvider = ({children}) => {
  // const [cart, setCart] = useState([])
  // Step 3 : 
  const [state , dispatch] = useReducer(cartReducer , initialState)
// const addToCart = (product) => {
//   const productExist = cart.find(item => item.id === product.id);
//   console.log(productExist);
  
//   if(!productExist){
//     setCart([...cart, {...product, quantity: 1}])
    
//   } else {
//     // Adding new product to cart
//     setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
//   }
// }


// const increaseQuantity = (productId) => {
//   setCart(cart.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} : item));
// }

// const decreaseDuantity = (productId) => {
//   setCart(cart.map(item => (item.id === productId && item.quantity > 1) ? {...item, quantity: item.quantity - 1} : item));
// }

// const removeFromCart = (productId) => {
//   setCart(cart.filter(item => item.id !== productId ))
// }



  return (
    <CartContext.Provider value={{state , dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);