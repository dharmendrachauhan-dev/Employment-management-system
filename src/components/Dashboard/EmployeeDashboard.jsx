import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({data, handleLogout}) {
  // console.log(handleLogout)
  // console.log(data.email)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} handleLogout={handleLogout}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
