import { useDispatch, useSelector } from "react-redux";

import { changeStatus } from "../../redux/reducers.js";

export const HeaderTask = () => {
    const dispatch = useDispatch();
    const { tasks, status } = useSelector((state) => state.tasks);

    const completedTasks = tasks.filter((t) => t.completed).length;

    const onClick = (newStatus) => {
        dispatch(changeStatus(newStatus))
    };

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
                        onClick={() => onClick("all")}
                        className={`h-9 cursor-pointer rounded-[3px] px-3 text-base 
                            ${status === "all" ? "text-white bg-[#1a73d9]" : "text-[#333] bg-[#e1e4e8]"}`}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        onClick={() => onClick("active")}
                        className={`h-9 cursor-pointer rounded-[3px] px-3 text-base 
                            ${status === "active" ? "text-white bg-[#1a73d9]" : "text-[#333] bg-[#e1e4e8]"}`}
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        onClick={() => onClick("completed")}
                        className={`h-9 cursor-pointer rounded-[3px] px-3 text-base
                             ${status === "completed" ? "text-white bg-[#1a73d9]" : "text-[#333] bg-[#e1e4e8]"}`}
                    >
                        Completed
                    </button>
                </div>
            </div>
        </header>
    )
};