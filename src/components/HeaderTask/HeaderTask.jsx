import { useSelector } from "react-redux";

export const HeaderTask = () => {
    const { tasks } = useSelector((state) => state.tasks);

    const completedTasks = tasks.filter((t) => t.completed).length;

    return (
        <header className="flex items-start justify-between">
            <div className="text-base leading-5 text-[#222]">
                <h2 className="font-bold">Tasks</h2>
                <span className="block">Active: {tasks.length - completedTasks}</span>
                <span className="block">Completed: {completedTasks}</span>
            </div>

            <div className="text-base leading-5 text-[#222]">
                <h2 className="font-bold">Filter by status</h2>
                <div className="mt-1 flex gap-[3px]">
                    <button
                        type="button"
                        // onClick={() => onClick("all")}
                        className={`h-9 cursor-pointer rounded-[3px] px-3 text-base 
                            "}`}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        // onClick={() => onClick("active")}
                        className={`h-9 cursor-pointer rounded-[3px] px-3 text-base 
                            "}`}
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        // onClick={() => onClick("completed")}
                        className={`h-9 cursor-pointer rounded-[3px] px-3 text-base
                             "}`}
                    >
                        Completed
                    </button>
                </div>
            </div>
        </header>
    )
};

// ${tasksType === "all" ? "text-white bg-[#1a73d9]" : "text-[#333] bg-[#e1e4e8]
// ${tasksType === "completed" ? "text-white bg-[#1a73d9]" : "text-[#333] bg-[#e1e4e8]
// ${tasksType === "active" ? "text-white bg-[#1a73d9]" : "text-[#333] bg-[#e1e4e8]