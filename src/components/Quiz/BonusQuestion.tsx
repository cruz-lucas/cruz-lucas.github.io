// BonusQuestion.tsx
import React, { useContext } from 'react';
import { QuizContext } from './Quiz';

interface BonusQuestionProps {
  questionText: string;
  solution: string;
}

const BonusQuestion: React.FC<BonusQuestionProps> = ({
  questionText,
  solution,
}) => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error('BonusQuestion must be used within a Quiz');
  }

  const { isSubmitted } = quizContext;

  // Inline CSS styles
  const questionStyle: React.CSSProperties = {
    marginBottom: '1em',
  };

  const solutionStyle: React.CSSProperties = {
    marginTop: '0.5em',
  };

  return (
    <div style={questionStyle}>
      <p>
        <strong>Bonus Question:</strong> {questionText}
      </p>
      {isSubmitted && (
        <div style={solutionStyle}>
          <strong>Solution:</strong> {solution}
        </div>
      )}
    </div>
  );
};

export default BonusQuestion;
