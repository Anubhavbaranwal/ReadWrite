import Quote from "../components/Quote/Quote"
import Login from "../components/Signin"

const Signin = () => {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Login />
        <div className="hidden lg:block">
         <Quote />
        </div>
      </div>
  
  )
}

export default Signin