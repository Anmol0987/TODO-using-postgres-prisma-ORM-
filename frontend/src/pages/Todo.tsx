import axios from "axios";
import { useEffect, useState } from "react";
import { AddTodoModal } from "../components/AddTodoModal";

export const Todo = () => {
    const [modalOpen, setModalOpen] = useState(false);
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
    }, [modalOpen])

    return (
        <div className="flex gap-2 p-4 relative overflow-x-hidden flex-col h-screen w-screen">

            <div className="flex justify-center z-50">
                <h1 className="text-4xl flex justify-center underline">Todo</h1>
                <div className="flex justify-end gap-4">
                    <AddTodoModal open={modalOpen} onclose={() => {
                        setModalOpen(false);
                    }} />
                    <button className="bg-red-400 p-3 ml-10" onClick={() => {
                        setModalOpen(true)
                    }} >Add Todo</button>
                </div>
            </div>

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