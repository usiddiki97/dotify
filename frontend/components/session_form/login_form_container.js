import { connect } from 'react-redux';
import { loginSession } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginSession: user => dispatch(loginSession(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);