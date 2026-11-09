import { useDispatch } from "react-redux";

import { createTask } from "../../redux/reducers.js";

export const AddTask = () => {
    const dispatch = useDispatch();

    const onAdd = () => {
        const value = document.getElementById("input-1").value;

        if (value.length === 0) return;

        dispatch(createTask(value));
    };

    return (
        <div className="mt-4 flex gap-1">
            <input
                id="input-1"
                type="text"
                placeholder="Enter task text..."
                className="h-[38px] flex-1 rounded-sm border border-[#8a8a8a] bg-white px-2.5 text-base text-[#222] placeholder:text-[#757575] focus:border-[#1a73d9] focus:outline-none"
            />
            <button
                type="button"
                onClick={onAdd}
                className="h-[38px] cursor-pointer rounded-[3px] bg-[#e1e4e8] px-3 text-base text-[#333] hover:bg-[#d3d7dc]"
            >
                Add task
            </button>
        </div>
    )
};