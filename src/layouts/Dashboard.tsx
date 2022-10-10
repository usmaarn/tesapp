import { Fragment, FunctionComponent, ReactNode } from "react"
import Navbar from "@/components/Dashboard/Layouts/Navbar";
import Sidebar from "@/components/Dashboard/Layouts/Sidebar";

type Props = {
    children: ReactNode,
    label?: String,
}

const DashboardLayout = (props: Props) => {
    return (
        <Fragment>
            <Navbar />
            <div className="grid grid-cols-[300px,auto]">
                <Sidebar />
                <div className="bg-slate-50 p-5">
                    <h2 className="text-2xl font-semibold mt-5">{ props.label }</h2>
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default DashboardLayout;