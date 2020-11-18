import { connect } from 'react-redux';
import { logoutSession } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logoutSession: () => dispatch(logoutSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);