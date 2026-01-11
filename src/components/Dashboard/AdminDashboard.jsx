import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

function AdminDashboard({handleLogout, employees, setEmployees}) {
  // console.log(handleLogout)
  return (
    <div className="h-screen w-full p-10">
      <Header handleLogout={handleLogout}/>
      <CreateTask employees={employees} setEmployees={setEmployees}/>
      <AllTask employees={employees}/>
      </div>
  );
}

export default AdminDashboard;
