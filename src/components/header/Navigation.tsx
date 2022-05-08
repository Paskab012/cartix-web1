import React from 'react'
import { HiChevronDown } from "react-icons/hi";

function Navigation() {
  return (
    <div className="flex justify-between m-10 bg-purple-800 navigation">
    <div className="flex justify-around bg-red-600 logo_Container">
      <div className="logo_img">CARTIX</div>
      <div className="flex logo_buttons mr-3rem ">
        <button className="flex px-4 py-2 font-semibold bg-red-400 border border-blue-500 rounded border-solid-1px-black logo_btn_one hover:text-white hover:border-transparent">Year:All<HiChevronDown/></button>
        <button className="flex px-4 py-2 font-semibold border border-blue-500 rounded logo_btn_one hover:text-white hover:border-transparent">Province:All<HiChevronDown/></button>
        <button className="flex px-4 py-2 font-semibold border border-blue-500 rounded logo_btn_one hover:text-white hover:border-transparent">District:All<HiChevronDown/></button>
        <button className="flex px-4 py-2 font-semibold border border-blue-500 rounded logo_btn_one hover:text-white hover:border-transparent">Saving Groups:All<HiChevronDown/></button>
      </div>
    </div>
    <div className="bg-purple-200 sign-in-btn">
      <button className="px-4 py-2 font-semibold border border-blue-500 rounded btn_sign_in hover:text-white hover:border-transparent">SignIn</button>
    </div>
    </div>
  )
}

export default Navigation