import React from "react";

function Navbar({favouriteCount, count}) {


    return (
        <div className="w-full px-20 py-3 flex justify-between items-center">
            <h3>Orange</h3>
            <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3">
                <h3>Favourites</h3>
                <h4>{favouriteCount(count)}</h4>
            </div>
        </div>
    )
}

export default Navbar;