import LogoSrc from "../assets/images/logo.svg"
import MockupSrc from "../assets/images/mockup.svg"

function Login (){
    return (
        <div className="font-avenia">
            <div className="p-5 min-h-screen flex items-center justify-center">
                <a href="/" className="absolute top-5 left-5">
                    <img src={LogoSrc} alt="app logo" />
                </a>

                <div className="grid grid-cols-2 max-w-[1200px] gap-10 mx-auto f">
                    
                    <div className="">
                        <img src={MockupSrc} alt="MOCKUP IMAGE" />
                    </div>

                     <div className="">
                        <h1 className="font-avenia_bold text-primary text-4xl">Welcome</h1>
                        <p className="mb-10">Enter Login Details</p>

                        <form className="flex flex-col gap-5 max-w-[400px]">
                            <input type="text" placeholder="Email Address" className="p-3 rounded ring-1 ring-dark/50" />
                            <div className="rounded ring-1 ring-dark/40 text-sm flex items-center">
                                <input type="password" placeholder="Password" className="bg-transparent p-3 flex-grow" />
                                <button type="button" className="uppercase font-semibold text-secondary px-5 tracking-wider">show</button>
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