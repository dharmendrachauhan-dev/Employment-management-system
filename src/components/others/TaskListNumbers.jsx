import React from 'react'

function TaskListNumbers({data: {tasksCounts}}) {
  console.log(tasksCounts.active)
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='px-9 py-6 w-[45%] bg-red-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{tasksCounts.active}</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='px-9 py-6 w-[45%] bg-blue-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{tasksCounts.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className='px-9 py-6 w-[45%] bg-yellow-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{tasksCounts.active}</h2>
        <h3 className='text-2xl font-medium'>Activated Task</h3>
      </div>
      <div className='px-9 py-6 w-[45%] bg-green-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{tasksCounts.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
