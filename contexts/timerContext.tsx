import { createContext, useContext, useState,  } from "react";

interface TimerContextType {
    workTime: number;
    breakTime: number;
    rounds: number;
    preparationTime: number;
    switchTime: number;
    isRunning: boolean;
    setWorkTime: (workTime: number) => void;
    setBreakTime: (breakTime: number) => void;
    setRounds: (rounds: number) => void;
    setPreparationTime: (preparationTime: number) => void;
    setSwitchTime: (switchTime: number) => void;
    setIsRunning: (isRunning: boolean) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

//provider
export function TimerProvider({children}: {children: React.ReactNode}) {
    const [workTime, setWorkTime] = useState<number>(180);
    const [breakTime, setBreakTime] = useState<number>(60);
    const [rounds, setRounds] = useState<number>(8);
    const [preparationTime, setPreparationTime] = useState<number>(0);
    const [switchTime, setSwitchTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    return (
        <TimerContext.Provider value={{isRunning, setIsRunning, workTime, breakTime, rounds,preparationTime,switchTime, setWorkTime, setBreakTime, setRounds, setPreparationTime, setSwitchTime}}>
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