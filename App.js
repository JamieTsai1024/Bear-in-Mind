import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableHighlight} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from "./pages/LandingPage.js";
import MainMenuPage from "./pages/MainMenuPage.js";
import MyLocationsPage from "./pages/MyLocations.js";
import ReportSightingPage1 from "./pages/ReportSightingPage1.js";
import ReportSightingPage2 from "./pages/ReportSightingPage2.js";
import ReportSightingPage3 from "./pages/ReportSightingPage3.js";
import ReportSightingPage4 from "./pages/ReportSightingPage4.js";
import TrailPage from "./pages/TrailPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Landing"
            component={LandingPage}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
          />
          <Stack.Screen 
            name="Sign Up" 
            component={SignUpPage} 
          />
          <Stack.Screen 
            name="Main Menu" 
            component={MainMenuPage} 
          />
          <Stack.Screen 
            name="Report Sighting 1" 
            component={ReportSightingPage1} 
          />
          <Stack.Screen 
            name="Report Sighting 2" 
            component={ReportSightingPage2} 
          />
          <Stack.Screen 
            name="Report Sighting 3" 
            component={ReportSightingPage3} 
          />
          <Stack.Screen 
            name="Report Sighting 4" 
            component={ReportSightingPage4} 
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen 
            name="My Locations" 
            component={MyLocationsPage} 
          />
          <Stack.Screen 
            name="Trail Page" 
            component={TrailPage} 
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}