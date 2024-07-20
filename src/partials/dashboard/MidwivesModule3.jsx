import React, { useState } from 'react';

function LaborAndDeliveryModule() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What are the three stages of labor?",
      options: ["Dilation, Expulsion, Placental", "Contraction, Delivery, Recovery", "Active, Transition, Pushing", "Initial, Active, Final"],
      answer: "Dilation, Expulsion, Placental",
    },
    {
      question: "Which method can be used for pain management during labor?",
      options: ["Epidural anesthesia", "Breathing exercises", "Both of the above", "None of the above"],
      answer: "Both of the above",
    },
    {
      question: "What is the first action to take in the event of a postpartum hemorrhage?",
      options: ["Call for help", "Administer IV fluids", "Massage the uterus", "Check blood pressure"],
      answer: "Massage the uterus",
    },
  ];

  const handleQuizChange = (index, selectedOption) => {
    setQuizAnswers({ ...quizAnswers, [index]: selectedOption });
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const renderQuiz = () => {
    return questions.map((q, index) => (
      <div key={index} className="text-xs mb-4">
        <p className="text-slate-800 dark:text-slate-100 mb-2 text-xs">{q.question}</p>
        {q.options.map((option, i) => (
          <div key={i} className="text-xs">
            <input
              type="radio"
              id={`q${index}o${i}`}
              name={`question${index}`}
              value={option}
              onChange={() => handleQuizChange(index, option)}
              disabled={showResults}
              checked={quizAnswers[index] === option}
              className="text-xs"
            />
            <label htmlFor={`q${index}o${i}`} className="ml-2 text-slate-800 dark:text-slate-100 text-xs">
              {option}
            </label>
          </div>
        ))}
      </div>
    ));
  };

  const renderQuizResults = () => {
    return questions.map((q, index) => (
      <div key={index} className="text-xs mb-4">
        <p className="text-slate-800 dark:text-slate-100 mb-2 text-xs">{q.question}</p>
        <p className={`text-slate-800 dark:text-slate-100 text-xs ${quizAnswers[index] === q.answer ? 'text-green-500' : 'text-red-500'}`}>
          Your answer: {quizAnswers[index]} {quizAnswers[index] === q.answer ? '✓' : '✗'}
        </p>
        <p className="text-slate-800 dark:text-slate-100 text-xs">Correct answer: {q.answer}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5 text-xs">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Module 3: Labor and Delivery</h2>
      
      {/* Detailed Notes */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Detailed Notes</h3>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          This module covers the stages of labor and delivery, pain management techniques, and emergency interventions.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Stages of Labor:</strong> Labor is divided into three stages: dilation, expulsion, and placental. The first stage involves the dilation of the cervix, the second stage is the expulsion of the baby, and the third stage involves the delivery of the placenta.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Pain Management:</strong> Various pain management techniques can be used during labor, including epidural anesthesia, breathing exercises, and other non-pharmacological methods. It is important to discuss pain management options with the mother and respect her choices.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Emergency Interventions:</strong> Understanding and being prepared for emergencies such as postpartum hemorrhage is crucial. Immediate actions include massaging the uterus to control bleeding and calling for help. Other interventions might involve administering IV fluids and medications as per protocol.
        </p>
      </div>

      {/* Interactive Quiz */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Interactive Quiz</h3>
        {renderQuiz()}
        <button
          onClick={handleSubmitQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 text-xs"
          disabled={showResults}
        >
          Submit Quiz
        </button>
        {showResults && renderQuizResults()}
      </div>

      {/* Activities */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Activities</h3>
        <ul className="list-disc list-inside text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <li>Review video demonstrations of different stages of labor and delivery techniques.</li>
          <li>Participate in role-playing scenarios to practice emergency interventions for complications like postpartum hemorrhage.</li>
          <li>Discuss pain management options and their benefits and drawbacks in group sessions.</li>
        </ul>
      </div>
    </div>
  );
}

export default LaborAndDeliveryModule;
