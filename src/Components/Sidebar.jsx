//images-icon import 
import groupIcon from '../assets/group-icon.jpg'
import dropdown from '../assets/dropdown.png'
import search from '../assets/search.png'
import searchBadge from '../assets/search-badge.png'
import billing from '../assets/billing.png'
import proj1 from '../assets/proj1.png'
import addButton from '../assets/add-button.png'
import avatar from '../assets/avatar.jpeg'
import settingIcon from '../assets/settings.png'
import { useState } from 'react'





const Sidebar = () => {

    const [expanded, setExpanded] = useState(false)

  return (
    <aside className={`h-screen bg-noble-black-800 rounded-xl ${expanded ? 'w-72' : 'w-14'}`}>
        <nav className='h-full flex flex-col divide-y-0 divide-noble-black-700'>

             {/* Group details section */}
            <div className={`flex flex-row items-center justify-between h-[96px] ${expanded ? 'm-4' : 'my-4'}`}>
                <div className='flex flex-row gap-3'>
                    <button className=''
                    onClick={() => setExpanded((curr) => !curr)}>
                    <img src={groupIcon} alt="group-icon" className={`h-11 rounded-2xl ${expanded ? '' : 'h-11 w-12'}`} />
                    </button>
                    <div className={`flex flex-col justify-center ${expanded ? 'text' : 'overflow-hidden hidden'}`}>
                        <p className='text-sm'>Intellisys</p>
                        <p className='text-xs text-stem-green-500'>12 members</p>
                    </div>
                </div>
                <img src={dropdown} alt="dropdwon" className={`h-2 ${expanded ? '' : 'hidden'}`} />
            </div>

            {/* General section */}
            <div className='h-[180px]'>
                <div className={`flex flex-col gap-5 ${expanded ? 'mx-4' : 'my-5 mx-1'}`}>
                    <p className={`text-xs text-noble-black-400 ${expanded ? '' : 'hidden'}`}>GENERAL</p>
                    <div className={`flex flex-col gap-5 ${expanded ? 'mx-4' : 'gap-5 my-10'}`}>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row gap-5 items-center'>
                                <img src={search} alt="search" className={`h-5 ${expanded ? '' : ''}`}/>
                                <p className={`text-sm ${expanded ? '' : 'hidden'}`}>Search</p>
                            </div>
                            <img src={searchBadge} alt="" className={`h-9 ${expanded ? '' : 'hidden'}`} />
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <img src={billing} alt="billing" className='h-5' />
                            <p className={`text-sm ${expanded ? '' : 'hidden'}`}>Billing</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects section */}
        
            <div className="h-614px">
                <div className={`my-4 flex flex-col gap-4 ${expanded ? 'mx-3' : ''}`}>
                    <p className={`text-xs text-noble-black-400 ${expanded ? '' : 'hidden'}`}>PROJECTS</p>
                    <div className={`flex flex-col gap-3 ${expanded ? '' : 'mt-9'}`}>
                        <button className={`flex items-center h-9 bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00] rounded-xl ${expanded ? 'w-60' : 'w-10'}`}>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={proj1} alt="project" className='h-9 mt-4'/>
                                <p className={`text-sm ${expanded ? '' : 'hidden'}`}>Orbital Oddysey</p>
                            </div>
                        </button>

                       

                        <div className="flex flex-row items-center gap-4 mx-2 mt-4">
                            <img src={addButton} alt="add-button" className='h-5'/>
                            <p className={`text-xs text-noble-black-400 ${expanded ? '' : 'hidden'}`}>add new project</p>
                        </div>

                    </div> 
                </div> 
            </div>

            {/* user section */}

            <div className={`mt-40 sm:mt-52 border-none flex flex-row items-center justify-center ${expanded ? 'mx-4 justify-between gap-20' : ''}`}>
                <div className='flex flex-row items-center gap-3'>
                    <div  className='flex'>
                        <img src={avatar} alt="user" className='h-8 rounded-xl z-0'/>
                        <div className='h-5 w-5 rounded-full bg-stem-green-500 border-6 border-noble-black-700 -ml-4 -mt-2 z-10'></div>
                    </div>
                    <div className={`flex flex-col items-center justify-center ${expanded ? '' : 'hidden'}`}>
                        <p className='text-sm'>John Doe</p>
                        <p className='text-xs text-stem-green-500'>Premium</p>
                    </div>
                </div>
                <div className="settings">
                    <img src={settingIcon} alt="settings"  className={`h-5 ${expanded ? '' : 'hidden'}`}/>
                </div>
            </div>

        </nav>
    </aside>
  )
}

export default Sidebar