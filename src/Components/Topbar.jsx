//import assests & icons

import avatar from '../assets/avatar.jpeg'
import share from '../assets/share-button.png'
import edit from '../assets/edit-button.png'


const Topbar = () => {
  return (
    <top className='w-full h-32 sm:h-40 bg-noble-black-800 rounded-xl'>
        <nav>
            {/* Top section */}
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <p className='text-sm font-semibold'>Orbital Oddysey</p>
                    <p className='text-xs text-noble-black-300'>Marketing Campaign for a new TV series Launch</p>
                </div>
                <div className="flex flex-row items-center">
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
                    <button className="flex flex-row">
                        <img src={share} alt="share-button" className='h-7 w-10'/>
                        <p className='max-sm:hidden'>Share</p>
                    </button>
                    <button className="edit">
                        <img src={edit} alt="edit-button" className='h-10 w-14'/>
                    </button>
                </div>
            </div>

            {/* Bottom section */}
            <div>

            </div>
        </nav>
    </top>
  )
}

export default Topbar