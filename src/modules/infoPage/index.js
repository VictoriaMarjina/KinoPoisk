import Component from './InfoPage';
import * as selectors from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentPage: selectors.getCurrentPage(state),
});


export default connect(mapStateToProps)(Component);
