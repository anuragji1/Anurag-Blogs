import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Mern Stack?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these Blogs with Anurag JavaScript Projects Blogs
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="#" target='_blank' rel='noopener noreferrer'>
                Anurag JavaScript Projects
                </a>
            </Button>
        </div>
    </div>
  )
}