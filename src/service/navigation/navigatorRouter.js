import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenA from '../../components/ScreenA';
import ScreenB from '../../components/ScreenB';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: ScreenA,
    },
    Detail: {
      screen: ScreenB,
    },
  },
  {
    // headerMode: 'none',
    mode: 'modal',
  },
);

const AppContainer = createAppContainer(MainStack);

export default AppContainer;
