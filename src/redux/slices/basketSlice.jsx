import { createSlice } from '@reduxjs/toolkit'


const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    } else {
        return []
    }
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}



export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const productFound = state.products && state.products.find((product) => product.id === action.payload.id)
            if (productFound) {
                const restOfTheBasket = state.products.filter((product) => product.id !== action.payload.id);
                productFound.quantity += action.payload.quantity;
                state.products = [...restOfTheBasket, productFound];
                writeBasketToStorage(state.products);
            } else {
                state.products = [...state.products, action.payload]
                writeBasketToStorage(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.products && state.products.map((product) => {
                state.totalAmount += (product.price * product.quantity);
            })
        }
    },
})

export const { addToBasket, setDrawer, calculateBasket } = basketSlice.actions

export default basketSlice.reducer