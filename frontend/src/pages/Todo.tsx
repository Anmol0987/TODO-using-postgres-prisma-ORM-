export const Todo = () => {
    return (
        <div className="flex gap-2 p-4 relative overflow-x-hidden flex-col h-screen w-screen">
            <h1 className="text-4xl flex justify-center underline">Todo</h1>
            <div className="flex gap-3 relative h-full w-full flex-wrap">
                <div className="h-80 w-80 flex flex-col border-red-400 border-2 p-2">
                    <div className="text-2xl flex justify-center ">
                        Title
                    </div>
                    <div className="text-xl ">
                        description
                    </div>
                </div>
                
            </div>
        </div>
    )
}