import { useState, useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse.tsx";
const EnrolledCoursesPage = () => {
  const [EnrolledCourses, setEnrolledCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const courses = [
        {
          name: "Course 1",
          author: "Author 1",
          purchaseDate: "2023-10-01",
          price: 50,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 2",
          author: "Author 2",
          purchaseDate: "2023-09-30",
          price: 75,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 3",
          author: "Author 3",
          purchaseDate: "2023-09-28",
          price: 60,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 4",
          author: "Author 4",
          purchaseDate: "2023-09-27",
          price: 90,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 5",
          author: "Author 5",
          purchaseDate: "2023-09-26",
          price: 55,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 6",
          author: "Author 6",
          purchaseDate: "2023-09-25",
          price: 70,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 7",
          author: "Author 7",
          purchaseDate: "2023-09-24",
          price: 65,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 8",
          author: "Author 8",
          purchaseDate: "2023-09-23",
          price: 80,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 9",
          author: "Author 9",
          purchaseDate: "2023-09-22",
          price: 45,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 10",
          author: "Author 10",
          purchaseDate: "2023-09-21",
          price: 85,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 11",
          author: "Author 11",
          purchaseDate: "2023-09-20",
          price: 75,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
        {
          name: "Course 12",
          author: "Author 12",
          purchaseDate: "2023-09-19",
          price: 70,
          courseImage: "https://i.imgur.com/EDCQyWu.png",
        },
      ];

      setEnrolledCourses(courses);
    }, 4000); // 4000 milliseconds = 4 seconds
  }, []);

  console.log("EnrolledCourses", EnrolledCourses);
  return (
    <div className="md:w-full border-t-2 border-black/20 md:border-none">
      <div className="py-4  space-y-2 text-center  border-b-2  border-black/20">
        <h3 className="font-bold text-neutral text-2xl tracking-tight">
          Enrolled Courses
        </h3>
        <p>Courses that you have been enrolled</p>
      </div>
      <div className=" h-4/5">
        {!EnrolledCourses ? (
          <span className="m-auto">Loading Your Courses....</span>
        ) : EnrolledCourses.length === 0 ? (
          <span>No Enrolled Courses</span>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
            {EnrolledCourses.map((item, index) => (
              <EnrolledCourse key={index} course={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrolledCoursesPage;
