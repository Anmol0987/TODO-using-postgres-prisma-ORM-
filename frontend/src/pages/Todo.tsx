import axios from "axios";
import { useEffect, useState } from "react";

export const Todo = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:3000/todo', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then(res => {
                // console.log(res.data);
                setTodos(res.data);
                console.log(todos);
            })
        } catch (error) {
            console.log(error);

        }

    }, [])

    return (
        <div className="flex gap-2 p-4 relative overflow-x-hidden flex-col h-screen w-screen">
            <h1 className="text-4xl flex justify-center underline">Todo</h1>
            <div className="flex gap-3 relative h-full w-full flex-wrap">

                {todos.map(({ title, description, Done }, index) => (
                    <div key={index} className="h-80 w-80 flex flex-col border-red-400 border-2 p-2">
                        <div className="text-2xl flex justify-center">
                            {title}
                        </div>
                        <div className="text-xl">
                            {description}
                        </div>
                        <div>
                            {Done ? 'Done' : 'Not Done'}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}