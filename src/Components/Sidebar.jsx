//images-icon import 
import groupIcon from '../assets/group-icon.jpg'
import dropdown from '../assets/dropdown.png'
import search from '../assets/search.png'
import searchBadge from '../assets/search-badge.png'
import billing from '../assets/billing.png'
import proj1 from '../assets/proj1.png'


const Sidebar = () => {
  return (
    <aside className='h-screen w-72 bg-noble-black-800 rounded-xl'>
        <nav className='h-full flex flex-col divide-y-0 divide-noble-black-700'>
             {/* Group details section */}
            <div className="flex flex-row items-center justify-between h-[96px] mx-4">
                <div className='flex flex-row gap-3'>
                    <img src={groupIcon} alt="group-icon" className='h-11 rounded-2xl' />
                    <div>
                        <p className='text-sm'>Intellisys</p>
                        <p className='text-xs text-stem-green-500'>12 members</p>
                    </div>
                 </div>
                <img src={dropdown} alt="dropdwon" className='h-2' />
            </div>

            {/* General section */}
            <div className='h-[180px]'>
                <div className='mx-4 my-4 flex flex-col gap-5'>
                    <p className='text-xs text-noble-black-400'>GENERAL</p>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex flex-row gap-5 items-center'>
                                <img src={search} alt="search" className='h-5'/>
                                <p className='text-sm'>Search</p>
                            </div>
                            <img src={searchBadge} alt="" className='h-9' />
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <img src={billing} alt="billing" className='h-5' />
                            <p className='text-sm'>Billing</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects section */}
        
            <div className="h-614px">
                <div className='mx-3 my-4 flex flex-col gap-4'>
                    <p className='text-xs text-noble-black-400'>PROJECTS</p>
                    <div className='flex flex-col gap-3'>
                        <button className='flex items-center h-9 w-60 bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00] rounded-xl'>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={proj1} alt="project" className='h-9 mt-4'/>
                                <p className='text-xs'>Orbital Oddysey</p>
                            </div>
                        </button>

                        <button className='flex items-center h-9 w-60 bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00] rounded-xl'>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={proj1} alt="project" className='h-9 mt-4'/>
                                <p className='text-xs'>Orbital Oddysey</p>
                            </div>
                        </button>

                        <button className='flex items-center h-9 w-60 bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00] rounded-xl'>
                            <div className='flex flex-row items-center gap-2'>
                                <img src={proj1} alt="project" className='h-9 mt-4'/>
                                <p className='text-xs'>Orbital Oddysey</p>
                            </div>
                        </button>
                        
                        <div className="add-project">
                            <img src="" alt="project" />
                            <p>add new project</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            {/* user section */}

            <div className="user">
                <div>
                    <img src="" alt="user" />
                    <div>
                        <p>John Doe</p>
                        <p>Premium</p>
                    </div>
                </div>
                <div className="settings">
                    <img src="" alt="settings" />
                </div>
            </div>
        </nav>

    </aside>
  )
}

export default Sidebar