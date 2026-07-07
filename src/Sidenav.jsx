import { NavLink } from "react-router-dom"
import "./Sidenav.css"
function Sidenav(){
    return(
        <div className="sidenavdiv">
            <div className="sidelinkdiv">
                <NavLink to="/counter" className="sidenavlink">Counter</NavLink>
            </div>
            
            <div className="sidelinkdiv">
                <NavLink to="/media" className="sidenavlink">MEDIA</NavLink>
            </div>
            
            <div className="sidelinkdiv">
                <NavLink to="/linktag" className="sidenavlink">Linktag</NavLink>
            </div>
            
            <div className="sidelinkdiv">
                <NavLink to="/navtag" className="sidenavlink">Navtag</NavLink>
            </div>

            <div className="sidelinkdiv">
                <NavLink to="/" className="sidenavlink">ButtonNav</NavLink>
            </div>

            <div className="sidelinkdiv">
                <NavLink to="/forms" className="sidenavlink">Forms</NavLink>
            </div>
            
        </div>
    )
}

export default Sidenav

