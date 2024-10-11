// Bandit.tsx
import React, { useState } from 'react';
import './Bandit.css';

function getReward(lever) {
    switch (lever) {
        case 1:
            return Math.floor(Math.random() * 3) + 1;
        case 2:
            return Math.floor(Math.random() * 9) + 1;
        case 3:
            return Math.floor(Math.random() * 5) + 1;
        default:
            return 0;
    }
}

const Bandit = ({ method, showEstimatedValues = true }) => {
    const [rewards, setRewards] = useState([0, 0, 0]);
    const [totalRewards, setTotalRewards] = useState([0, 0, 0]);
    const [totalRewardSum, setTotalRewardSum] = useState(0);
    const [pulls, setPulls] = useState([0, 0, 0]);
    const [estimatedValues, setEstimatedValues] = useState([0, 0, 0]);
    const [lastReward, setLastReward] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [reelNumbers, setReelNumbers] = useState([]);
    const [translateY, setTranslateY] = useState(0);

    const pullLever = (lever) => {
        setButtonsDisabled(true);
        setIsSpinning(false);
        setTranslateY(0);

        setTimeout(() => {
            setIsSpinning(true);
            const spinCount = 20;
            const spinDuration = 2000;
            const reward = getReward(lever);

            const randomNumbers = Array.from({ length: spinCount - 1 }, () =>
                Math.floor(Math.random() * 10)
            );
            randomNumbers.push(reward);
            setReelNumbers(randomNumbers);

            const reelHeight = 100;
            const totalReelHeight = randomNumbers.length * reelHeight;
            const translateYValue = - (totalReelHeight - reelHeight);
            setTranslateY(translateYValue);

            setTimeout(() => {
                const newRewards = [...rewards];
                newRewards[lever - 1] = reward;

                const newTotalRewards = [...totalRewards];
                newTotalRewards[lever - 1] += reward;

                const newPulls = [...pulls];
                newPulls[lever - 1] += 1;

                // Calculate estimated values
                if (showEstimatedValues) {
                    const newEstimatedValues = [...estimatedValues];

                    if (method === 'sampleAverage') {
                        // Sample Average Method
                        newEstimatedValues[lever - 1] = newTotalRewards[lever - 1] / newPulls[lever - 1];
                    } else if (method === 'incremental') {
                        // Incremental Method with constant alpha
                        const alpha = 0.1; // Adjust the step size as needed
                        newEstimatedValues[lever - 1] = estimatedValues[lever - 1] + alpha * (reward - estimatedValues[lever - 1]);
                    }

                    setEstimatedValues(newEstimatedValues);
                }

                setRewards(newRewards);
                setTotalRewards(newTotalRewards);
                setPulls(newPulls);
                setLastReward(reward);
                setTotalRewardSum(totalRewardSum + reward);

                setIsSpinning(false);
                setButtonsDisabled(false);
            }, spinDuration);
        }, 50);
    };

    const reset = () => {
        setRewards([0, 0, 0]);
        setTotalRewards([0, 0, 0]);
        setTotalRewardSum(0);
        setPulls([0, 0, 0]);
        setEstimatedValues([0, 0, 0]); // Reset estimated values
        setLastReward(0);
        setReelNumbers([]);
        setTranslateY(0);
        setIsSpinning(false);
        setButtonsDisabled(false);
    };

    return (
        <div className="bandit-container">
            <h2>
                3-Armed Bandit{method === 'sampleAverage' ? ' (Sample Average)' : method === 'incremental' ? ' (Incremental)' : ''}
            </h2>
            <div className="reward-display">
                <div
                    className="reel"
                    style={{
                        transform: `translateY(${translateY}px)`,
                        transition: isSpinning
                            ? 'transform 2s cubic-bezier(0.75, 0.02, 0.13, 1)'
                            : 'none',
                    }}
                >
                    {reelNumbers.map((number, index) => (
                        <div key={index} className="reel-number">
                            {number}
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-group">
                {['Lever 1', 'Lever 2', 'Lever 3'].map((label, index) => (
                    <div key={index} className="lever-section">
                        <button
                            className="lever-button"
                            onClick={() => pullLever(index + 1)}
                            disabled={buttonsDisabled}
                        >
                            {label}
                        </button>
                        {showEstimatedValues && (
                            <div className="estimated-value">
                                Estimated Value: {estimatedValues[index].toFixed(2)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="total-reward">
                <h3>Total Reward: {totalRewardSum}</h3>
            </div>
            <button className="reset-button" onClick={reset} disabled={buttonsDisabled}>
                Reset
            </button>
        </div>
    );
};

export default Bandit;
