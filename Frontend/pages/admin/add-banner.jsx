import Head from "next/head"
import { useState } from "react"
import Header from "../../components/Header"
import axios from 'axios'


const AddBanner = () => {
  const [bannerData, setBannerData] = useState({
    category: '',
    image: '',
  })
  const [success, setSuccess] = useState(false)
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)

  const handleFileInputChange = (event) => {
    setImage(event.target.files[0]);
  };

  const addBannerHandler = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', image);

    
    fetch(process.env.NEXT_PUBLIC_BANNER_IMAGE_URL, {
      method: 'POST',
      body: formData
    })   
    .then(res => res.json())
    .then(fileResData => {
      let image
      return  image = fileResData.image || 'undefined';
    })
    .then(image => {
      let graphqlQuery = {
       query: `
       mutation CreateBanner($category: String!, $image_url: String!) {
         createBanner(bannerInput: {category: $category, image_url: $image_url}) {
           category
           image_url
         }
       }
     `,
       variables: {
         category: category,
         image_url: image,
       }
     };
   
    fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(graphqlQuery)
     })
       .then(res => {  
         return res.json();
       })
       .then(result => {
         setCategory('')
         setImage('')
   
         setTimeout(() => {
           setSuccess(true)
         }, 1000);
         setTimeout(() => {
           setSuccess(false)
         }, 8000);
       })
    })

    .catch(err => console.log(err))
}

    const isUpdate = false
    const bannerInputHandler = (inputIdentifier, e) => {
      setBannerData((currentInputs) => {
        return {
          ...currentInputs,
          [inputIdentifier]: e.target.value,
        };
      });
    };


  return (
    <>
    <Header/>
    <div className="">

          <Head>
           {/* fonts import */}
           <link rel='preconnect' href='https://fonts.googleapis.com' />
      </Head>


    <form onSubmit={addBannerHandler} >
      <h2 className="text-center text-xl uppercase text-gray-500  my-5 [word-spacing: 10px] ">
        {isUpdate ? 'update banner' : 'add banner'}
        <div className="w-[120px] h-[1px] bg-yellow-500 m-auto"></div>
      </h2>
      {success &&
          <p className="text-center text-xl text-green-400 mt-2 transition-all duration-300 ease-out">Banner added successfully </p>
      }
          <input
        type='text'
        className='border-[1px] text-gray-500 lg:border-[1px] rounded-lg md:rounded-full  border-gray-600 outline-none px-6 py-3 w-[90%]  m-auto flex my-6 lg:my-8'
        placeholder='Banner category'
        required
        name="category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />

      <input
        type='file'
        className='border-[1px] text-gray-500 lg:border-[1px] rounded-lg md:rounded-full  border-gray-600 outline-none px-6 py-3 w-[90%]  m-auto flex my-6 lg:my-8'
        placeholder='Image url'
        name="image"
        required
        // value={imageFile}
        onChange={handleFileInputChange}
      />

    
      {isUpdate ? (
        <button
          className='flex justify-center m-auto mt-5 lg:mt-5  bg-gray-500 w-56 rounded-full text-white  px-2 py-3 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-[#ffcb05] 2xl:w-[300px] mb-20'
        //   onClick={updateDataHandler}
        >
          Update
        </button>
      ) : (
        <button type="submit"
          className='flex justify-center m-auto mt-5 lg:mt-5  bg-yellow-400 w-56 rounded-full text-white  px-2 py-3 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-yellow-500 2xl:w-[300px] mb-20'
          
        >
          Add
        </button>
      )}
    </form>
    </div>
    </>
  )
}

export default AddBanner