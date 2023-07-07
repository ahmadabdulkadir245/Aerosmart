import { BsBricks } from "react-icons/bs"
import { GiConcreteBag, GiOpeningShell, GiWoodBeam } from "react-icons/gi"
import { MdConstruction } from "react-icons/md"
import CategoryIcon from "./CategoryIcon"

const CategoryIcons = () => {
  return (
    <div className="pt-4 px-[10px] text-gray-500 flex items-center  w-full  text-sm tracking-wider">
        <CategoryIcon Icon={BsBricks} title={'bricks'}/>
        <CategoryIcon Icon={GiConcreteBag} title={'cement'}/>
        <CategoryIcon Icon={MdConstruction} title={'metal'}/>
        <CategoryIcon Icon={GiWoodBeam} title={'wood'}/>
        <CategoryIcon Icon={GiOpeningShell} title={'stones'}/>
    </div>
  )
}

export default CategoryIcons