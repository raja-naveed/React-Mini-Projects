import React from 'react'

const Header = () => {
  return (
    <header className="bg-yellow-500 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <svg className="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <h1 className="text-white text-xl font-bold"> Raja Keep</h1>
      </div>
      <div>
        <button className="bg-white text-yellow-500 px-4 py-2 rounded-full shadow-lg hover:shadow-xl">Create note</button>
      </div>
    </header>
  )
}

export default Header;
