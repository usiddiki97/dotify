import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signupUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);