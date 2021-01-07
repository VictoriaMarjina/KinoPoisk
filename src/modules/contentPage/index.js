import Component from './ContentPage';
import * as selectors from './selectors';
import * as actions from  './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentPage: selectors.getCurrentPage(state),
    mooviesList: selectors.getContent(state),
});

const mapDispatchToProps = dispatch => ({
    getInfo: payload => dispatch(actions.saveContent(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
