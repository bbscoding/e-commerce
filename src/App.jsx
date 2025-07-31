import PageContainer from "./container/PageContainer"
import Header from "./components/Header"
import './App.css'
import RouterConfig from "./config/RouterConfig"
import Loading from "./components/Loading"


function App() {

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
    </>
  )
}

export default App
