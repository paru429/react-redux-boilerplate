import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        text: state.someReducer.someText
    }
}

export default connect(mapStateToProps, null);