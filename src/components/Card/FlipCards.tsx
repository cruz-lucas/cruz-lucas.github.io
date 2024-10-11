import React, { useEffect, useRef } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import './FlipCards.css';

const FlipCards: React.FC = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Calculate the maximum height of all cards
        const cardHeights = cardsRef.current.map((card) => card.offsetHeight);
        const maxHeight = Math.max(...cardHeights);

        // Set all cards to the maximum height
        cardsRef.current.forEach((card) => {
            card.style.height = `${maxHeight}px`;
        });
    }, []);

    return (
        <div className="flip-cards-container">
            <ReactFlipCard
                containerCss="flip-card"
                frontCss="card-front"
                backCss="card-back"
                frontComponent={<div ref={(el) => el && cardsRef.current.push(el)}>Aleatoric Uncertainty</div>}
                backComponent={
                    <div ref={(el) => el && cardsRef.current.push(el)}>
                        Aleatoric uncertainty is tied to the nature of the stochastic process, specifically the randomness or noise in the environment. This type of uncertainty is irreducible, meaning that no amount of additional data or model refinement can eliminate it, as it is intrinsic to the system being modeled.
                    </div>
                }
            />

            <ReactFlipCard
                containerCss="flip-card"
                frontCss="card-front"
                backCss="card-back"
                frontComponent={<div ref={(el) => el && cardsRef.current.push(el)}>Epistemic Uncertainty</div>}
                backComponent={
                    <div ref={(el) => el && cardsRef.current.push(el)}>
                        Epistemic uncertainty is tied to the lack of knowledge or uncertainty about the environment or model parameters. Unlike aleatoric uncertainty, it is reducible, meaning it can be decreased by gathering and training the model on additional data.
                    </div>
                }
            />

            <ReactFlipCard
                containerCss="flip-card"
                frontCss="card-front"
                backCss="card-back"
                frontComponent={<div ref={(el) => el && cardsRef.current.push(el)}>Model Inadequacy</div>}
                backComponent={
                    <div ref={(el) => el && cardsRef.current.push(el)}>
                        Model inadequacy refers to a model's limitations in accurately capturing the true dynamics or complexity of the environment. This uncertainty occurs when the model is structurally flawed, overly simplistic, or based on incorrect assumptions, leading to systematic prediction errors. Unlike epistemic uncertainty, model inadequacy cannot be fully resolved by acquiring more data; it requires fundamentally revising or improving the model's structure to better reflect the underlying system.
                    </div>
                }
            />
        </div>
    );
};

export default FlipCards;
