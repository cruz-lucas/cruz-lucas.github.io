// OpenEndedQuestion.tsx
import React, { useContext, useState } from 'react';
import { QuizContext } from './Quiz';

interface OpenEndedQuestionProps {
  questionId: string;
  questionText: string;
  correctAnswer: number;
  tolerance?: number;
  solution: string;
}

const OpenEndedQuestion: React.FC<OpenEndedQuestionProps> = ({
  questionId,
  questionText,
  correctAnswer,
  tolerance = 0,
  solution,
}) => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error('OpenEndedQuestion must be used within a Quiz');
  }

  const { isSubmitted, userAnswers, registerAnswer } = quizContext;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    registerAnswer(questionId, e.target.value);
  };

  const userAnswer = userAnswers[questionId];
  const isCorrect =
    isSubmitted &&
    Math.abs(parseFloat(userAnswer) - correctAnswer) <= tolerance;

  // Inline CSS styles
  const questionStyle: React.CSSProperties = {
    marginBottom: '1em',
  };

  const feedbackStyle: React.CSSProperties = {
    marginTop: '0.5em',
    fontStyle: 'italic',
    color: isCorrect ? 'green' : 'red',
  };

  return (
    <div style={questionStyle}>
      <p>{questionText}</p>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        disabled={isSubmitted}
      />
      {isSubmitted && (
        <div style={feedbackStyle}>
          {isCorrect
            ? 'Correct!'
            : `Incorrect. The correct answer is ${correctAnswer}.`}
          <div>
            <strong>Solution:</strong> {solution}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenEndedQuestion;
