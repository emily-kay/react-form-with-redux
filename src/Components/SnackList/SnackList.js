import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class SnackList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul> {this.props.reduxState.snackReducer.map(detail => {
          return (
            <li key={detail}>
              {detail}
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

//connect allows us to dispatch actions
export default connect(mapReduxStateToProps)(SnackList);