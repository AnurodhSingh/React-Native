import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
class HomeContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  render() {
    return (
      <HomeComponent {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  const {  } = state;
	return {
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);