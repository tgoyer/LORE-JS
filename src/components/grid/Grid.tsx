import * as React from 'react';
import * as _ from 'lodash';
import { calculateDistance, Coordinate } from '../../util/geometry';

import './grid.css';

import { Column, Row } from './';

interface Props {
    centerX: number;
    centerY: number;
    distance: number;
    columns: number;
    rows: number;
    setCenter: (id: string) => {};
}

const Grid: React.SFC<Props> = ({
    centerX,
    centerY,
    distance,
    columns,
    rows,
    setCenter
}) => {
    return (
        <div className="flex-grid">
            {_.times(columns, y => {
                return (
                    <Column key={y}>
                        {_.times(rows, x => {
                            return (
                                <Row
                                    key={x}
                                    id={x + ':' + y}
                                    isCenter={isCenter(centerX, centerY, x, y)}
                                    inRange={isWithinDistance(
                                        distance,
                                        centerX,
                                        centerY,
                                        x,
                                        y
                                    )}
                                    onClick={setCenter}
                                />
                            );
                        })}
                    </Column>
                );
            })}
        </div>
    );
};

export default Grid;

function isCenter(
    centerX: number,
    centerY: number,
    x: number,
    y: number
): boolean {
    return centerX === x && centerY === y;
}

function isWithinDistance(
    distance: number,
    centerX: number,
    centerY: number,
    x: number,
    y: number
): boolean {
    const center: Coordinate = { x: centerX, y: centerY },
        location: Coordinate = { x: x, y: y };
    return calculateDistance(center, location) <= distance;
}
