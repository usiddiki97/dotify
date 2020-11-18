import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: user => dispatch(signupUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);