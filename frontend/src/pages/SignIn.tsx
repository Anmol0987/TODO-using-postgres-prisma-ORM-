export const SignIn=() =>{
    return(
        <div className=" h-screen w-screen flex-col flex justify-center items-center">

        <div className="text-3xl">
            Signin
        </div>
        <div className="h-96 w-96 flex flex-col justify-center gap-4 items-center  border-blue-300 border-2 ">
            <div>
                <h5>Username</h5>
                <input className="p-2 border-blue-300 border-2" type="text" placeholder="username" />
            </div>
            <div>
                <h5>Password</h5>
                <input className="p-2 border-blue-300 border-2" type="text" placeholder="password" />
            </div>
            <button className="bg-blue-700 px-4 text-white py-2 rounded">Sign Up</button>
        </div>
    </div>
    )
}