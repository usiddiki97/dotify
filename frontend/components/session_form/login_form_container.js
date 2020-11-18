import { connect } from 'react-redux';
import { loginSession } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(loginSession(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);