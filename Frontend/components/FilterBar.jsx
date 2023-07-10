import { RxHamburgerMenu } from "react-icons/rx"

function FilterBar() {
  return (
    <>
    <div className="col-span-3 bg-white w-full rounded-sm p-2 flex justify-between items-center text-xs">
      <div className="flex space-x-5 items-center capitalize">
      <RxHamburgerMenu className="w-6 h-6 cursor-pointer"/>
      <select name="" id="" className="outline-none border-2 border-gray-300 p-2 capitalize font-semibold rounded-md cursor-pointer">
        <option value="">defualt sorting</option>
        <option value="">popularity</option>
        <option value="">orders</option>
        <option value="">highest price</option>
        <option value="">lowest price</option>
      </select>
      </div>

      <div className="flex bg-gray-300 text-gray-800 p-2 rounded-md">
        showing 1-12 of (32) results
      </div>
    </div>
</>

  )
}

export default FilterBar