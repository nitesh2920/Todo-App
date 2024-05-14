import { useDispatch, useSelector } from "react-redux";
import { filterTask, markAllCompleted } from "../redux/action.js";
import { Tooltip } from "react-tooltip";




const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  // console.log("filterbtn", currentFilter);
  const handleFilter = (filter) => {
    dispatch(filterTask(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="px-2 py-1 rounded border  border-gray-300 focus:outline-none text-sm "
      >
        <option value="ALL">default</option>
        <option value="COMPLETED">Complete</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
      <button
        onClick={() => dispatch(markAllCompleted())}
        className="uppercase  text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
      
      >
        Mark all completed
      </button>
    </div>
  );
};

export default FilterButtons;
