import React from 'react';

class Title extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnGenerateTitle = this.handleOnGenerateTitle.bind(this);
    }


    componentWillMount() {
        const { onGenerateTitle } = this.props;
        onGenerateTitle();
    }

    handleOnGenerateTitle() {
        const { onGenerateTitle } = this.props;
        onGenerateTitle();
    }

    render() {
        const { number, adjective, thing, subject, ending } = this.props;
        
        return(
            <div className="title">
                <h1 className="title__text">{ number } { adjective } { thing } { subject } { ending }</h1>
                <div className="button__container">
                    <button className="button" onClick={this.handleOnGenerateTitle}>moar clickb4it!</button>
                </div>
            </div>
        );
    }
}

export default Title;