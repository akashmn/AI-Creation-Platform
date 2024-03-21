import { useContext } from 'react'
import attach from '../assets/attachment-icon.png'
import mic from '../assets/microphone.png'
import submit from '../assets/submit-button.png'
import { Context } from '../Context/Context'
// import demo from '../assets/demo-image.jpeg'
// import { useRef, useState } from 'react'

const Searchbar = () => {

    const { onSent, recentPrompts, showResult, loading, resultData, setInput, input } = useContext(Context)

    // const [image_url, setImageUrl] = useState('/')

    // let inputRef = useRef(null)

    // const imageGenerator = async () => {
    //     if(inputRef.current.value === ''){
    //         alert('Please enter a valid search query')
    //         return 0
    //     }
    //     const response = await fetch (
    //         "https://api.openai.com/v1/images/generations",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": "Bearer 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",
    //                 "User-Agent": "Chrome",
    //             },
    //             body:JSON.stringify({
    //                 "prompt": `${inputRef.current.value}`,
    //                 n : 1,
    //                 size: "256x256"
    //             }),
    //         }
    //     )
    //     let data = await response.json()
    //     let data_array = data.data;
    //     setImageUrl(data_array[1].url)
    // }

  return (
    <div>
        {/* generated image here */}
        {/* <div className="flex flex-col mt-16 sm:mt-24 items-center justify-center">
            <img src={image_url === "/" ? demo : image_url} alt="" className='h-52 w-56 sm:h-72 sm:w-80'/>
        </div> */}
        <div className="w-[275px] sm:w-[1433px] h-12 sm:h-16 bg-noble-black-800 rounded-xl bottom-0 fixed mb-1 flex flex-row items-center justify-between p-2 sm:px-5">
            <button>
            <img src={mic} alt="microphone" className='h-5'/>
            </button>
            <div className="search-area">
                {/* search area here */}
                <input type="text" placeholder='You can ask me anything! I am here to help.' className='w-[157px] sm:w-[1200px] bg-transparent placeholder:text-xs text-xs placeholder:text-noble-black-500'/>
            </div>
            <button>
                <img src={attach} alt="attachment-pin" className='h-5'/>
            </button>
            <button>
                <img src={submit} alt="submit-button" className='h-8' />
            </button>
     </div>
    </div>
  )
}

export default Searchbar