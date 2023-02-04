import React from "react";

const NavBar = () =>{
    return(
        <div className="  col-span-1">
            <nav>
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a className=" " href="/">FoodNinja</a>
            </h1>
            <ul>
                <li className="">
                    <a href="#"><span className="font-bold">Home</span></a>
                </li>
                <li>
                    <a href="#"><span>About</span></a>
                </li>
                <li>
                    <a href="#"><span>contact</span></a>
                </li>
            </ul>
            </nav>
        </div>
    )
}
export default NavBar;