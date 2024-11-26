import React from 'react'

const Alert = ({alert}) => {
  return (
    alert && <div className='pt-20 bg-[#ADD8E6]'>
          <div className='min-h-[10vh] border-[1px] border-green-500 flex justify-start items-center pl-4 bg-blue-500 w-full'>
              <p className='text-2xl font-serif text-white'>{alert.type}: {alert.msg}</p>
         </div>
    </div>
  )
}

export default Alert
