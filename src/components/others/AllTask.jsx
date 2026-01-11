import { AuthDataContext } from "../../context/AuthContext";
import { useContext } from "react";

function AllTask() {
  const authData = useContext(AuthDataContext);
  // console.log(authData);

  return (
    <div
      className="bg-[#1c1c1c] h-42 p-5 rounded mt-5"
    >
      <div className="text-white  mb-3 bg-red-500 flex justify-between rounded py-2 px-4">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h4 className="w-1/5 ">Active Task</h4>
        <h4 className="w-1/5 ">Completed</h4>
        <h4 className="w-1/5 ">Failed</h4>
      </div>

      <div id="tasklist" className="h-[80%] overflow-x-scroll">
        {authData.employees.map((elem,idx) => {
          return (
            <div key={idx} className="text-white  mb-3 border-2 border-emerald-500 flex justify-between rounded py-2 px-4">
              <h2 className="w-1/5">{elem.name}</h2>
              <h3 className="w-1/5 text-blue-500">{elem.tasksCounts.active}</h3>
              <h4 className="w-1/5 text-yellow-400">{elem.tasksCounts.newTask}</h4>
              <h4 className="w-1/5 text-white">{elem.tasksCounts.completed}</h4>
              <h4 className="w-1/5 text-red-500">{elem.tasksCounts.failed}</h4>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
