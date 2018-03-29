import * as React from 'react';

import { Grid } from './components/grid';

import './App.css';

interface State {
    distance: number;
    centerX: number;
    centerY: number;
    columns: number;
    rows: number;
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            distance: 1,
            centerX: 1,
            centerY: 1,
            columns: 10,
            rows: 10
        };
    }

    setValue = (ev: React.FormEvent<HTMLInputElement>) => {
        const value = ev.currentTarget.value,
            name = ev.currentTarget.name,
            state = { ...this.state };

        state[name] = Number(value);

        this.setState(state);
    };

    setCenter = (id: string) => {
        const coords = id.split(':'),
            state = { ...this.state };

        state.centerX = Number(coords[0]);
        state.centerY = Number(coords[1]);

        this.setState(state);
    };

    render() {
        const { distance, centerX, centerY, columns, rows } = this.state;
        return (
            <React.Fragment>
                <div style={{ width: '1000px', margin: '0 auto' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            marginRight: '10px'
                        }}>
                        Columns ({columns}):
                    </span>
                    <input
                        type="range"
                        value={columns}
                        onChange={this.setValue}
                        name="columns"
                        min="0"
                        max="25"
                    />
                    <span
                        style={{
                            marginLeft: '25px',
                            marginRight: '10px',
                            display: 'inline-block'
                        }}>
                        Rows ({rows}):
                    </span>
                    <input
                        type="range"
                        value={rows}
                        onChange={this.setValue}
                        name="rows"
                        min="0"
                        max="40"
                    />
                    <span
                        style={{
                            marginLeft: '25px',
                            marginRight: '10px',
                            display: 'inline-block'
                        }}>
                        Distance ({distance}):
                    </span>
                    <input
                        type="range"
                        value={distance}
                        onChange={this.setValue}
                        name="distance"
                        min="0"
                        max="30"
                    />
                </div>

                <br />
                <br />
                <br />
                <div className="grid-container">
                    <Grid
                        columns={columns}
                        rows={rows}
                        centerX={centerX}
                        centerY={centerY}
                        distance={distance}
                        setCenter={this.setCenter}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
