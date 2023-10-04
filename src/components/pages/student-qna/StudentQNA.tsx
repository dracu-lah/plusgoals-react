import { useState } from "react";

const StudentQNA = () => {
  const [answers, setAnswers] = useState(Array(4).fill(null)); // Initialize answers as an array of null

  const handleAnswerClick = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };
  console.log('answers', answers)
  const handleSubmit = () => {
    console.log("Answers:", answers);
  };
  const questionsWithAnswers = [
    {
      question: "What is your Primary purpose for visiting Block Advisors?",
      answers: [
        "To get tax advice",
        "To file my taxes",
        "To inquire about tax planning services",
        "To discuss business taxes",
        "None of these",
      ],
    },
    {
      question: "What is your Primary purpose for visiting Block dsafsafd?",
      answers: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "None of these",
      ],
    },
    {
      question: "What is your Primary purpose for visiting Block dsafasdfasfd?",
      answers: [
        "Option A",
        "Option B",
        "Option C",
        "Option D",
        "None of these",
      ],
    },
    {
      question:
        "What is your Primary purpose for visiting Block dsafsaasdfa adf ?",
      answers: [
        "Answer X",
        "Answer Y",
        "Answer Z",
        "Answer W",
        "None of these",
      ],
    },
  ];

  return (
    <div className="flex justify-center md:justify-start  min-h-screen mt-20 md:mt-14 ">
      <div className="w-1/2 bg-black hidden lg:block">
        <img
          draggable="false"
          src="https://plus.unsplash.com/premium_photo-1683141121220-62308eb987ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1203&q=80"
          alt="Image"
          className="select-none w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-6 ">
        <div className="space-y-4 text-center md:text-justify">
          <h3 className="text-3xl md:text-4xl text-primary">Questions And Answers</h3>
          <div>
            {questionsWithAnswers.map((item, index) => (
              <div className="space-y-4" key={index}>
                <h3 className=" mt-10 font-semibold">
                  Qn {index + 1}. {item.question}
                </h3>
                <div className="flex flex-col gap-y-4">
                  {item.answers.map((answer, ansIndex) => (
                    <div
                      key={ansIndex}
                      className={`flex items-center cursor-pointer p-4 border border-black/20 rounded duration-300 hover:bg-slate-200 ${answers[index] === answer ? "bg-primary/40" : ""}`}
                      onClick={() => handleAnswerClick(index, answer)}
                    >
                      {/* <div className="w-6 h-6 border  rounded-full mr-2"></div> */}
                      <label htmlFor={`q${index}ans${ansIndex}`}>
                        {answer}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit} className="btn btn-primary  ">
            Submit All Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentQNA;
