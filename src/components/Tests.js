// src/components/Tests.js
import React, { useState } from 'react';

const sampleQuestions = [
  "How often do you feel overwhelmed by daily tasks?",
  "How often do you have trouble sleeping due to stress?",
  "How frequently do you experience physical symptoms like headaches or stomach issues due to stress?"
];

export const Tests = () => {
  const [responses, setResponses] = useState(Array(sampleQuestions.length).fill(1));

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Stress Questionnaire</h1>
      <form>
        {sampleQuestions.map((question, index) => (
          <div key={index} className="mb-4">
            <p className="font-bold">{question}</p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map(value => (
                <label key={value} className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={value}
                    checked={responses[index] === value}
                    onChange={() => handleChange(index, value)}
                    className="mr-2"
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
    </main>
  );
};

export default Tests;
