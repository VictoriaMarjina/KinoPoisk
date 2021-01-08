import Component from './ContentPage';
import * as selectors from './selectors';
import * as actions from  './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    mooviesList: selectors.getContent(state),
});

const mapDispatchToProps = dispatch => ({
    closeCard: payload => dispatch(actions.closeCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
