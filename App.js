import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

// FontAwesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faMapMarkedAlt, faMapSigns } from '@fortawesome/pro-light-svg-icons';
import { faBan, faChartBar, faChevronDown, faClock, faFrown, faImages, faSearch, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { faAnalytics, faCameraRetro, faFlag, faLocationDot, faMotorcycle, faOctagonExclamation, faRectangleHistory, faRectangleVerticalHistory, faScrewdriverWrench, faShieldCheck, faShieldExclamation, faUser } from '@fortawesome/pro-solid-svg-icons';
library.add(
  faAnalytics, faBan, faCameraRetro, faChartBar, faChevronDown, faChevronRight, faClock, faFlag, faFrown, 
  faImages, faLocationDot, faMapMarkedAlt, faMapSigns, faMotorcycle, faOctagonExclamation, faRectangleHistory, 
  faRectangleVerticalHistory, faScrewdriverWrench, faSearch, faShieldCheck, faShieldExclamation, faTimes, faUser
)

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

