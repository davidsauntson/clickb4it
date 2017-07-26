import { connect } from 'react-redux';
import Title  from '../components/Title';

import { generateTitle } from '../actions/titleActions';

const mapStateToProps = (state) => {
    return {
        number: state.number.text,
        adjective: state.adjective.text,
        thing: state.thing.text,
        subject: state.subject.text,
        ending: 'made'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGenerateTitle: () => {
            dispatch(generateTitle());
        }
    }
} 

const TitleContainer = connect(mapStateToProps, mapDispatchToProps)(Title);

export default TitleContainer;