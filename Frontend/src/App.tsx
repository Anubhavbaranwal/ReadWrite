import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './Pages/Signup'
import Signin  from './Pages/Signin'
import Blog  from './Pages/Blog'
import Blogs from './Pages/Blogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App