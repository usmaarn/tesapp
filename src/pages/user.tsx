import DashboardLayout from "@/layouts/Dashboard"
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";

const User = () => {

    const [user, setUser] = useState({});

    const params = useParams();

    useEffect(() => {
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then(res => res.json())
            .then(json => {
                let user = json.find((usr: any) => usr.userName == params.user)
                setUser(user);
            })
    }, [])
    

    return (
        <DashboardLayout>
            <div className="space-y-10">
                <Link to="/dashboard" className="flex items-center gap-2">
                    <CgArrowLongLeft className="text-2xl" /> back to Users
                </Link>
                
                <div className="flex items-center justify-between mt-5">
                    <h1 className="text-2xl font-semibold">User Details</h1>
                    <div className="flex gap-3 font-semibold">
                        <button className="uppercase px-5 py-2 rounded-lg border-2 hover:bg-danger hover:text-white border-danger text-danger">Blacklist user</button>
                        <button className="uppercase px-5 py-2 rounded-lg border-2 hover:bg-secondary hover:text-white border-secondary text-secondary">activate user</button>
                    </div>
                </div>

                <div className="shadow bg-white px-5 pt-10 space-y-10">

                    <div className="flex items-center">
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img src={user?.profile?.avatar} alt="" className="object-contain" />
                        </div>
                        <div className="p-5">
                            <h4 className="text-xl font-medium text-primary">{user?.profile?.firstName} {user?.profile?.lastName}</h4>
                            <p className="text-sm">{user.accountNumber}</p>
                        </div>
                        <div className="p-5 border-x">
                            <h6>User’s Tier</h6>
                            <p className="flex items-center gap-1 text-warning">
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </p>
                        </div>
                        <div className="p-5">
                            <h4 className="text-xl font-medium text-primary">₦{user.accountBalance}</h4>
                            <p className="text-sm">9912345678/Providus Bank</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Link to="#" className="text-secondary px-5 border-b-2 border-b-secondary py-2">General Details</Link>
                        <Link to="#">Documents</Link>
                        <Link to="#">Bank Details</Link>
                        <Link to="#">Loans</Link>
                        <Link to="#">Savings</Link>
                        <Link to="#">App and System</Link>
                    </div>
                </div>  

                <div className="shadow bg-white p-5 space-y-5">
                    <div className="">
                        <h6 className="font-medium text-primary">Personal Information</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">Full name</p>
                                <p className="font-medium">{user?.profile?.firstName} {user?.profile?.lastName}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">phone number</p>
                                <p className="font-medium">{user?.profile?.phoneNumber}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">email address</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">bvn</p>
                                <p className="font-medium">{user?.profile?.bvn}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">gender</p>
                                <p className="font-medium">{user?.profile?.gender}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">marital status</p>
                                <p className="font-medium">Single</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">children</p>
                                <p className="font-medium">none</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">type of residence</p>
                                <p className="font-medium">{user?.profile?.address}</p>
                            </div>
                        </div>
                    </div>

                     <div className="">
                        <h6 className="font-medium text-primary">Education and Employment</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">level of education</p>
                                <p className="font-medium">{user?.education?.level}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">Employment Status</p>
                                <p className="font-medium">{user?.education?.employmentStatus}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">Sector of Employment</p>
                                <p className="font-medium">{user?.education?.sector}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">Duration of Employment</p>
                                <p className="font-medium">{user?.education?.duration}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">office email</p>
                                <p className="font-medium">{user?.education?.officeEmail}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">monthly income</p>
                                <p className="font-medium">₦{user?.education?.monthlyIncome[0]} - ₦{user?.education?.monthlyIncome[1]}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">loan repayment</p>
                                <p className="font-medium">₦{user?.education?.loanRepayment}</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h6 className="font-medium text-primary">Socials</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">twitter</p>
                                <p className="font-medium">{user?.socials?.twitter}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">facebook</p>
                                <p className="font-medium">{user?.socials?.facebook}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">instagram</p>
                                <p className="font-medium">{user?.socials?.instagram}</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h6 className="font-medium text-primary">Guarantor</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">full name</p>
                                <p className="font-medium">{user?.guarantor?.firstName} {user?.guarantor?.lastName}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">phone number</p>
                                <p className="font-medium">{user?.guarantor?.phoneNumber}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">email address</p>
                                <p className="font-medium">{user?.guarantor?.address}</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">relationship</p>
                                <p className="font-medium">{user?.guarantor?.gender}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default User;