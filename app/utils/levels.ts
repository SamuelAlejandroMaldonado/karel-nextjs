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
        name: "Recoge los beepers",
        rows: 5,
        cols: 5,
        robot: { x: 2, y: 4, dir: "N" },
        beepers: [
            { x: 1, y: 1 },
            { x: 3, y: 0 },
        ],
        goal: {
            description: "Todos los beepers deben desaparecer del tablero.",
            checkGoal: (_, board) =>
                board.every(row => row.every(cell => !cell.beeper)),
        },
    },
];
