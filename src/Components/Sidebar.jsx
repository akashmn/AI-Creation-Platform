import groupIcon from '../assets/group-icon.jpg'
const Sidebar = () => {
  return (
    <aside className='h-screen w-56 bg-off-black'>

        {/* Group details section */}

       <div className="groupname">
            <img src={groupIcon} alt="group-icon" />
            <div>
                <p>Intellisys</p>
                <p>12 member</p>
            </div>
       </div>

         {/* General section */}
       <div className='general'>
            <p>General</p>
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