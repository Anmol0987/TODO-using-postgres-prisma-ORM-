import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const SignIn = () => {

    const userRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
    const signin = async () => {
        if (userRef.current && passRef.current) {
            const res = await axios.post('http://localhost:3000/signin', {
                username: userRef.current.value,
                password: passRef.current.value
            })
            localStorage.setItem('token', res.data.token)
            console.log(res);
        }
        navigate('/todo')
    }

    return (
        <div className=" h-screen w-screen flex-col flex justify-center items-center">

            <div className="text-3xl">
                SignIN
            </div>
            <div className="h-96 w-96 flex flex-col justify-center gap-4 items-center  border-blue-300 border-2 ">
                <div>
                    <h5>Username</h5>
                    <input ref={userRef} className="p-2 border-blue-300 border-2" type="text" placeholder="username" />
                </div>
                <div>
                    <h5>Password</h5>

                    <input ref={passRef} className="p-2 border-blue-300 border-2" type="text" placeholder="password" />
                </div>
                <button onClick={signin} className="bg-blue-700 text-white px-4 py-2 rounded">Sign In</button>
            </div>
        </div>
    )
}