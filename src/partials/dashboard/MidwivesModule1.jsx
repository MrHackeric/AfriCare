import React, { useState } from 'react';

function BasicMaternalHealthCareModule() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the recommended frequency of prenatal check-ups during the first 28 weeks of pregnancy?",
      options: ["Once a month", "Every two weeks", "Once a week", "Every day"],
      answer: "Once a month",
    },
    {
      question: "Which supplement is crucial during pregnancy to prevent neural tube defects?",
      options: ["Iron", "Calcium", "Folic Acid", "Vitamin D"],
      answer: "Folic Acid",
    },
    {
      question: "What is gestational diabetes?",
      options: ["A type of diabetes that occurs during pregnancy", "A form of anemia", "A type of high blood pressure during pregnancy", "None of the above"],
      answer: "A type of diabetes that occurs during pregnancy",
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
        <p className="text-slate-800 dark:text-slate-100 mb-2">{q.question}</p>
        {q.options.map((option, i) => (
          <div key={i}>
            <input
              type="radio"
              id={`q${index}o${i}`}
              name={`question${index}`}
              value={option}
              onChange={() => handleQuizChange(index, option)}
              disabled={showResults}
              checked={quizAnswers[index] === option}
            />
            <label htmlFor={`q${index}o${i}`} className="ml-2 text-slate-800 dark:text-slate-100">
              {option}
            </label>
          </div>
        ))}
      </div>
    ));
  };

  const renderQuizResults = () => {
    return questions.map((q, index) => (
      <div key={index} className="mb-4">
        <p className="text-xs text-slate-800 dark:text-slate-100 mb-2">{q.question}</p>
        <p className={`text-xs text-slate-800 red:text-slate-100 ${quizAnswers[index] === q.answer ? 'text-green-500' : 'text-red-500'}`}>
          Your answer: {quizAnswers[index]} {quizAnswers[index] === q.answer ? '✓' : '✗'}
        </p>
        <p className="text-xs text-slate-800 dark:text-slate-100">Correct answer: {q.answer}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">
      <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-2">Module 1: Basic Maternal Health Care</h2>
      
      {/* Detailed Notes */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-2">Detailed Notes</h3>
        <p className="text-xs text-slate-800 dark:text-slate-100 mb-4">
          This module covers the basics of maternal health care, focusing on prenatal care, nutrition, and common pregnancy complications.
        </p>
        <p className="text-xs text-slate-800 dark:text-slate-100 mb-4">
          <strong>Prenatal Care:</strong> Prenatal care is crucial for monitoring the health of both the mother and the baby. It includes regular check-ups, screenings, and tests to detect and manage potential complications. During the first 28 weeks of pregnancy, it is recommended to have a check-up once a month. From 28 to 36 weeks, every two weeks, and from 36 weeks to delivery, weekly visits are advised.
        </p>
        <p className="text-xs text-slate-800 dark:text-slate-100 mb-4">
          <strong>Nutrition:</strong> A balanced diet rich in vitamins and minerals is essential during pregnancy. Key supplements include folic acid to prevent neural tube defects, iron to prevent anemia, and calcium for the development of the baby’s bones.
        </p>
        <p className="text-xs text-slate-800 dark:text-slate-100 mb-4">
          <strong>Common Complications:</strong> Some common complications include gestational diabetes, pre-eclampsia, and anemia. Gestational diabetes is a type of diabetes that occurs during pregnancy and requires monitoring and management to prevent complications for both mother and baby.
        </p>
      </div>

      {/* Interactive Quiz */}
      <div className="mb-6">
        <h3 className="text-xs text-md font-semibold text-slate-800 dark:text-slate-100 mb-2">Interactive Quiz</h3>
        {renderQuiz()}
        <button
          onClick={handleSubmitQuiz}
          className="bg-blue-500 text-xs text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={showResults}
        >
          Submit Quiz
        </button>
        {showResults && renderQuizResults()}
      </div>
      

      {/* Activities */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-2">Activities</h3>
        <ul className="text-xs list-disc list-inside text-slate-800 dark:text-slate-100 mb-4">
          <li>Review case studies on prenatal care and discuss in group sessions.</li>
          <li>Participate in role-playing scenarios to practice patient interactions.</li>
          <li>Watch video demonstrations of prenatal check-up procedures.</li>
        </ul>
      </div>
    </div>
  );
}

export default BasicMaternalHealthCareModule;