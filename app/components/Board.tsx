import Cell from './Cell';
import { Direction } from '../utils/directions';

type BoardProps = {
    board: { beeper: boolean }[][];
    robot: { x: number; y: number; dir: Direction };
};

export default function Board({ board, robot }: BoardProps) {
    return (
        <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${board[0].length}, 48px)` }}
        >
            {board.map((row, i) =>
                row.map((cell, j) => (
                    <Cell
                        key={`${i}-${j}`}
                        hasRobot={robot.x === j && robot.y === i}
                        robotDir={robot.x === j && robot.y === i ? robot.dir : undefined}
                        hasBeeper={cell.beeper}
                    />
                ))
            )}
        </div>
    );
}
