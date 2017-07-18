import React from 'react';

import { Layer } from './Layer';

export class Background extends React.Component {

    render() {
        const numberOfLayers = 3
        var layers = [];

        for (var layerIndex = 0; layerIndex < numberOfLayers; layerIndex++) {  
           layers.push(<Layer key={layerIndex} layerIndex={layerIndex} />);
        }

        return (
            <div className="layers">
                {layers}                
            </div>
        );
    };
};
