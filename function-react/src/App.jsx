import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Header from './Components/header/Header'
import TextList from './Components/navbar/TextList'
import Home from './pages/Home'
import Visual from './pages/Visual'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Visual',
    element:<Visual/>
  }
])
function App() {

  return (
    <>
     {/* <Header/>
     <TextList/> */}
     <RouterProvider router={router}/>
     
    </>
  )
}

export default App
