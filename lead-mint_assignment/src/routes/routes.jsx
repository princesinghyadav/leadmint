import { Routes , Route } from "react-router-dom"
import { Login } from "../pages/login"
import { RegisterPage } from "../pages/register"
import { Home } from "../pages/home"

export function Routess(){


    return (
 
<>
<Routes>

<Route path="/" element={<Login/>} />
<Route path="/Register" element={<RegisterPage/>}/>
<Route path="/Home" element={ <Home/> } />
</Routes>
</>
    )
}