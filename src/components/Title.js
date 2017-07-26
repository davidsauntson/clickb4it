import React from 'react';

class Title extends React.Component {
    componentWillMount() {
        const { onGenerateTitle } = this.props;
        onGenerateTitle();
    }

    render() {
        const { number, adjective, thing, subject, ending } = this.props;
        
        return(
            <div className="title">
                <h1 className="title__text">{ number } { adjective } { thing } { subject } { ending }</h1>
            </div>
        );
    }
}

export default Title;