import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import DashboardScreen from '../Screens/Dashboard/index';
import SettingsScreen from '../Screens/Settings/index';
import CreateEventScreen from '../EventScreen/CreateEventScreen/CreateEventScreen';
import FavoritesScreen from '../EventScreen/FavouriteEventsScreen/FavouriteEventsScreen';
import { View, StyleSheet, Platform } from 'react-native';
import ProfileScreen from '../Screens/Profile/index';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#1f1f1fdd',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingTop: 10,
          marginHorizontal: 10,
          marginBottom: 20,
          borderRadius: 35,
          paddingBottom: Platform.OS === 'android' ? 10 : 30,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
        },
        tabBarActiveTintColor: '#00e0ff',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerShown: true,
          headerTitle: 'Event Dashboard',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2A2A2A',
            height: 70,
            shadowColor: 'transparent',
          },
          headerTintColor: '#00e0ff',
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: 'bold',
          },
          headerRight: () => (
            <MaterialIcons name="logout" size={28} color="#fff" style={{ marginRight: 20 }} />
          ),
       
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.focusedTab : null}>
              <MaterialIcons name="home" color={color} size={28} />
            </View>
            
          ),
        }}
      />
      <Tab.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.focusedTab : null}>
              <MaterialIcons name="add-circle-outline" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.focusedTab : null}>
              <MaterialIcons name="favorite-border" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.focusedTab : null}>
              <MaterialIcons name="person" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.focusedTab : null}>
              <MaterialIcons name="settings" color={color} size={28} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedTab: {
    backgroundColor: '#333',
    borderRadius: 20,
    alignItems: 'center',
    width: 40,
    borderWidth: 1,
    borderColor: '#00e0ff', 
    shadowColor: '#00e0ff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  
});


export default AppNavigator;
