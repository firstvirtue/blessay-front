import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'redux/modules/base';

class Auth extends Component {
  // 페이지에 진입 할 때 헤더를 비활성화
  componentWillReceiveProps(nextProps) {
    console.log(1);
    this.props.BaseActions.setHeaderVisibility(false);
  }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.name !== prevState.name) {
//         return { name: nextProps.name, lastTime: Date.now() };
//     }
//     return null;
// }

  // 페이지에서 벗어 날 때 다시 활성화
  componentWillUnmount() {
    this.props.BaseActions.setHeaderVisibility(true);
  }

  render() {
    return (
      <div>
        Auth
      </div>
    );
  }
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Auth);
