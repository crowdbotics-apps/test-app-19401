import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps87859Navigator from '../features/Maps87859/navigator';
import Add-Item87858Navigator from '../features/Add-Item87858/navigator';
import Maps87854Navigator from '../features/Maps87854/navigator';
import UserProfile87850Navigator from '../features/UserProfile87850/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps87859: { screen: Maps87859Navigator },
Add-Item87858: { screen: Add-Item87858Navigator },
Maps87854: { screen: Maps87854Navigator },
UserProfile87850: { screen: UserProfile87850Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
