import React, { useState } from 'react';

function MaternalNutritionAndLifestyleModule() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Which vitamin is crucial for fetal development during pregnancy?",
      options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin B12"],
      answer: "Vitamin D",
    },
    {
      question: "What is the recommended daily intake of folic acid for pregnant women?",
      options: ["200 mcg", "400 mcg", "800 mcg", "1200 mcg"],
      answer: "800 mcg",
    },
    {
      question: "Which of the following is a good source of iron for pregnant women?",
      options: ["Citrus fruits", "Red meat", "Whole grains", "Dairy products"],
      answer: "Red meat",
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
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Module 6: Maternal Nutrition and Lifestyle</h2>
      
      {/* Detailed Notes */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Detailed Notes</h3>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          This module provides guidance on essential aspects of maternal nutrition and lifestyle during pregnancy to ensure the health and well-being of both mother and baby.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Nutrition:</strong> Proper nutrition is vital for the health of the pregnant woman and the development of the fetus. Key nutrients include folic acid, iron, calcium, and protein. A balanced diet with a variety of fruits, vegetables, lean proteins, and whole grains is recommended.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Folic Acid:</strong> The recommended daily intake of folic acid for pregnant women is 800 mcg. Folic acid helps prevent neural tube defects and supports fetal growth.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Iron:</strong> Iron is crucial for preventing anemia and supporting increased blood volume during pregnancy. Good sources of iron include red meat, poultry, fish, and iron-fortified cereals.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Lifestyle Choices:</strong> Pregnant women should also consider lifestyle factors such as avoiding smoking, limiting alcohol consumption, and engaging in regular physical activity, as these can significantly impact pregnancy outcomes.
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
          <li>Plan and analyze a sample meal plan for a pregnant woman, ensuring it meets nutritional requirements.</li>
          <li>Participate in discussions about common dietary concerns and how to address them with practical solutions.</li>
          <li>Review case studies on the impact of lifestyle choices on pregnancy and maternal health.</li>
        </ul>
      </div>
    </div>
  );
}

export default MaternalNutritionAndLifestyleModule;
