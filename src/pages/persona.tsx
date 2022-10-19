import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { browsePersonas, shufflePersonas } from "../app/reducer";
import ViewPager from "../components/viewpager/viewpager";

const Persona: NextPage = () => {
  const personas = useSelector(browsePersonas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shufflePersonas())
  }, [])

  return (
    <div className="flex items-center h-full justify-center">
      {personas ? <ViewPager personas={personas} /> : null}
    </div>
  )
}

export default Persona
