import { FunctionComponent } from "react";
import {FiSearch, FiBell} from 'react-icons/fi';
import  {TbChevronDown} from 'react-icons/tb';
import AppLogo from "@/components/AppLogo";
import { Link } from "react-router-dom";


const Navbar: FunctionComponent = props => {
    return (
        <nav className="shadow-xl shadow-zinc-100 p-5">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <AppLogo className="w-32" />
                <form className="flex rounded-lg h-10 overflow-hidden ring-2 ring-secondary">
                    <input type="search" placeholder="Search for anything" className="px-4 bg-transparent outline-none" />
                    <button className="px-5 bg-secondary text-white text-xl">
                        <FiSearch />
                    </button>
                </form>

                <div className="flex items-center gap-8">
                    <Link to='#' className="underline">Docs</Link>
                    <button className="text-xl">
                        <FiBell />
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-secondary/30" />
                        <p>Adedeji</p>
                        <TbChevronDown />
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;