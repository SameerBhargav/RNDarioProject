import {NavigationActions, StackActions} from 'react-navigation';

/**
 * This method is used to navigate between the stack navigator, Navigation Props is screen props,
 * route name is screen to which you want navigate and params are option arguments to pass value to the route
 * @param {*} navigationProps
 * @param {*} routeName
 * @param {*} params
 */
function navigate(navigationProps, routeName, params) {
  navigationProps.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
}

/**
 * This method is used to go back to previous screen, Navigation Props is screen props,
 * and params are option arguments to pass value to the route
 * @param {*} navigationProps
 * @param {*} params
 */
function goBack(navigationProps, params) {
  navigationProps.goBack(params);
}

export default {
  navigate,

  goBack,
};
