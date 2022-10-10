import {MdMoreVert} from 'react-icons/md';
import {BsFilter} from 'react-icons/bs'
import { FunctionComponent, useEffect, useState } from 'react';
import FilterModal from './table/filtermodal';
import { Link } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import { AiOutlineEye } from 'react-icons/ai';
import { FiUserCheck, FiUserX } from 'react-icons/fi';

const Users:FunctionComponent = () => {

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(10);
    const [sliced, setSliced] = useState([]);
    

    useEffect(() => {
       fetch('/users.json')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setSliced(data.slice(0, count))
        }
        );
    }, [])

    const formatDate = (date: string) => {
        const months = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const newDate = new Date(date);
        const m = months[newDate.getMonth()];
        const d = newDate.getDate();
        const y = newDate.getFullYear();
        const h = newDate.getHours();
        const min = newDate.getMinutes();
        const amp = h > 12 ? "PM" : "AM";
        return `${m} ${d}, ${y} ${h%12}:${min} ${amp}`;
    }

    return (

        <div className="relative">
            <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope='col' className='py-3 px-6'>
                            <FilterModal label='Organization' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterModal label='Username' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterModal label='Email' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterModal label='phone number' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterModal label='date joined' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <FilterModal label='status' />
                        </th>
                        <th scope="col" className="py-3 px-6">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sliced.map(user => (
                        <tr key={user.email} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Link to={"/dashboard/users/"+user.userName} className="hover:underline">{user.orgName}</Link>
                            </th>
                            <td className="py-4 px-6">
                                {user.userName}
                            </td>
                            <td className="py-4 px-6">
                                {user.email}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                {user.phoneNumber}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                {formatDate(user.createdAt)}
                            </td>
                            <td className="py-4 px-6">
                                <span className='px-3 py-2 text-xs rounded-full bg-warning/10 text-warning'>Pending</span>
                            </td>
                            <td className="py-4 px-6 relative">
                                <Menu userName={user.userName} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

function Menu({userName}: any){

    const [open, setOpen] = useState(false);

    return (
        <div className='relative'>
            <button onClick={() => setOpen(true)}>
                <MdMoreVert />
            </button>
            
            {open && 
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <ul className="absolute top-[100%] right-0 p-5 bg-white rounded border z-50 space-y-3">
                        <li>
                            <Link to={"/dashboard/users/"+userName} className="flex items-center gap-2">
                                <AiOutlineEye />
                                <span className='whitespace-nowrap'>View Details</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/dashboard/users/"+userName} className="flex items-center gap-2">
                                <FiUserX />
                                <span className='whitespace-nowrap'>Blacklist User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/dashboard/users/"+userName} className="flex items-center gap-2">
                                <FiUserCheck />
                                <span className='whitespace-nowrap'>Activate User</span>
                            </Link>
                        </li>
                    </ul>
                </ClickAwayListener>
            }
        </div>
    )
}

export default Users;