import React from 'react';

class Title extends React.Component {
    render() {
        const { title } = this.props;

        return(
            <div className="title">
                <h1 className="title__text">{ title }</h1>
            </div>
        );
    }
}

export default Title;