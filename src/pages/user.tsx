import DashboardLayout from "@/layouts/Dashboard"
import { useState } from "react";
import { AiFillStar, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";

const User = () => {

    const [user, setUser] = useState({});

    const params = useParams();
    

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
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                            <AiOutlineUser className="text-4xl text-primary" />
                        </div>
                        <div className="p-5">
                            <h4 className="text-xl font-medium text-primary">Grace Effiom</h4>
                            <p className="text-sm">LSQFf587g90</p>
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
                            <h4 className="text-xl font-medium text-primary">₦200,000.00</h4>
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
                                <p className="font-medium">Grace Effiom</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">phone number</p>
                                <p className="font-medium">07060780922</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">email address</p>
                                <p className="font-medium">grace@gmail.com</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">bvn</p>
                                <p className="font-medium">07060780922</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">gender</p>
                                <p className="font-medium">Female</p>
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
                                <p className="font-medium">Parent’s Apartment</p>
                            </div>
                        </div>
                    </div>

                     <div className="">
                        <h6 className="font-medium text-primary">Education and Employment</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">level of education</p>
                                <p className="font-medium">B.Sc</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">Employment Status</p>
                                <p className="font-medium">Employed</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">Sector of Employment</p>
                                <p className="font-medium">FinTech</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">Duration of Employment</p>
                                <p className="font-medium">2 Years</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">office email</p>
                                <p className="font-medium">grace@lendsqr.com</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">monthly income</p>
                                <p className="font-medium">₦200,000.00- ₦400,000.00</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">loan repayment</p>
                                <p className="font-medium">₦40,000</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h6 className="font-medium text-primary">Socials</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">twitter</p>
                                <p className="font-medium">@grace_effiom</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">facebook</p>
                                <p className="font-medium">Grace Effiom</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">instagram</p>
                                <p className="font-medium">@grace_effiom</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h6 className="font-medium text-primary">Guarantor</h6>
                        <div className="grid grid-cols-5 gap-5 flex-nowrap py-5 border-b">
                            <div className="">
                                <p className="uppercase text-xs">full name</p>
                                <p className="font-medium">Debby Ogana</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">phone number</p>
                                <p className="font-medium">07060780922</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">email address</p>
                                <p className="font-medium">debby@gmail.com</p>
                            </div>
                            <div className="">
                                <p className="uppercase text-xs">relationship</p>
                                <p className="font-medium">Sister</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default User;