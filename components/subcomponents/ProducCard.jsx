import Image from 'next/image'
import ButtonCart from './ButtonCart'
export default function ProducCard({id, title, price, description, category, image, rating}){

    return(
        <>
            <div className=' flex justify-between bg-slate-30 transition-all rounded-md p-10' id={id}>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl' >{title}</h2>
                    <p>{description}</p>
                    <div className='flex flex-col gap-4'>
                        <span>{price}€</span>

                        <div className='flex gap-4'>
                            <span>{rating.rate} / 5</span>
                            <span>{rating.count} Reseñas</span>
                        </div>
                        <ButtonCart text={"Add Cart"}></ButtonCart>

                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='p-4 rounded bg-slate-400'>{category}</p>
                    <img className='rounded' src={image} alt={title} width={300} height={300} ></img>
                </div>
            </div>
        </>
    )

}