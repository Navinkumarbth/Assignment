import './Navbar.css'
import { Link } from 'react-router'
function Navbar() {
  return (
    <div className="nav-bar">
      <h1>NetFlix</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/latest"}>Latest Movies</Link>
      <Link to={"/upcoming"}>Upcoming Movies</Link>
      <input type="search" name="search" id="search" placeholder="Search movie" />
    </div>
  )
}

export default Navbar;