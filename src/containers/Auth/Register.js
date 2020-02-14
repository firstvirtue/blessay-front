import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import { isEmail, isLength, isAlphanumeric } from 'validator';

class Register extends Component {
  setError = (message) => {
    const { AuthActions } = this.props;
    AuthActions.setError({
      form: 'register',
      message
    });
  }

  validate = {
    email: (value) => {
      if(!isEmail(value)) {
        this.setError('잘못된 이메일 형식입니다.');
        return false;
      }
      return true;
    },
    username: (value) => {
      if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15 })) {
        this.setError('아이디는 4~15글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
        return false;
      }
      return true;
    },
    password: (value) => {
      if(!isLength(value, { min: 6 })) {
        this.setError('비밀번호를 6자 이상 입력하세요.');
        return false;
      }
      this.setError(null);
      return true;
    },
    passwordConfirm: (value) => {
      if(this.props.form.get('password') !== value) {
        this.setError('비밀번호 확인이 일치하지 않습니다.');
        return false;
      }
      this.setError(null);
      return true;
    }
  }

  handleChange = e => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: 'register'
    });

    const validation = this.validate[name](value);
    if(name.indexOf('password') > -1 || !validation) return;
  }

  render() {
    const { email, username, password, passwordConfirm } = this.props.form.toJS();
    const { handleChange } = this;

    return (
      <AuthContent title="회원가입">
        <InputWithLabel 
          label="이메일" 
          name="email" 
          placeholder="이메일"
          value={email} 
          onChange={handleChange}
        />
        <InputWithLabel 
          label="아이디" 
          name="username" 
          placeholder="아이디"
          value={username} 
          onChange={handleChange}
        />
        <InputWithLabel 
          label="비밀번호" 
          name="password" 
          placeholder="비밀번호"
          value={password} 
          onChange={handleChange}
        />
        <InputWithLabel 
          label="비밀번호 확인" 
          name="passwordConfirm" 
          placeholder="비밀번호 확인"
          value={passwordConfirm} 
          onChange={handleChange}
        />
        <AuthButton>회원가입</AuthButton>
        <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
      </AuthContent>
    );
  }

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('register');
  }
}

export default connect(
  (state) => ({
    form: state.auth.getIn(['register', 'form'])
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Register);
