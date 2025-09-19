import {Link} from "react-router"
const Navbar = ()=>
{
    return(
        <div className="flex w-full items-center justify-evenly">
         <Link to="/" className="text-xl text-bold">Home</Link>
         <Link to="/addmovie" className="text-xl text-bold">Add Movie</Link>
        </div>
    )
}
export default Navbar;