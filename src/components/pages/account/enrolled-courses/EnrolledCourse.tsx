import react from "react";

const Enrolledcourse = ({ course }) => {
  return (
    <div className="rounded- border overflow-hidden border-black/20">
      <img
        classname="h-28  w-full object-cover "
        src={course.courseImage}
        alt="course_image"
      />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{course.name}</h3>
        <p className="text-sm text-black/60">{course.author}</p>
        <div className=" flex justify-between items-center">
          <p className="text-sm text-black/40 ">{course.purchaseDate}</p>
          <p className="text-sm font-semibold text-black/40">
            {course.price}&nbsp;Rs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enrolledcourse;
