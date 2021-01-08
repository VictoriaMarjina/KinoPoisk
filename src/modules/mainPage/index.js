import Component from './MainPage';
import * as selectors from './selectors';
import { connect } from 'react-redux';
import * as actions from  './actions';

const mapStateToProps = state => ({
    mooviesList: selectors.getContent(state),
});

const mapDispatchToProps = dispatch => ({
    getInfo: payload => dispatch(actions.saveContent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
