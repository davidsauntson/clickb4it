import { connect } from 'react-redux';
import Title  from '../components/Title';

const mapStateToProps = () => {
    return {
        title: '101 dumb things that I made'
    }
}

const TitleContainer = connect(mapStateToProps)(Title);

export default TitleContainer;