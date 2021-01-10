import Component from './HomePage'
import { connect } from 'react-redux';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    currentPage: selectors.getCurrentMoovieList(state),
});

export default connect(mapStateToProps)(Component);
