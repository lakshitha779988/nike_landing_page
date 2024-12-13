import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../component/Button"


function SpecialOffer() {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container">

      <div className="flex-1">
        <img src={offer} alt="offerimg"
        width={773}
        height={687}
        className="object-contain" />
      </div>

      <div className=" flex-1 flex justify-start items-start flex-col gap-5">
        <h1 className='text-4xl font-palanquin font-bold'>Super <span className='text-coral-red'> Quality </span>Product</h1>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray' >Ensuaring Primimum confortable and style,our metirialy craffted footwear is designed to eleate your expericne providing you with unmatched quality,innvation,and touch of elegans <br /><br /> Our dedication yo details and excellence ensure your satisfication </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" iconUrl={arrowRight}/>
        <Button label="View more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        
      </div>

    </section>
  )
}

export default SpecialOffer