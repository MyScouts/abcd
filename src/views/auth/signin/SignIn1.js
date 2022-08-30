import React, { useContext, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../../components/Widgets/Globals/TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { postLogin } from '../../../store/auth/actions';
import { useDispatch, useSelector } from "react-redux";
import ButtonLoading from '../../../components/Widgets/Globals/ButtonLoading';
import { AlertContext, AlertType } from '../../../contexts/AlertContext';
import { PRIVATE_ROUTE } from '../../../route.constant';
import { useToasts } from 'react-toast-notifications';


const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();


const Signin1 = () => {
  // 
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // 
  const dispatch = useDispatch();
  const { setAlert } = useContext(AlertContext);
  const { user, isLoading, error } = useSelector((state) => state.AuthReducer);
  const history = useHistory();
  const { addToast } = useToasts()

  useEffect(() => {
    if (!isLoading && (error.message || user)) {
      if (user) {
        addToast("Login is successfully!", { appearance: 'success' });
        history.push(PRIVATE_ROUTE.DASHBOARD);

      } else {
        addToast(error.message, { appearance: 'error' });
        // setAlert(AlertType.ERROR, error.message);
      }
    }

  }, [isLoading, error])
  // 
  const onSubmit = data => {
    dispatch(postLogin(data.username, data.password));

  };
  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>

                <TextInput label={'Username'} {...register('username')} error={errors.username?.message} />

                <TextInput label={'Password'}  {...register('password')} error={errors.password?.message} />


                <Row>
                  <Col mt={2}>
                    <ButtonLoading
                      isLoading={isLoading}
                      name="Sign In"
                      className="btn-block"
                      color="primary"
                      size="large"
                      type="submit"
                      variant="primary"
                    />
                  </Col>
                </Row>
              </form>
              <p className="mb-2 text-muted">
                Forgot password?{' '}
                <NavLink to="/auth/reset-password-1" className="f-w-400">
                  Reset
                </NavLink>
              </p>

            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin1;
