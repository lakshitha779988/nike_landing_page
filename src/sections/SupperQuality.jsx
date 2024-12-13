import Button from "../component/Button"
import {shoe8} from '../assets/images'

function SupperQuality() {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center  gap-10 max-container items-center">
      <div className=" flex-1 flex justify-start items-start flex-col gap-5">
        <h1 className='text-4xl font-palanquin font-bold'>We Provide Your <span className='text-coral-red'> Super Quality </span>Product</h1>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray' >Ensuaring Primimum confortable and style,our metirialy craffted footwear is designed to eleate your expericne providing you with unmatched quality,innvation,and touch of elegans <br /><br /> Our dedication yo details and excellence ensure your satisfication </p>
        <div className="mt-11 ">
        <Button label="View Detail"/>
        </div>
        
      </div>


   <div className="flex-1 flex justify-center items-center">
   <img src={shoe8} alt="supperquality shoe"
      width={570}
      height={422} 
      className="object-contain"/>

   </div>
      
    </section>
  )
}

export default SupperQuality