import type { NextPage } from "next";
import ViewPager from "../components/viewpager/viewpager";

const Persona: NextPage = () => {
  return(
    <div className="flex items-center h-full justify-center">
      <ViewPager />
    </div>
  )
}

export default Persona