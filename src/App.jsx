import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthDataContext } from "./context/AuthContext";
import { setlocalStorage } from "./utils/localStorage";
import CreateTask from "./components/others/CreateTask";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const getEmployeesData = JSON.parse(localStorage.getItem('employees')) || []
  const [employees, setEmployees] = useState(getEmployeesData)

  useEffect(()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
  },[employees])

  const authData = useContext(AuthDataContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);



  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserData(null)
  }

  const handleLogin = (email, password) => {
    if (email === "admin@company.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );

        localStorage.setItem(
          'employees',
          JSON.stringify(authData.employees)
        )
      }
    } else {
      alert("somethiing went wrong");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" && <AdminDashboard handleLogout={handleLogout} employees={employees} setEmployees={setEmployees} />}
      {user == "employee" && <EmployeeDashboard data={loggedInUserData} employees={employees} handleLogout={handleLogout}/>}
      
    </>
  );
}

export default App;
