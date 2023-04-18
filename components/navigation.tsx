import { IoStatsChartOutline } from "react-icons/io5";

export default function Navigation(){
  return       <header className="flex items-center justify-between">
  {/* User Information */}
  <div className="flex items-center gap-2">
    <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/59895040?v=4" alt="Profile image" />
    </div>
    <small>Hi, Can Tomris</small>
  </div>

  {/* Right buttons */}
  <nav className="flex items-center gap-2">
    <div><IoStatsChartOutline className="text-2xl"/></div>
    <div><button className="btn btn-blue">Log out</button></div>
  </nav>

</header>
}