import { Avatar } from "./BlogCard"

export const Topbar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="font-bold text-xl">Medium</div>
      <div><Avatar author="abc"/></div>
    </div>
  )
}
