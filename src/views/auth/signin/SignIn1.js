import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../../components/Widgets/Globals/TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();


const Signin1 = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);
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
                    <Button className="btn-block" color="primary" size="large" type="submit" variant="primary">
                      Signin
                    </Button>
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