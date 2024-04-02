
import { Routes,Route } from "react-router-dom"
const views = () => {
  return (
    <Routes><Route path="/" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    </Routes>
  )
}

export default views