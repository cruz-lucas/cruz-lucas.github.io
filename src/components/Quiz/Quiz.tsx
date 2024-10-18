// Quiz.tsx
import React, { useState, createContext, ReactNode } from 'react';

interface QuizContextProps {
  isSubmitted: boolean;
  userAnswers: { [key: string]: any };
  registerAnswer: (questionId: string, answer: any) => void;
}

export const QuizContext = createContext<QuizContextProps | undefined>(undefined);

interface QuizProps {
  children: ReactNode;
}

const Quiz: React.FC<QuizProps> = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: any }>({});

  const registerAnswer = (questionId: string, answer: any) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Inline CSS styles
  const containerStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '1em',
    marginBottom: '2em',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '1em',
  };

  return (
    <QuizContext.Provider value={{ isSubmitted, userAnswers, registerAnswer }}>
      <div style={containerStyle}>
        {children}
        <button onClick={handleSubmit} disabled={isSubmitted} style={buttonStyle}>
          Submit
        </button>
      </div>
    </QuizContext.Provider>
  );
};

export default Quiz;
