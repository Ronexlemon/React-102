import React from "react";
import LoginSignUp from "./LoginSignup";

const Header = () =>{
    return(
        
<header>
<LoginSignUp/>
                    <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold"> For Ninjas</h3>
                </header>
    )
}
export default Header;