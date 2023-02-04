import React from "react";
import recipe from "../assets/recipe1.jpg"

const Cards = () =>{
    return(
        <div className="" >
            
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">latest Recipes</h4>
            
            <div className="mt-8 grid  gap-10 lg:grid-cols-3">
                <div className="card">
                <img className="w-full h-32 sm:h-48 object-cover" src={recipe} alt="no image"/>
                <div className="m-4">
                    <span className="font-bold">Beans chill stew</span>
                    <span className="block text-gray-500 text-sm">Recipe by lemon</span>
                </div>
                <div className="badge">
                    <span >25 min</span>
                </div>
                </div>
                <div className="card">
                <img className="w-full h-32 sm:h-48 object-cover" src={recipe} alt="no image"/>
                <div className="m-4">
                    <span className="font-bold">Beef stew</span>
                    <span className="block text-gray-500 text-sm">Recipe by ronex</span>
                </div>
                <div className="badge">
                    <span >25 min</span>
                </div>
                </div>
                <div className="card">
                <img className="w-full h-32 sm:h-48 object-cover" src={recipe} alt="no image"/>
                <div className="m-4">
                    <span className="font-bold">Sausage yammy</span>
                    <span className="block text-gray-500 text-sm">Recipe by lemon</span>
                </div>
                <div className="badge">
                    <span >25 min</span>
                </div>
                </div>
            </div>
            <h4 className="font-bold mt-12 pb-2 border-b px-16">most Popular</h4>
            <div className="mt-8">
                {/* cards goes here */}
               
            </div>
            <div className="flex justify-center">
                <div className="bg-green-100 text-gray-400 btnstyle">Load More</div>
                
            </div>
           

        </div>

    )
}
export default Cards;