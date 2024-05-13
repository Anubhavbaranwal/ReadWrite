import Quote from "../components/Quote/Quote"
import Register from "../components/Register"

const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <Register />
        <Quote />
      </div>
    </div>
  )
}

export default Signin