import React from 'react'
import PropTypes from 'prop-types'

import { config } from 'aws-cognito-redux-saga'

class Auth extends React.Component {
  static propTypes = {
    getUser: PropTypes.func
  }

  componentWillMount() {
    config.config.set({ //AWS Cognito userpoll and identity pool information
      region: 'us-east-1',
      IdentityPoolId: 'us-east-1:ac97b5c5-b43d-4bed-860b-28dd4fe4dd73',
      UserPoolId: 'us-east-1_7mB8ENyl5',
      ClientId: '38o9onkvslhdigqkhv4fi1homg'
    })

    this.props.getUser()
  }

  render() {
    return null
  }
}

export default Auth
