import React from 'react'
import { FaNewspaper } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-4 pb-4 border-b-2 ">
                <div className="flex items-center justify-center">
                    <FaNewspaper className="text-4xl mr-2" />
                    <div className="text-4xl font-bold font-serif">THE NEWS</div>
                </div>
                <div className="text-center italic">"Stay informed, stay ahead."</div>
            </div>

        </>
    )
}

export default Header
