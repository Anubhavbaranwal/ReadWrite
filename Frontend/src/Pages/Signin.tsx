import Quote from "../components/Quote/Quote"
import Login from "../components/Signin"

const Signin = () => {
  return (
      <div className="grid grid-cols-2">
        <Login />
        <Quote />
      </div>
  
  )
}

export default Signin