"use client";
import { useState } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import { turnLeft, Direction } from "./utils/directions";
import { levels } from "./utils/levels";

const DELAY = 500;

export default function Home() {

   // const [robot, setRobot] = useState({ x: 0, y: 4, dir: "E" as Direction });


 /*   const [board, setBoard] = useState(
        Array.from({ length: ROWS }, () =>
            Array.from({ length: COLS }, () => ({ beeper: false }))
        )
    );*/
    const [levelIndex, setLevelIndex] = useState(0);
    const level = levels[levelIndex];

    const [robot, setRobot] = useState(level.robot);
    const [board, setBoard] = useState(
        Array.from({ length: level.rows }, (_, y) =>
            Array.from({ length: level.cols }, (_, x) => ({
                beeper: level.beepers.some(b => b.x === x && b.y === y),
            }))
        )
    );

    //  Desafío del taller:
    // Completa las funciones move, turn y putBeeper
    // para que el robot logre cumplir los objetivos de cada nivel.

    const [program, setProgram] = useState("");


    const move = () => {
        setRobot(prev => {
            // TODO: mover el robot una celda en la dirección actual (N, S, E, W)

            return prev;
        });
    };



    const turn = () => {
        // TODO: girar el robot 90° hacia la izquierda

    };


    const putBeeper = () => {
        setBoard(prevBoard => {
            const newBoard = prevBoard.map(row => row.map(cell => ({ ...cell })));
            setRobot(prevRobot => {
                // TODO: colocar un beeper en la posición actual del robot

                return prevRobot;
            });
            return newBoard;
        });
    };



    const commands: Record<string, () => void> = {
        move,
        turnLeft: turn,
        placeBeeper: putBeeper,
    };


    const runProgram = async () => {
        const lines = program
            .split("\n")
            .map(line => line.trim().replace("()", ""))
            .filter(Boolean);

        let levelCompleted = false;

        for (const cmd of lines) {
            if (!commands[cmd]) {
                alert(`Comando inválido: ${cmd}`);
                break;
            }


            await new Promise<void>(resolve => {
                commands[cmd]!();
                setTimeout(resolve, DELAY);
            });


            setBoard(prevBoard => {
                console.log(levelCompleted);
                console.log(prevBoard);
                // TODO: si el objetivo del nivel se cumple, muestra un alert

                return prevBoard;
            });

            if (levelCompleted) break;
        }
    };





    return (
        <div className="p-4">
            <div className="mb-4">
                <label className="mr-2 font-semibold">Selecciona Nivel:</label>
                <select
                    value={levelIndex}
                    onChange={e => {
                        const index = parseInt(e.target.value, 10);
                        setLevelIndex(index);
                        const lvl = levels[index];
                        setRobot(lvl.robot);
                        setBoard(
                            Array.from({ length: lvl.rows }, (_, y) =>
                                Array.from({ length: lvl.cols }, (_, x) => ({
                                    beeper: lvl.beepers.some(b => b.x === x && b.y === y),
                                }))
                            )
                        );
                        setProgram("");
                    }}
                    className="border p-1 rounded"
                >
                    {levels.map((lvl, idx) => (
                        <option key={lvl.id} value={idx}>
                            {lvl.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3 p-3 border rounded">
                <strong>🎯 Objetivo:</strong> {level.goal.description}
            </div>

            <Board board={board} robot={robot} />

            <div className="mt-4">
        <textarea
            rows={6}
            className="w-full border p-2"
            placeholder={`Ejemplo:\nmove()\nturnLeft()\nplaceBeeper()`}
            value={program}
            onChange={e => setProgram(e.target.value)}
        />
                <button
                    onClick={runProgram}
                    className="mt-2 bg-purple-500 text-white px-4 py-2 rounded"
                >
                    Ejecutar Programa
                </button>

                <button
                    onClick={() => {
                        const lvl = levels[levelIndex];
                        setRobot(lvl.robot);
                        setBoard(
                            Array.from({ length: lvl.rows }, (_, y) =>
                                Array.from({ length: lvl.cols }, (_, x) => ({
                                    beeper: lvl.beepers.some(b => b.x === x && b.y === y),
                                }))
                            )
                        );
                        setProgram("");
                    }}
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                    Reiniciar Nivel
                </button>
            </div>

            <Controls move={move} turnLeft={turn} placeBeeper={putBeeper} />
        </div>
    );
}
