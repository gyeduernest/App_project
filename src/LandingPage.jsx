import React from 'react'
import img1 from './images/fly.png'
import img2 from './images/phone.png'
import img3 from './images/rocket.jpg'
import { NavLink } from 'react-router-dom'


export default function LandingPage() {
  return (
    <>
          



    <div className='bg-blue-50 lg:py-20 md:py-20'>
      
      <h3 className='font-bold leeading-relaxed text-center'>Get the best out of this Platform</h3>  
      <p className='text-center leading-relaxed'>This platform is the best on the market to summarise and help you make good financial choices</p>  

      <div className='lg:flex md:flex mx-auto mt-5 lg:justify-center items-center p-12 lg:mt-10'>
        <NavLink to="/signup">

      <button className='btn bg-blue-700 px-5 py-2 rounded-md mr-5  text-slate-50'>Get Started</button>  
      <button className='btn text-slate-900 px-5 py-2 rounded-md font-bold'>Learn More</button>  
        </NavLink>
      </div>

      <div className='mt-10 md:flex lg:flex  lg:justify-center md:justify-center gap-8 text-center'>
        <div><h2>25k</h2>
        <p>downloads</p></div>
        <div><h2>100%</h2>
          <p>satisfactory</p>
        </div>
        <div><h2>100%</h2>
        <p>efficient</p></div>
      </div>
    </div>

      <div className='text-center mt-10 font-bold bg-white w-full px-1'>
        <h3>Plan all your finances with Fintrack</h3>
      </div>

        <div className=' bg-blue-50 py-5 text-center '>
         
          <div className=''>

          <div className='lg:pl-64 lg:flex '>
            <div><img className='images' src={img1}/></div>
            <div className='p-5 lg:w-96'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga esse minima nobis consectetur veritatis suscipit beatae, ipsum dolorum explicabo? Ea at expedita saepe error. Commodi excepturi fugit deleniti omnis dolore?</div>
          </div>
          <div className='lg:pl-64 lg:flex lg:mt-20'>
            <div><img className='images' src={img2}/></div>
            <div className='p-5 lg:w-96'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium deserunt tenetur dolore obcaecati, molestiae odit non quisquam quidem, placeat, facere cumque sapiente? Iusto, possimus similique. Quisquam doloribus enim aspernatur tenetur?</div>
          </div>
          <div className='lg:pl-64 lg:flex lg:mt-20'>
            <div><img className='images' src={img3}/></div>
            <div className='p-5 lg:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, harum voluptatum et nostrum aperiam qui. Alias eveniet inventore nam at iure blanditiis quod aliquid voluptatem, sapiente laboriosam autem placeat voluptates?</div>
          </div>
        </div>
          </div>

          <div>
            <h2 className='text-center py-5'> Get to know all the answers to your questions</h2>



          </div>


     
    </>
  )
}
