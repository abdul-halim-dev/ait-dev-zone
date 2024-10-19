 import { NavLink } from "react-router-dom";
 

const Header = () => {

  const linkStyle =` text-textColor font-semibold text-xl font-primary hover:text-secondary hover:border-b-2 pb-1 duration-100 `;

  return (
    <header className="w-full h-[60px] bg-active flex items-center justify-between px-[50px] " >

    <div className="logo">
      <h1> AIT DEV ZONE</h1>
    </div>

<nav>
  <ul className="w-full flex items-center justify-center gap-4 "> 
    <li> <NavLink  className= {`${linkStyle} ${({ isActive, isPending }) =>
    isPending ? "   " : isActive ? " text-primary " : "text-textColor"
  }`} to="/"> Home  </NavLink> </li>
    <li> <NavLink className={`${linkStyle} ${({ isActive, isPending }) =>
    isPending ? " " : isActive ? " text-primary " : "  text-textColor"
  }`} to="/services"> Services   </NavLink> </li>
    <li> <NavLink className={linkStyle} to="/portfolio">  Portfolio  </NavLink> </li>
    <li> <NavLink className={linkStyle} to="/price"> Price  </NavLink> </li>
    <li> <NavLink className={linkStyle} to="/team"> Team  </NavLink> </li>
    <li> <NavLink className={linkStyle} to="/technology"> Technology  </NavLink> </li>
    <li> <NavLink className={linkStyle} to="/contactus"> Contact  </NavLink> </li>
  </ul>
</nav>



    </header>
  )
}

export default Header