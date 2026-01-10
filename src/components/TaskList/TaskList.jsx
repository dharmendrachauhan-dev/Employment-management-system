import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({ data }) {
  // console.log(data)
  return (
    <>
      <div
        id="tasklist"
        className="h-[55%] text-white overflow-x-scroll no-scrollbar flex items-center justify-start w-full gap-5 flex-nowrap  py-5 mt-10"
      >
        {data.tasks.map((elem, idx) => {
          if (elem.failed) return <FailedTask key={idx} data={elem}/>;
          if (elem.completed) return <CompleteTask key={idx} data={elem}/>;
          if (elem.active) return <AcceptTask key={idx} data={elem}/>;
          if (elem.newTask) return <NewTask key={idx} data={elem}/>;
          return null;
        })}
      </div>
    </>
  );
}

export default TaskList;
