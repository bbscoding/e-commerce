import PageContainer from "./container/PageContainer"
import Header from "./components/Header"
import './App.css'
import ProductList from "./components/ProductList"


function App() {

  return (
    <>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </>
  )
}

export default App
