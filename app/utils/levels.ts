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
    }
        /*Nivel 2: Llena la fila superior

        Nombre: “Llena la fila superior”
        Objetivo: Coloca un beeper en cada celda de la fila superior del tablero (la fila con y = 0).

        Enunciado para los estudiantes:

        Karel comienza en la esquina inferior izquierda mirando hacia el norte.
        Tu misión es programar a Karel para que coloque un beeper en cada casilla de la fila superior del tablero.

         Pistas:

        Usa move() para avanzar una celda.

        Usa turnLeft() para cambiar de dirección.

        Usa placeBeeper() para dejar un beeper.

        Piensa cómo recorrer el tablero para no dejar espacios vacíos.

         El nivel se completará cuando todas las celdas de la fila superior tengan un beeper.*/
];
