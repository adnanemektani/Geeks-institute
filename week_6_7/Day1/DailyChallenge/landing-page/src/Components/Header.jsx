import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <div className="flex items-center gap-2 mx-auto">
        <FontAwesomeIcon icon={faRocket}  className="text-orange-500 text-2xl" />
        <h1 className="text-xl font-bold"> Company</h1>
        </div>
        <div className="flex gap-6">
        <a href="http://" className="text-gary-600 hover: text-black">Home</a> 
        <a href="http://" className="text-gary-600 hover: text-black">Features</a>
        <a href="http://" className="text-gary-600 hover: text-black">Contact</a> 
        </div>   
    </nav>
  )
}

export default Header  