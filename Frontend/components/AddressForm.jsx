import React from 'react'

function AddressForm() {
  return (
    <div>
           <p className='text-xs capitalize'>all fields required</p>

<form className='my-3'>

<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
      placeholder='Email '
      required
      // onChange={passwordInputHandler}
    />
<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
      placeholder='First Name'
      required
      // onChange={passwordInputHandler}
    />
<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
      placeholder='Last Name '
      required
      // onChange={passwordInputHandler}
    />
      
     <input
        type='number'
        className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
        placeholder='Phone Number e.g 081 '
        required
        // onChange={passwordInputHandler}
      />
     <input
        type='text'
        className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
        placeholder='Devivery address '
        required
        // onChange={passwordInputHandler}
      />

  <select className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5 text-gray-500'>
    <option>select state</option>
    <option>Abuja</option>
    <option>Ibadan</option>
    <option>Kaduna</option>
    <option>Katsina</option>
    <option>Port Harcourt</option>
    <option>Lagos</option>
  </select>

<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
      placeholder='Postcode  / Zip Code. optional '
      required
      // onChange={passwordInputHandler}
    />

<select className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5 text-gray-700'>
    <option>Nigeria</option>
  </select>
    
</form>
    </div>
  )
}

export default AddressForm