import Component from './InfoPage';
import { connect } from 'react-redux';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    currentPage: selectors.getCurrentPage(state),
});


export default connect(mapStateToProps)(Component);
