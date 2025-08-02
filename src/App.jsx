import PageContainer from "./container/PageContainer"
import Header from "./components/Header"
import './App.css'
import RouterConfig from "./config/RouterConfig"
import Loading from "./components/Loading"
import { Drawer } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice"
import { useEffect } from "react"


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateBasket())
  }, [])
  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
      <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer}>
        <div className="drawer-container">
          {products && products.length > 0 ? (
            <>
              {products.map((product) => (
                <div key={product.id} className="basket-item">
                  <div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="basket-item-image"
                    />
                    <div className="basket-item-info">
                      <h4>{product.title}</h4>
                      <p>Quantity : {product.quantity}</p>
                      <p className="price">{product.price} ₺</p>
                    </div>
                  </div>
                  <button className="delete-button">Delete</button>
                </div>
              ))}
              <h2>Total Price: {totalAmount}</h2>
            </>
          ) : (
            <p>Sepet boş</p>
          )}
        </div>
      </Drawer >
    </>
  )
}

export default App
