import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import NavigationService from '../service/navigation/NavigationService';
import {newsAPI, newsDetailAPI} from '../redux/actions/newsAction';
import Loader from '../common/loader';
import ScreenAStyle from './ScreenAStyle';

class ScreenA extends PureComponent {
  static propTypes = {
    newsData: PropTypes.array,
    newsLoader: PropTypes.bool,
  };

  static defaultProps = {
    newsData: [],
    newsLoader: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.newsAPI();
  }

  renderLoader = () => {
    const {newsLoader} = this.props;
    if (newsLoader) {
      return <Loader />;
    }
    return null;
  };

  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={ScreenAStyle.itemViewStyle}
        onPress={() => {
          this.props.newsDetailAPI(item);
          NavigationService.navigate(this.props.navigation, 'Detail');
        }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {newsData} = this.props;
    return (
      <View style={ScreenAStyle.containerStyle}>
        <FlatList
          data={newsData}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => `${item}${index}`}
        />

        {this.renderLoader()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsLoader: state.newsReducer.newsLoader,
    newsData: state.newsReducer.newsData,
  };
};

const mapDispatchToProps = {
  newsAPI,
  newsDetailAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenA);
