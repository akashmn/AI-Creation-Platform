import Searchbar from "../Components/Searchbar"
import Sidebar from "../Components/Sidebar"
import Topbar from "../Components/Topbar"



const Artificum = () => {
  return (
    <div className="flex flex-row gap-2">
        <Sidebar/>
        <div className="flex w-full flex-col">
          <Topbar />
          <Searchbar />
        </div>
    </div>
  )
}

export default Artificum