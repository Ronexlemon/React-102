import React ,{useRef}from "react";

const NavBar = () =>{
    const burger = useRef(null);
    const menu = useRef(null);
    const menus =(event)=>{
        
        if(event.currentTarget.menu.classList.contains("hidden")){
            
            menu.classList.remove("hidden");
        }else{
            menu.classList.add("hidden");
            
        }
    }
    
    return(
        <div className=" md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div className="flex  justify-between items-center">

               
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a className=" hover:text-gray-800 " href="/">FoodNinja</a>
            </h1>
            <div onClick={
                menus
            } className="px-4 cursor-pointer md:hidden " ref={burger}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                </div>
                </div>
            <ul className="text-xs hidden md:block " ref={menu}>
                <li className="py-1">
                    <a href="#" className="px-4 flex justify-end border-r-4 border-orange-200"><span className="font-bold">Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</a>
                </li>
                <li className="py-1">
                    <a href="#" className="px-4 flex justify-end border-r-4 border-white"><span>About</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
</a>
                </li>
                <li className="py-1">
                    <a href="#" className="px-4 flex justify-end border-r-4 border-white"><span>contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}
export default NavBar;