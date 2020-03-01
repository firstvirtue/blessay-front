import React, { Component } from 'react';
import Header, { LoginButton, UserLayer } from 'components/Base/Header';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';

class HeaderContainer extends Component {
  // constructor() {
  //   super();
  //   console.log('header');
  // }

  handleLogout = async () => {
    const { UserActions } = this.props;
    try {
      await UserActions.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href = '/';
  }

  render() {
    const { visible, user } = this.props;
    if(!visible) return null;

    return (
      <Header>
        { user.get('logged') 
          ? (<div>
            { user.getIn(['loggedInfo', 'username'])}
            <UserLayer>
              <div>내 정보</div>
              <div onClick={this.handleLogout}>(로그아웃)</div>
            </UserLayer>
          </div>)
          : 
          <LoginButton/>
        }
      </Header>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['header', 'visible']),
    user: state.user
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(HeaderContainer);
