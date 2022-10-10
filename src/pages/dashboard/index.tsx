import Users from "@/components/Users";
import DashboardLayout from "@/layouts/Dashboard";
import { FunctionComponent } from "react";
import {HiOutlineUsers} from 'react-icons/hi';
import {IoChevronDown} from 'react-icons/io5';


const Dashboard: FunctionComponent = () => {
    return (
        <DashboardLayout label="Users">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-10">
                {["users", "active users", "users with loans", "users with savings"].map(card => (
                    <div className="p-10 rounded-lg shadow-lg bg-white space-y-3">
                        <HiOutlineUsers className="w-16 h-16 bg-secondary/10 rounded-full p-2 text-secondary" />
                        <h6 className="uppercase text-lg">{ card }</h6>
                        <h3 className="text-4xl font-bold">2,456</h3>
                    </div>
                ))}
            </div>

            <div className="mt-10 shadow rounded-lg">
                <Users />
            </div>
            <div className="flex items-center gap-2">
                <p>showing</p>
                <p className="flex items-center gap-2 py-1 px-3 bg-gray-100 ">100 <IoChevronDown /></p>
                <p>out of 100</p>
            </div>
        </DashboardLayout>
    )
}

export default Dashboard;