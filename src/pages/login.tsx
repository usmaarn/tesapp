import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoSrc from "../assets/images/logo.svg"
import MockupSrc from "../assets/images/mockup.svg"

const Login: FunctionComponent = props => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            console.log('hello world');
            return navigate('/dashboard');
        }, 2000)
    }

    return (
        <div className="font-avenia">

            {loading && 
                <div className="fixed top-0 left-0 w-screen h-screen bg-white/90 flex items-center justify-center text-2xl ">
                    loading...
                </div>
            }

            <div className="p-5 min-h-screen flex items-center justify-center">
                <a href="/" className="absolute top-5 left-5">
                    <img src={LogoSrc} alt="app logo" />
                </a>

                <div className="grid grid-cols-2 max-w-[1200px] gap-10 mx-auto f">
                    
                    <div className="">
                        <img src={MockupSrc} alt="MOCKUP IMAGE" />
                    </div>

                     <div className="">
                        <h1 className="font-avenia_bold text-primary text-4xl">Welcome!</h1>
                        <p className="mb-10">Enter Login Details</p>

                        <form className="flex flex-col gap-5 max-w-[400px]" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Email Address" className="p-3 rounded ring-1 ring-dark/50 outline-none" />
                            <div className="rounded ring-1 ring-dark/40 text-sm flex items-center">
                                <input type={show ? "text" : "password"} placeholder="Password" className="bg-transparent p-3 flex-grow outline-none" />
                                <button type="button" onClick={() => setShow(!show)} className="uppercase font-semibold text-secondary px-5 tracking-wider">
                                    {show ? "Hide" : "Show"}
                                </button>
                            </div>
                            <a href="#" className="text-secondary font-semibold uppercase text-sm tracking-wider">Forgot password?</a>
                            <button type="submit" className="p-3 bg-secondary text-white rounded font-bold">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;