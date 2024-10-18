// MultipleChoiceQuestion.tsx
import React, { useContext } from 'react';
import { QuizContext } from './Quiz';

interface MultipleChoiceQuestionProps {
  questionId: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  solution: string;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  questionId,
  questionText,
  options,
  correctOptionIndex,
  solution,
}) => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error('MultipleChoiceQuestion must be used within a Quiz');
  }

  const { isSubmitted, userAnswers, registerAnswer } = quizContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerAnswer(questionId, parseInt(e.target.value, 10));
  };

  const userAnswer = userAnswers[questionId];

  // Inline CSS styles
  const questionStyle: React.CSSProperties = {
    marginBottom: '1em',
  };

  const optionCorrectStyle: React.CSSProperties = {
    backgroundColor: 'lightgreen',
  };

  const optionIncorrectStyle: React.CSSProperties = {
    backgroundColor: 'salmon',
  };

  const optionDefaultStyle: React.CSSProperties = {};

  const solutionStyle: React.CSSProperties = {
    marginTop: '0.5em',
    fontStyle: 'italic',
  };

  return (
    <div style={questionStyle}>
      <p>{questionText}</p>
      {options.map((option, index) => {
        let optionStyle = optionDefaultStyle;
        if (isSubmitted) {
          if (index === correctOptionIndex) {
            optionStyle = optionCorrectStyle;
          } else if (userAnswer === index) {
            optionStyle = optionIncorrectStyle;
          }
        }

        return (
          <div key={index} style={optionStyle}>
            <label>
              <input
                type="radio"
                name={`question-${questionId}`}
                value={index}
                onChange={handleChange}
                disabled={isSubmitted}
              />
              {option}
            </label>
          </div>
        );
      })}
      {isSubmitted && (
        <div style={solutionStyle}>
          {userAnswer === correctOptionIndex ? 'Correct!' : 'Incorrect.'}
          <div>
            <strong>Solution:</strong> {solution}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
