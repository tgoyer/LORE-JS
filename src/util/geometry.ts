export interface Coordinate {
    x: number;
    y: number;
}

export function calculateDistance(c1: Coordinate, c2: Coordinate): number {
    return Math.abs(c1.x - c2.x) + Math.abs(c1.y - c2.y);
}
