
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#F7F4ED]">
          <div className="border-b flex justify-between items-center py-5 px-36">
            <Link to={`/blogs`}>
                <div className="text-3xl pr-4 cursor-pointer font-extrabold font-serif">Medium</div>
            </Link>
            
            {/* Right section with icons, button, and avatar */}
            <div className="flex items-center gap-5 ">
               

                <div className="text-sm font-light pl-1">
                    Our Story
                </div>
                <div className="text-sm font-light pl-1">
                    Membership
                </div>
                <div className="text-sm font-light pl-1">
                   Write
                </div>
                <div className="text-sm font-light pl-1">
                    Signin
                </div>
                <button 
                    onClick={() => navigate('/signin')} 
                    type="button" 
                    className="text-white ml-1 bg-black font-medium rounded-full cursor-pointer text-sm px-4 py-2"
                >
                    Get Started
                </button>
                


                

            </div>
        </div>
      
    </div>
  )
}

export default Navbar;


