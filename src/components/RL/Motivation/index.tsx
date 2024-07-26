import React from "react";
import { Chrono } from "react-chrono";
import BrowserOnly from '@docusaurus/BrowserOnly';
import './timeline.css'

import atariGif from "@site/static/img/learning/rl/atariGif.webp";
import trpoGif from "@site/static/img/learning/rl/trpoGif.webp";
import alphagoGif from "@site/static/img/learning/rl/alphagoGif.webp";
import gaeGif from "@site/static/img/learning/rl/gaeGif.webp";
import brettGif from "@site/static/img/learning/rl/brettGif.webp";
import dotaGif from "@site/static/img/learning/rl/dotaGif.webp";
import deepMimicGIf from "@site/static/img/learning/rl/deepMimicGIf.webp";
import starcraftGif from "@site/static/img/learning/rl/starcraftGif.webp";
import rubikGif from "@site/static/img/learning/rl/rubikGif.webp";

const events = [
    {
        title: "2013",
        cardTitle: "Atari (DQN)",
        cardDetailedText: "DeepMind showed that neural net agents using DPRL could learn to play various Atari games. This breakthrough was significant as previous RL results were limited to small, simple problems. Suddenly, agents could process visual inputs and learn to play different games without specific programming for each.",
        url: "https://arxiv.org/abs/1312.5602",
        media: {
            type: "IMAGE",
            source: {
                url: atariGif,
            },
        }
    },
    {
        title: "2014",
        cardTitle: "2D Locomotion (TRPO)",
        cardDetailedText: "At Berkeley, researchers explored DPRL in robotics, particularly with simulated robots like the swimmer, hopper, and 2D walker. These robots learned their tasks—swimming, hopping, and running—through trial and error. Initially, they struggled, but over time, they improved significantly, mastering their skills through RL.",
        url: "https://arxiv.org/abs/1502.05477",
        media: {
            type: "IMAGE",
            source: {
                url: trpoGif
            },
        }
    },
    {
        title: "2015",
        cardTitle: "AlphaGo",
        cardDetailedText: "DeepMind's AlphaGo defeated Lee Sedol, the world champion in Go, an achievement many thought was years away, with RL at its core.",
        url: "https://www.nature.com/articles/nature16961",
        media: {
            type: "IMAGE",
            source: {
                url: alphagoGif
            },
        }
    },
    {
        title: "2016",
        cardTitle: "3D Locomotion (TRPO+GAE)",
        cardDetailedText: "Berkeley's researchers moved from 2D to full 3D robots learning to run. These robots improved through repeated trials, learning from their experiences.",
        url: "https://arxiv.org/abs/1506.02438",
        media: {
            type: "IMAGE",
            source: {
                url: gaeGif
            },
        }
    },
    {
        title: "2016",
        cardTitle: "Real Robot Manipulation (GPS)",
        cardDetailedText: "Transitioning from simulations to real robots, BRETT (Berkeley Robot for the Elimination of Tedious Tasks) learned tasks like inserting blocks into matching openings through RL. Additionally, by running the same algorithms on multiple robots, Google researchers discovered that robots could share data and learn faster, demonstrating the power of RL in physical robots.",
        url: "https://rll.berkeley.edu/gps/",
        media: {
            type: "IMAGE",
            source: {
                url: brettGif
            },
        }
    },
    {
        title: "2017",
        cardTitle: "Dota2 (PPO)",
        cardDetailedText: "OpenAI's bot succeeded in the complex game of Dota 2, beating top human players, showing that DPRL could handle much more complex video games beyond Atari.",
        url: "https://openai.com/index/dota-2/",
        media: {
            type: "IMAGE",
            source: {
                url: dotaGif
            },
        }
    },
    {
        title: "2018",
        cardTitle: "DeepMimic",
        cardDetailedText: "At Berkeley, researchers showed that simulated robots could learn a wide range of acrobatic skills through trial and error, even for non-human robots like a simulated lion.",
        url: "https://xbpeng.github.io/projects/DeepMimic/index.html",
        media: {
            type: "IMAGE",
            source: {
                url: deepMimicGIf
            },
        }
    },
    {
        title: "2019",
        cardTitle: "AlphaStar",
        cardDetailedText: "DeepMind's AlphaStar demonstrated near top human-level performance in Starcraft, combining imitation learning and RL.",
        url: "https://deepmind.google/discover/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/",
        media: {
            type: "IMAGE",
            source: {
                url: starcraftGif
            },
        }
    },
    {
        title: "2019",
        cardTitle: "Rubik's Cube (PPO+DR)",
        cardDetailedText: "Another highlight from OpenAI was a robot hand learning to solve a Rubik's Cube through RL, showcasing DPRL's practical applications and potential.",
        url: "https://openai.com/index/solving-rubiks-cube/",
        media: {
            type: "IMAGE",
            source: {
                url: rubikGif
            },
        }
    },
];


const TimelineComponent = () => {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
                <Chrono
                    items={events}
                    mode="VERTICAL_ALTERNATING"
                    highlightCardsOnHover="true"
                    disableToolbar="true"
                    mediaSettings={{ align: 'center', fit: 'cover' }}
                    fontSizes={{
                        title: "2rem",
                        cardText: "1.3rem",
                    }}
                    theme={{
                        primary: 'var(--timeline-color-primary)',
                        cardDetailsColor: 'var(--timeline-color-card-details)',
                        cardMediaBgColor: 'var(--timeline-color-media-bg)',
                        cardTitleColor: 'var(--timeline-color-card-title)',
                        secondary: 'var(--timeline-color-secondary)',
                        titleColor: 'var(--timeline-color-title)',
                        titleColorActive: 'var(--timeline-color-title-active)',
                        cardBgColor: 'var(--timeline-color-card-bg)'
                    }}
                />
            )}
        </BrowserOnly>
    );
};

export default TimelineComponent;

