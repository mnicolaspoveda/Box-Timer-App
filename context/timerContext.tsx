import { createContext, useContext, useState,  } from "react";

interface TimerContextType {
    workTime: number;
    breakTime: number;
    rounds: number;
    setWorkTime: (workTime: number) => void;
    setBreakTime: (breakTime: number) => void;
    setRounds: (rounds: number) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

//provider
export function TimerProvider({children}: {children: React.ReactNode}) {
    const [workTime, setWorkTime] = useState<number>(180);
    const [breakTime, setBreakTime] = useState<number>(60);
    const [rounds, setRounds] = useState<number>(8);

    return (
        <TimerContext.Provider value={{workTime, breakTime, rounds, setWorkTime, setBreakTime, setRounds}}>
            {children}
        </TimerContext.Provider>
    );
}

//hook

export function useTimer() {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimer must be used within a TimerProvider');
    }
    return context;
}