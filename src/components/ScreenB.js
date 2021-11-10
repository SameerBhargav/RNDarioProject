import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {resetNewsDetailAPI} from '../redux/actions/newsAction';
import Loader from '../common/loader';
import ScreenBStyle from './ScreenBStyle';

class ScreenB extends PureComponent {
  static propTypes = {
    newsDetails: PropTypes.object,
    newsDetailLoader: PropTypes.bool,
  };

  static defaultProps = {
    newsDetails: {},
    newsDetailLoader: false,
  };
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetNewsDetailAPI();
  }

  renderLoader = () => {
    const {newsDetailLoader = false} = this.props;
    if (newsDetailLoader) {
      return <Loader />;
    }
    return null;
  };

  render() {
    const {newsDetails = {}} = this.props;
    return (
      <View style={ScreenBStyle.containerStyle}>
        <WebView
          source={{
            uri: newsDetails && newsDetails.url,
          }}
          style={ScreenBStyle.containerStyle}
          javaScriptEnabled={true}
        />
        {this.renderLoader()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsDetailLoader: state.newsReducer.newsDetailLoader,
    newsDetails: state.newsReducer.newsDetails,
  };
};

const mapDispatchToProps = {
  resetNewsDetailAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenB);
