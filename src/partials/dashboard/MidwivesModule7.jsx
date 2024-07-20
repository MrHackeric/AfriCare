import React, { useState } from 'react';

function PrenatalAndPostnatalMentalHealthModule() {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is a common symptom of prenatal depression?",
      options: ["Increased energy levels", "Excessive appetite", "Persistent sadness", "Insomnia"],
      answer: "Persistent sadness",
    },
    {
      question: "Which of the following is an effective treatment for postnatal depression?",
      options: ["Increased physical activity", "Isolation from social activities", "Antidepressant medications", "Avoiding therapy sessions"],
      answer: "Antidepressant medications",
    },
    {
      question: "What is a key factor in supporting a mother with postnatal mental health issues?",
      options: ["Frequent medical check-ups", "Social support from family and friends", "Strict dietary restrictions", "Limiting physical exercise"],
      answer: "Social support from family and friends",
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
      <div key={index} className="mb-4">
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
        <p className="text-slate-800 dark:text-slate-100 mb-2">{q.question}</p>
        <p className={`text-slate-800 dark:text-slate-100 ${quizAnswers[index] === q.answer ? 'text-green-500' : 'text-red-500'}`}>
          Your answer: {quizAnswers[index]} {quizAnswers[index] === q.answer ? '✓' : '✗'}
        </p>
        <p className="text-slate-800 dark:text-slate-100">Correct answer: {q.answer}</p>
      </div>
    ));
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Module 7: Prenatal and Postnatal Mental Health</h2>
      
      {/* Detailed Notes */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-2">Detailed Notes</h3>
        <p className="text-slate-800 dark:text-slate-100 mb-4">
          This module covers important aspects of mental health during and after pregnancy, focusing on the identification, treatment, and support for mental health issues.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4">
          <strong>Prenatal Depression:</strong> Symptoms include persistent sadness, anxiety, and changes in sleep and appetite. Early identification and intervention are crucial.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4">
          <strong>Postnatal Depression:</strong> This can occur after childbirth and includes symptoms such as prolonged sadness, fatigue, and difficulty bonding with the baby. Treatment may involve counseling, support groups, and antidepressant medications.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4">
          <strong>Supporting Mothers:</strong> Social support from family and friends is vital. Encourage mothers to seek professional help and provide resources for mental health services.
        </p>
        <p className="text-slate-800 dark:text-slate-100 mb-4">
          <strong>Resources:</strong> Utilize mental health resources and hotlines for immediate support. Regular follow-ups and mental health screenings can aid in early detection and management.
        </p>
      </div>

      {/* Interactive Quiz */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-2">Interactive Quiz</h3>
        {renderQuiz()}
        <button
          onClick={handleSubmitQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={showResults}
        >
          Submit Quiz
        </button>
        {showResults && renderQuizResults()}
      </div>

      {/* Activities */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-2">Activities</h3>
        <ul className="list-disc list-inside text-slate-800 dark:text-slate-100 mb-4">
          <li>Participate in role-playing scenarios to practice identifying and supporting mothers with mental health issues.</li>
          <li>Review case studies of prenatal and postnatal depression and discuss effective intervention strategies.</li>
          <li>Develop a resource list for mental health support, including contact information for local services and hotlines.</li>
        </ul>
      </div>
    </div>
  );
}

export default PrenatalAndPostnatalMentalHealthModule;
