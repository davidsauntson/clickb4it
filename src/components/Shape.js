import React from 'react';

export class Shape extends React.Component {
    render() {
        const { shapeIndex } = this.props;

        const style = {
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            position: 'absolute'
        };

        const rando = Math.round(Math.random() * 50) + 1;

        return (
            <div className={'shape--' + rando} key={shapeIndex} style={style}></div>
        )
    }
}