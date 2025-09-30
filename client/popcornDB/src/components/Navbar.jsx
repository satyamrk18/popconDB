import { Link, useLocation } from "react-router";
const Navbar = () => {
  return (
  <div className="flex flex-row w-[70%] items-center justify-evenly font-bold text-xl max-[800px]:flex-wrap max-[800px]:gap-5 max-[800px]:w-[90%]">
      <Link to="/">Home</Link>
      <Link to="/Webseries">Webseries</Link>
      <Link to="/liveshows">liveshows</Link>
      <Link to="/hollywood">Hollywood</Link>
      <Link to="/bollywood">bollywood</Link>
      <Link to="/marathi">marathi</Link>
      <Link to="/south">south</Link>
    </div>
  );
};
export default Navbar;
