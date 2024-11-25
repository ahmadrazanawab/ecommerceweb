import React from 'react'

const Order = () => {

    const handleSubmit = () => {
        alert("Your item successfully Order");
    }
  return (
    <div className='pt-16 sm:min-h-[100vh] bg-slate-50'>
          <div className='flex justify-center sm:mx-0 mx-4'>
              <form onSubmit={handleSubmit} className='bg-slate-200 px-6 py-4 my-10 shadow-md rounded flex flex-col items-center' action="">
                  <h4 className='text-3xl font-serif'>Payment</h4>
                  <label htmlFor="name" className="w-full flex ml-20  my-1">Name</label>
                      <input type="text" className="w-[80%]  px-4 py-2 border-[2px] border-[#333] rounded outline-none" placeholder='Enter your name' required/>
                  <label htmlFor="number" className="w-full flex  my-1 ml-20">Number</label>
                      <input type="number" className="w-[80%] px-4 py-2 border-[2px] border-[#333] rounded outline-none" id='number' placeholder='Enter your number' minLength='10' maxLength='10' required />
                  <div className='flex ml-7'>
                  <label htmlFor="number" className='mx-2'>Cash Payment
                      <input type="radio" className='mx-2' name='money' id='number' placeholder='Enter your name' required/>
                  </label>
                  <label htmlFor="number1" className='mx-2'>Online Payment
                      <input type="radio"className='mx-1' name='money' id='number1' placeholder='Enter your name' required/>
                  </label>
                  </div>
                  <label htmlFor="city" className='w-full flex ml-20  my-1'>City</label>
                  <input type="text" className="w-[80%]  px-4 py-2 border-[2px] border-[#333] rounded outline-none" id='city' placeholder='Enter your city' required/>
                  <label htmlFor="state" className="w-full flex  my-1 ml-20">State </label>
                  <input type="text" className="w-[80%] px-4 py-2 border-[2px] border-[#333] rounded outline-none" id='state' placeholder='Enter your state' required/>
                 
                  <label htmlFor="address" className="w-full flex  my-1 ml-20">Address</label>
                  <input type="text" className="w-[80%] px-4 py-2 border-[2px] border-[#333] rounded outline-none" id='address' placeholder='Enter your Address' required/>
                  
                  <label htmlFor="pinno" className="w-full flex  my-1 ml-20">Pin No </label>
                  <input type="number" className="w-[80%] px-4 py-2 border-[2px] border-[#333] rounded outline-none" id='pinno' placeholder='Enter your pin no' minLength='6' maxLength='6' required/>
                 <button  type='submit' className='text-xl text-white  font-serif border-[1px] border-sky-900 bg-sky-500 px-4 py-1 rounded my-3'>Buy Now</button>
              </form>
      </div>
    </div>
  )
}

export default Order
