import React from 'react';

import { Shape } from './Shape';

export class Layer extends React.Component {

    render() {
        const {layerIndex } = this.props;
        const numberOfShapes = 100;
        var shapes = [];

        for (var shapeIndex = 0; shapeIndex < numberOfShapes; shapeIndex++) {
            shapes.push(<Shape key={shapeIndex} shapeIndex={shapeIndex} layerIndex={layerIndex} />);
        };
        
        const styles = {
            filter: 'blur(' + layerIndex + 'px)'
        }

        return (
            <div className="layers__layer" style={styles}>
                {shapes}                
            </div>
        );
    };
};
