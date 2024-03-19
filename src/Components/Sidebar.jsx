//images import 
import groupIcon from '../assets/group-icon.jpg'
import dropdown from '../assets/dropdown.png'

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
            <div className='h-[194px]'>
                <div className='mx-4 my-4 flex flex-col gap-4'>
                    <p className='text-xs text-noble-black-400'>GENERAL</p>
                    <div>
                        <div>
                            <img src="" alt="search" />
                            <p>Search</p>
                        </div>
                        <div>
                            <img src="" alt="billing" />
                            <p>Billing</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects section */}
        
            <div className="projects">

                <p>Projects</p>
                <div>
                    <div>
                        <img src="" alt="project" />
                        <p>Orbital Oddysey</p>
                    </div>
                    <div>
                        <img src="" alt="project" />
                        <p>Digital Product Launch</p>
                    </div>
                    <div>
                        <img src="" alt="project" />
                        <p>Brand Refresh</p>
                    </div>
                    <div>
                        <img src="" alt="project" />
                        <p>Social Media Strategy</p>
                    </div>
                </div>
                <div className="add-project">
                    <img src="" alt="project" />
                    <p>Orbital Oddysey</p>
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