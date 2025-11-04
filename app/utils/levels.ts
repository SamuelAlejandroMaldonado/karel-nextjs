import { Direction } from "./directions";

export type LevelGoal = {
    description: string;
    checkGoal: (
        robot: { x: number; y: number; dir: Direction },
        board: { beeper: boolean }[][]
    ) => boolean;
};

export type Level = {
    id: number;
    name: string;
    rows: number;
    cols: number;
    robot: { x: number; y: number; dir: Direction };
    beepers: { x: number; y: number }[];
    goal: LevelGoal;
};


export const levels: Level[] = [
    {
        id: 1,
        name: "Coloca un beeper al final",
        rows: 5,
        cols: 5,
        robot: { x: 0, y: 4, dir: "E" },
        beepers: [],
        goal: {
            description: "Coloca un beeper en la esquina superior derecha (4,0).",
            checkGoal: (robot, board) => board[0][4].beeper === true,
        },
    },
    {
        id: 2,
        name: "Llena la fila superior",
        rows: 5,
        cols: 5,
        robot: { x: 0, y: 4, dir: "N" },
        beepers: [],
        goal: {
            description:
                "Coloca un beeper en cada celda de la fila superior (y = 0).",
            checkGoal: (_, board) =>
                board[0].every(cell => cell.beeper === true),
        },
    }
];
