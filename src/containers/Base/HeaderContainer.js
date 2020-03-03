import React, { Component } from 'react';
import Header, { LoginButton, UserLayer, HeaderLink } from 'components/Base/Header';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';

class HeaderContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      userLayerVisibility: false
    }
  }

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

  handleUserLayer = () => {
    const { userLayerVisibility } = this.state;
    this.setState({userLayerVisibility: !userLayerVisibility});
  }

  render() {
    const { visible, user } = this.props;
    if(!visible) return null;

    return (
      <Header>
        { user.get('logged') 
          ? (<div>
            <div onClick={this.handleUserLayer}>
            { user.getIn(['loggedInfo', 'username'])}
            </div>
            <UserLayer userLayerVisibility={this.state.userLayerVisibility}>
              <HeaderLink to="/post/list">글 쓰기</HeaderLink>
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
