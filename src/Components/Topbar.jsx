//import assests & icons

import avatar from '../assets/avatar.jpeg'
import share from '../assets/share-button.png'
import edit from '../assets/edit-button.png'


const Topbar = () => {
  return (
    <top className='w-full h-32 sm:h-40 bg-noble-black-800 rounded-xl'>
        <nav>
            {/* Top section */}
            <div className="top">
                <div className="details">
                    <p>Orbital Oddysey</p>
                    <p>Marketing Campaign for a new TV series Launch</p>
                </div>
                <div className="">
                    <div className="avatars">
                        <img src={avatar} alt='avatars'/>
                        <img src={avatar} alt='avatars'/>
                        <img src={avatar} alt='avatars'/>
                        <img src={avatar} alt='avatars'/>
                        <img src={avatar} alt='avatars'/>
                    </div>
                    <button className="share">
                        <img src={share} alt="share-button" />
                        <p>Share</p>
                    </button>
                    <button className="edit">
                        <img src={edit} alt="edit-button" />
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