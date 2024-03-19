//images import 
import groupIcon from '../assets/group-icon.jpg'
import dropdown from '../assets/dropdown.png'

const Sidebar = () => {
  return (
    <aside className='h-screen w-64 bg-noble-black-800 flex-10 flex-col p-3 rounded-xl'>

        {/* Group details section */}

       <div className="flex flex-row items-center justify-between">
            <div className='flex flex-row gap-3'>
                <img src={groupIcon} alt="group-icon" className='h-11 rounded-2xl' />
                <div>
                    <p className='text-[15px]'>Intellisys</p>
                    <p className='text-xs text-stem-green-500'>12 members</p>
                </div>
            </div>
            <img src={dropdown} alt="dropdwon" className='h-2' />
       </div>

         {/* General section */}
       <div className='general'>
            <p>GENERAL</p>
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

    </aside>
  )
}

export default Sidebar