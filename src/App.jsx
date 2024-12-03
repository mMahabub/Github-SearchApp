import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Footer from "./Components/Layout/Footer"
import Alert from "./Components/Layout/Alert"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"
import User from "./Components/user/User"
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
   <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      
      <main className="container mx-auto px-3 pb-12 text-white">
      <Alert/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/user/:login" Component={User}></Route>
          <Route path="/notfound" element={<NotFound/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  

   </Router>
   </AlertProvider>
   </GithubProvider>
  )
}

export default App
