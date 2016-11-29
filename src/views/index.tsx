import * as React from 'react';
import { Layout } from './layout'
class Index extends React.Component<any, any> {
  
  constructor(props:any) {
    super(props);
  }
  static propTypes = {
    title: React.PropTypes.string
  }
  render() {
    return (
      <Layout title={this.props.title}>
        <h2>EXAMPLE!</h2>
        <div id="app"></div>
        <script type="text/javascript" src="/dist/vendors.js"></script>
        <script type="text/javascript" src="/dist/bundle.js"></script>
      </Layout>
    );
  }
}

module.exports = Index;
