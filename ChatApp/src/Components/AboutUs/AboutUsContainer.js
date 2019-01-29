import React, { Component } from 'react';
import AboutUsComponent from './AboutUsComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class AboutUsContainer extends Component {
  constructor(props) {
		super(props);
		this.state = {
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <AboutUsComponent {...this.props}/>
    );
  }
}
function mapStateToProps(state) {
	const { } = state;
	return {
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutUsContainer);