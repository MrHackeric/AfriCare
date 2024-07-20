import React, { useState } from 'react';

function PostpartumCareModule() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is a common physical change postpartum women may experience?",
      options: ["Increased hair growth", "Swelling of the legs", "Vision improvement", "Decreased appetite"],
      answer: "Swelling of the legs",
    },
    {
      question: "What is the recommended frequency of postpartum follow-up visits?",
      options: ["Once a week", "Once a month", "Within 6 weeks", "Once every 3 months"],
      answer: "Within 6 weeks",
    },
    {
      question: "Which of the following is a common postpartum mental health concern?",
      options: ["Postpartum depression", "Seasonal affective disorder", "Chronic fatigue syndrome", "Bipolar disorder"],
      answer: "Postpartum depression",
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
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Module 4: Postpartum Care</h2>
      
      {/* Detailed Notes */}
      <div className="mb-6">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2 text-xs">Detailed Notes</h3>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          This module covers the essential aspects of postpartum care, including physical and emotional changes, follow-up care, and support for new mothers.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Physical Changes:</strong> Postpartum women may experience various physical changes, such as swelling of the legs, vaginal bleeding (lochia), and changes in breast size and tenderness. Monitoring these changes and providing appropriate care is crucial.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Follow-Up Care:</strong> A postpartum follow-up visit is typically recommended within 6 weeks of delivery. This visit should include an assessment of physical recovery, mental health, and breastfeeding support. Ensure that mothers are aware of the signs that require immediate medical attention.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Postpartum Mental Health:</strong> Postpartum depression is a common mental health concern affecting many new mothers. Symptoms may include persistent sadness, anxiety, and fatigue. Providing emotional support, counseling, and referrals to mental health professionals is essential for effective care.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4 text-xs">
          <strong>Support and Education:</strong> Educate new mothers about self-care practices, signs of complications, and when to seek help. Encourage support from family and community resources to ensure a healthy transition into parenthood.
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
          <li>Review case studies on postpartum care and discuss management strategies in group sessions.</li>
          <li>Participate in role-playing scenarios to practice providing emotional support and addressing postpartum complications.</li>
          <li>Watch video demonstrations on common postpartum physical and emotional changes and how to manage them.</li>
        </ul>
      </div>
    </div>
  );
}

export default PostpartumCareModule;
