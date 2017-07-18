import React from 'react';

export class Shape extends React.Component {
    render() {
        const { shapeIndex, layerIndex } = this.props;

        const style = {
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
            position: 'absolute',
            width: 10,
            height: 10,
        }

        const spinner = Math.round(Math.random() * 4);

        return (
            <div className={'shape--' + spinner} key={shapeIndex} style={style}></div>
        )
    }
}