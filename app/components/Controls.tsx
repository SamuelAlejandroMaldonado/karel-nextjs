type ControlsProps = {
    move: () => void;
    turnLeft: () => void;
    placeBeeper: () => void;
};

export default function Controls({ move, turnLeft, placeBeeper }: ControlsProps) {
    return (
        <div className="mt-4 flex gap-2">
            <button onClick={move} className="bg-blue-500 text-white px-3 py-1 rounded">Move</button>
            <button onClick={turnLeft} className="bg-green-500 text-white px-3 py-1 rounded">Turn Left</button>
            <button onClick={placeBeeper} className="bg-yellow-500 text-white px-3 py-1 rounded">Put Beeper</button>
        </div>
    );
}
