import { Direction } from '../utils/directions';

type CellProps = {
    hasRobot?: boolean;
    robotDir?: Direction;
    hasBeeper?: boolean;
};

export default function Cell({ hasRobot, robotDir, hasBeeper }: CellProps) {
    const renderRobot = () => {
        if (!hasRobot || !robotDir) return null;
        const arrows: Record<Direction, string> = {
            N: '↑',
            S: '↓',
            E: '→',
            W: '←'
        };
        return <span className="text-xl">{arrows[robotDir]}</span>;
    };

    return (
        <div className="w-12 h-12 border flex items-center justify-center">
            {renderRobot()}
            {hasBeeper && <span className="text-red-500 ml-1">⚫</span>}
        </div>
    );
}
