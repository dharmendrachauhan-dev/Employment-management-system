import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

function AdminDashboard(props) {
  // console.log(props)
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTask />
      </div>
  );
}

export default AdminDashboard;
