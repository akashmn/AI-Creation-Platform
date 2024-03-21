import attach from '../assets/attachment-icon.png'
import mic from '../assets/microphone.png'
import submit from '../assets/submit-button.png'


const Searchbar = () => {
  return (
    <div className="w-[275px] sm:w-[1435px] h-12 sm:h-16 bg-noble-black-800 rounded-xl bottom-0 fixed mb-1 flex flex-row items-center justify-between p-2">
        <button>
            <img src={mic} alt="microphone" className='h-7'/>
        </button>
        <div className="search-area">
            {/* search area here */}
        </div>
        <button>
            <img src={attach} alt="attachment-pin" className='h-7'/>
        </button>
        <button>
            <img src={submit} alt="submit-button" className='h-8' />
        </button>
    </div>
  )
}

export default Searchbar