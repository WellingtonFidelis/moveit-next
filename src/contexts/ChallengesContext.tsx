import { createContext, useState, ReactNode } from 'react';

export const ChallengeContext = createContext({});

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider ({ children }:ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
            }}
        >
            {children}
        </ChallengeContext.Provider>
           )
}
