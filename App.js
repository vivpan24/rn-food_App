import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultshowScreen from "./src/screens/ResultshowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultshowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
