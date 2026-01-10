
function Header({handleLogout}) {

  // console.log(handleLogout)

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold text-white'> Dharmendra 👋</span></h1>
      <button 
      className='bg-red-600 rounded active:scale-90 cursor-pointer duration-300 text-lg font-medium text-white px-5 py-2'
      onClick={handleLogout}
      >
        Log Out</button>
    </div>
  )
}

export default Header
