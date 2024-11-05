import { Link } from "react-router-dom"



export function Links (){


    

    return (
        <>
    <div style={{display:"flex", flexDirection:"column",  marginTop:"60px", padding:"25px"  }}>
    <div className="card">
	<div className="card-body">  <Link to="/"  >👥 LOGIN  </Link></div>
 
</div>
<div className="card" style={{ marginTop:"25px"}}>
	 
    <div className="card-body"> <Link to="/register"  >🎗️ REGISTER  </Link> </div>
</div>
  
       
  
    </div>

   
  
  </>
    )
}