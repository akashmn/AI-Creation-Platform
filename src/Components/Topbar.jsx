//import assests & icons

import avatar from '../assets/avatar.jpeg'
import share from '../assets/share-button.png'
import edit from '../assets/edit-button.png'


const Topbar = () => {
  return (
    <top className='w-full h-32 sm:h-40 bg-noble-black-800 rounded-xl'>
        <nav  className='sm:h-full divide-y-2 divide-noble-black-700'>
            {/* Top section */}
            <div className="flex flex-row justify-between items-center sm:h-3/5 sm:mx-4">
                <div className="flex flex-col w-3/5">
                    <p className='text-sm font-semibold'>Orbital Oddysey</p>
                    <p className='text-xs text-noble-black-300'>Marketing Campaign for a new TV series Launch</p>
                </div>
                <div className="flex flex-row items-center sm:gap-16">
                    <div className="flex flex-row max-sm:hidden">
                        <div  className='flex'>
                            <img src={avatar} alt="user" className='h-8 rounded-xl z-0'/>
                            <div className='h-5 w-5 rounded-full bg-stem-green-500 border-6 border-noble-black-700 -ml-4 -mt-2 z-10'></div>
                        </div>
                        <div  className='flex'>
                            <img src={avatar} alt="user" className='h-8 rounded-xl z-0'/>
                            <div className='h-5 w-5 rounded-full bg-stem-green-500 border-6 border-noble-black-700 -ml-4 -mt-2 z-10'></div>
                        </div>
                        <div  className='flex'>
                            <img src={avatar} alt="user" className='h-8 rounded-xl z-0'/>
                            <div className='h-5 w-5 rounded-full bg-stem-green-500 border-6 border-noble-black-700 -ml-4 -mt-2 z-10'></div>
                        </div>
                    </div>
                    <div  className='flex flex-row items-center gap-5 mx-1'>
                        <button className="flex flex-row -ml-3">
                            <img src={share} alt="share-button" className='h-7'/>
                            <p className='max-sm:hidden'>Share</p>
                        </button>
                        <button className="">
                            <img src={edit} alt="edit-button" className='h-9'/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className='sm:h-2/5'>

            </div>
        </nav>
    </top>
  )
}

export default Topbar