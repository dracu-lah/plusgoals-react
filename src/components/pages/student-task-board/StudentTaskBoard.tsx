import { EllipsisHorizontalCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const StudentTaskBoard = () => {
  const RadialBackGroundColor = (progress: number) => {
    if (progress <= 30) return "bg-red-500 border-red-500 ";
    else if (progress <= 50) return "bg-yellow-500 border-yellow-500";
    else return "bg-green-500 border-green-500";
  }

  const OverViewItems = [{
    tasks: 4,
    progress: 14,
    status: "open"
  }, {
    tasks: 10,
    progress: 35,
    status: "In Progress"
  }, {
    tasks: 14,
    progress: 51,
    status: "Closed"
  }]
  const Tasks = [
    {
      task_image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      task_description: "Add Layout Options",
      completion_day: "Tomorrow"
    },
    {
      task_image: "",
      task_description: "Add Layout Options",
      completion_day: "Tomorrow"
    },

  ]

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden my-20">
      <div className=" flex justify-center md:justify-start md:ml-44  items-center w-full ">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold">Tasks</h1>
          <div className="text-sm breadcrumbs text-black/40">
            <ul>
              <li><a>Home</a></li>
              <li>Productivity</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <div >
        <div>
          {/* Overview Tasks start */}
          <div className="flex my-2">
            <h1>Overview</h1>

          </div>

          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">

            {OverViewItems.map((item, key) => (
              <div key={key} className="bg-white rounded-lg border shadow-md flex  justify-between items-center p-4 w-96  select-none ">
                <div className="flex justify-center items-center gap-x-2">
                  <div className={`text-sm radial-progress  text-primary-content border-4 ${RadialBackGroundColor(item.progress)}`} style={{ "--value": item.progress, "--size": "3rem", "--thickness": "4px" }}>{item.progress}%</div>
                  <h3>{item.status}</h3>
                </div>
                <span>{item.tasks}</span>
              </div>
            ))}
          </div>

          {/* Overview Tasks end */}
        </div>
        {/*  Tasks start */}
        <div className="flex my-2">
          <h1>Tasks</h1>

        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">

          {Tasks.map((item, key) => (
            <div key={key} className="bg-white rounded-lg border shadow-md flex flex-col  justify-between items-center p-4 w-96 ">

              {item.task_image && <img className="h-12 w-full rounded-lg object-cover" src={item.task_image} />}
              <div className="flex justify-between items-center w-full mt-4">
                <h3 className="text-sm text-black/60">{item.task_description}</h3>
                <EllipsisHorizontalCircleIcon className="h-6 w-6 text-black/40 cursor-pointer hover:text-black/80 duration-300" />
              </div>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="text-xs text-black/40">{item.completion_day}</p>
                <PlusCircleIcon className="h-6 w-6 text-black/40 cursor-pointer hover:text-black/80 duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/*  Tasks end */}
      </div>
    </div>
  )
}






export default StudentTaskBoard
