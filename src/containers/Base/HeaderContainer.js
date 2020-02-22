import React, { Component } from 'react';
import Header, { LoginButton } from 'components/Base/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  // constructor() {
  //   super();
  //   console.log('header');
  // }

  render() {
    const { visible } = this.props;
    // console.log(visible);
    if(!visible) return null;

    return (
      <Header>
        <LoginButton/>
      </Header>
    );
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['header', 'visible'])
  }),
  (dispatch) => ({

  })
)(HeaderContainer);
