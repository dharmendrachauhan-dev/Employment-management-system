import { useState, useEffect } from "react";

function CreateTask() {
  const [formTask, setFormTask] = useState({
    taskTitle: "",
    date: "",
    assignTo: "",
    category: "",
    description: "",
  });

  const [task, setTask] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormTask((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle: formTask.taskTitle,
      date: formTask.date,
      assignTo: formTask.assignTo,
      category: formTask.category,
      description: formTask.description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setTask(newTask);

    const data = JSON.parse(localStorage.getItem("employees"));
    console.log(data);

    const updatedEmployee = data.map((emp) => {
      if (formTask.assignTo == emp.name) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          tasksCounts: {
            ...emp.tasksCounts,
            newTask: emp.tasksCounts.newTask + 1,
          }
        }
      }
      return emp;
    });

    console.log(updatedEmployee)

    localStorage.setItem('employees', JSON.stringify(updatedEmployee))

    setFormTask({
      taskTitle: "",
      date: "",
      assignTo: "",
      category: "",
      description: "",
    });
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex text-white items-start flex-wrap p-5 mt-5 justify-between rounded-lg bg-slate-700"
      >
        <div className="w-1/2 p-5">
          <div className="mt-2">
            <h3>Task Title</h3>
            <input
              type="text"
              name="taskTitle"
              placeholder="Make a UI design"
              className="border outline-none w-full rounded placeholder:text-sm p-2"
              value={formTask.taskTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2">
            <h3>Date</h3>
            <input
              type="date"
              name="date"
              className="border outline-none w-full rounded placeholder:text-sm p-2"
              value={formTask.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2">
            <h3>Assign to</h3>
            <input
              type="text"
              name="assignTo"
              placeholder="Employee name"
              className="border outline-none w-full rounded placeholder:text-sm p-2"
              value={formTask.assignTo}
              onChange={handleInputChange}
            />
          </div>

          <div className=" mt-2">
            <h3>Category</h3>
            <input
              type="text"
              name="category"
              placeholder="design, dev, etc"
              className="border outline-none w-full rounded placeholder:text-sm p-2"
              value={formTask.category}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="w-1/2 p-5 ">
          <h3>Description</h3>
          <textarea
            name="description"
            id="task"
            placeholder="Write your description"
            className="w-full  border outline-none rounded h-52 mt-2 p-2"
            value={formTask.description}
            onChange={handleInputChange}
          ></textarea>
          <button className="bg-green-500 w-full p-2 mt-2 rounded-lg cursor-pointer active:scale-95 duration-600">
            Create task
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateTask;
