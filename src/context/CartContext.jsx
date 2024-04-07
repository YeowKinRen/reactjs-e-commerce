import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    // State inside the provider
    const initialState = {
        cart: []
    }

    // Actions on the provider
    const cartReducer = (state, action) => {

        switch (action.type) {

            case 'ADD_ITEM':

                // I verify first if the item exists in the cart

                const existingItemIndexAdd = state.cart.findIndex(cartItem => cartItem.item.id === action.payload.item.id)

                if (existingItemIndexAdd !== -1) {
                    // If it exists I update the quantity by adding 1
                    const updatedCart = [...state.cart]; // copy current cart into a new variable
                    updatedCart[existingItemIndexAdd].quantity += 1; // Increment the value
                    return {
                        ...state,
                        updatedCart
                    }

                }
                else {
                    // If it does not exists, I will add new item in the cart (same as yesterday)
                    return {
                        ...state,
                        cart: [...state.cart, action.payload]
                    }
                }



            case 'REMOVE_ITEM':
                // Look for the item id and get the position

                const existingItemIndexDelete = state.cart.findIndex(val => val.item.id === action.payload.item.id)

                const updatedCart = [...state.cart]; //retrieve a copy of the cart
                // If quantity if item is more 1  , decrease the value  of quantity by 1
           

                if (updatedCart[existingItemIndexDelete].quantity > 1) {
                    updatedCart[existingItemIndexDelete].quantity -= 1;

                    return {
                        ...state,
                        cart: updatedCart
                    }
                }
                else {

                // else if is == 1, remove the entire item from the cart
                    // remove the item of given id
                    return {
                        ...state,
                        cart:state.cart.filter(val => val.item.id !== action.payload.item.id)
                    }
                }


                return state

            case 'EMPTY_CART':
                return {
                    ...state,
                    cart: []
                };


            default:
                return state;

        }

    };
    const [state, dispatch] = useReducer(cartReducer, initialState);

    //derived state
    const totalItemsInCart = state.cart.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = state.cart.reduce((total,cartItem)=> total + (cartItem.quantity * cartItem.item.price),0)

    return (
        <CartContext.Provider value={{ state, dispatch, totalItemsInCart,totalPrice }}>
            {children}
        </CartContext.Provider>
    )

}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a Cart Provider')
    }
    return context;
}

export { CartProvider, useCart };