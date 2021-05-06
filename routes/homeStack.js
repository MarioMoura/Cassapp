import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Add from '../screens/add';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  Details: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
  Add: {
    screen: Add,
    navigationOptions: {
      title: 'Add item',
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 60, 
    },
  }
})

export default createAppContainer(HomeStack);
