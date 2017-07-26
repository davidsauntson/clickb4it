import { connect } from 'react-redux';
import Title  from '../components/Title';

import { generateTitle } from '../actions/titleActions';

const mapStateToProps = (state) => {
    return {
        number: state.number.text,
        adjective: state.adjective.text,
        thing: 'things',
        subject: 'I',
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