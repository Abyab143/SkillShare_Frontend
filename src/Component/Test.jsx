import React, { useState } from 'react';

function TestPage() {
  const questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the boiling point of water?",
    "What is the largest planet in our solar system?",
    "Who painted the Mona Lisa?",
    "What is the smallest prime number?",
    "What is the speed of light?",
    "Who discovered penicillin?",
    "What is the chemical symbol for gold?"
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted answers:', answers);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Test Page</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold',color:'black' }}>{question}</label>
            <input
              type="text"
              value={answers[index]}
              onChange={(event) => handleChange(index, event)}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
        ))}
        <button type="submit" style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>Submit</button>
      </form>
    </div>
  );
}

export default TestPage;
