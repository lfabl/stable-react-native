import {

    createSwitchNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';
import HomeStack from '../pages/home';
import TestStack from '../pages/test';
const TestStackNav = createStackNavigator(
    {
        Test: TestStack
    },
    {
        initialRouteName: "Test"
    }
);
const HomeStackNav = createStackNavigator(
    {
        Home: HomeStack
    },
    {
        initialRouteName: "Home"
    }
);
const RootNav = createSwitchNavigator(
    {
        Home: HomeStackNav,
        Test: TestStackNav,
    },
    {
        initialRouteName: "Home"
    }
);
export default createAppContainer(RootNav);