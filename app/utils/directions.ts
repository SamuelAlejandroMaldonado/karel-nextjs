export type Direction = 'N' | 'E' | 'S' | 'W';

export function turnLeft(dir: Direction): Direction {
    const dirs: Direction[] = ['N','W','S','E'];
    return dirs[(dirs.indexOf(dir) + 1) % 4];
}

export function turnRight(dir: Direction): Direction {
    const dirs: Direction[] = ['N','E','S','W'];
    return dirs[(dirs.indexOf(dir) + 1) % 4];
}
