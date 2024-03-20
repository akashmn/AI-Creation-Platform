//import assests & icons

import avatar from '../assets/avatar.jpeg'
import share from '../assets/share-button.png'
import edit from '../assets/edit-button.png'

// import artificumInactive from '../assets/artificum-inactive.png'
import artificumActive from '../assets/artificium-active.png'
import chatInactive from '../assets/chat-inactive.png'
// import chatActive from '../assets/chat-active.png'
import libraryInactive from '../assets/library-inactive.png'
// import libraryActive from '../assets/library-active.png'


const Topbar = () => {
  return (
    <top className='w-full h-32 sm:h-40 bg-noble-black-800 rounded-xl'>
        <nav  className='sm:h-full divide-y-2 divide-noble-black-700'>
            {/* Top section */}
            <div className="flex flex-row justify-between items-center sm:h-3/5 sm:mx-5">
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
                    <div className='flex flex-row items-center gap-7 mx-1'>
                        <button className="flex flex-row items-center -ml-3 gap-3">
                            <img src={share} alt="share-button" className='h-7 sm:h-5'/>
                            <p className='max-sm:hidden text-xs text-noble-black-400'>Share</p>
                        </button>
                        <button className="">
                            <img src={edit} alt="edit-button" className='h-9'/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className=' flex flex-row gap-3 sm:gap-8 items-center mt-3 sm:mt-5'>
                <button className='flex flex-row items-center justify-center'>
                    <img src={artificumActive} alt="" className='h-12 sm:h-10'/>
                    <p className='max-sm:hidden text-xs mb-4'>Artificium</p>
                </button>
                <button className='flex flex-row items-center justify-center'>
                    <img src={chatInactive} alt="" className='h-12 sm:h-10'/>
                    <p className='max-sm:hidden text-xs mb-4 text-noble-black-300'>Chat</p>
                </button>
                <button className='flex flex-row items-center justify-center'>
                    <img src={libraryInactive} alt="" className='h-12 sm:h-10'/>
                    <p className='max-sm:hidden text-xs mb-4 text-noble-black-300'>Library</p>
                </button>
            </div>
        </nav>
    </top>
  )
}

export default Topbar