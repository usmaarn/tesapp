import { FunctionComponent } from "react";
import {Link, useRouteError} from 'react-router-dom';
import AppLogo from "@/components/AppLogo";

const ErrorPage: FunctionComponent = props => {

    const error: any = useRouteError();

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            <AppLogo className="mb-20" />
            <h1 className="text-9xl font-black">{ error.status }</h1>
            <h6 className="text-4xl tracking-widest">{ error.statusText }</h6>
            <Link to="/" className="px-3 py-2 rounded-lg border mt-5 hover:bg-dark hover:text-white hover:border-0">
                Back to Home
            </Link>
        </div>
    )
}

export default ErrorPage;