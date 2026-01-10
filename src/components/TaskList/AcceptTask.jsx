import React from "react";

function AcceptTask({data}) {
  // console.log(data)
  // console.log(data.taskTitle)
  return (
    <>
      <div className="shrink-0 h-full w-75 p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semi-bold">{data.taskTitle}</h2>
        <p className="text-sm mt-3">
          {data.taskDescription}
        </p>
        <div className="mt-15">
            <button className="bg-green-500 py-1 px-2 text-sm rounded">Accepted</button>
        </div>
      </div>
    </>
  );
}

export default AcceptTask;
