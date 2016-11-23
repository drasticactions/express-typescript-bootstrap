import * as React from 'react';
import { Layout } from './layout'

class Error extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }
  static propTypes = {
    title: React.PropTypes.string
  }
  render() {
    return (
      <Layout>
            <h1>{this.props.message}</h1>
            <h2>{this.props.error.status}</h2>
      </Layout>
    );
  }
}

module.exports = Error;