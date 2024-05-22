import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './Pages/Signup'
import Signin  from './Pages/Signin'
import Blog  from './Pages/Blog'
import Blogs from './Pages/Blogs'
import Publish from './Pages/publish.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App