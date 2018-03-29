import * as React from 'react';

interface Props {
    id: string;
    isCenter: boolean;
    inRange: boolean;
    onClick: (id: string) => {};
}

const Row: React.SFC<Props> = ({
    id,
    isCenter,
    inRange,
    onClick,
    children
}) => {
    const style = `row ${isCenter ? 'center' : inRange ? 'active' : ''}`;

    return <div className={style} onClick={() => onClick(id)} />;
};

export default Row;
