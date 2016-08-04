/**
*
* Stuffs
*
*/

import React from 'react';
import request from 'utils/request';


class Stuffs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }
  componentDidMount() {
    request('https://t54q6gj8j9.execute-api.us-east-1.amazonaws.com/dev/hello').then(
      function(data) {
        this.setState({data: data});
      }.bind(this)
    );
  }
  render() {
    return (
      <div><h1>test</h1><pre>{JSON.stringify(this.state.data, null, 2)}</pre></div>
    );
  }
}

export default Stuffs;
