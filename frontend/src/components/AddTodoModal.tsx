import { useRef, useState } from "react";
import axios from "axios";
import { CloseIcon } from "../icon/CloseIcon";

export function AddTodoModal({ open, onclose }: { open: boolean, onclose: () => void }) {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    async function addtodo() {
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;

        await axios.post(`http://localhost:3000/todo`, {
            title,
            description,
            done: false
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onclose();

    }

    return <div>
        {open && <div>
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded fixed">
                        <div className="flex justify-end">
                            <div onClick={onclose} className="cursor-pointer">
                                <CloseIcon />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <input className="p-2 border-2" ref={titleRef} placeholder="Title" />
                            <input className="p-2 border-2" ref={descriptionRef} placeholder="description" />
                            <div className="flex justify-center">
                                <button onClick={addtodo} className="bg-blue-500 p-2 rounded">Add Todos </button>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

        </div>}
    </div>

}
