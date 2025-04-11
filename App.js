import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./src/Navigation/AppNavigator"
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import DashboardScreen from "./src/Screens/Dashboard";
import CreateEventScreen from "./src/EventScreen/CreateEventScreen/CreateEventScreen";
import SettingsScreen from "./src/Screens/Settings/index";
import EditEventScreen from "./src/EventScreen/EditEventScreen/EditEventScreen";
import FavoritesScreen from "./src/EventScreen/FavouriteEventsScreen/FavouriteEventsScreen";
import ProfileScreen from "./src/Screens/Profile/index";
import { TouchableOpacity } from "react-native";
import EventDetailsScreen from "./src/Screens/EventDetailsScreen/EventDetailsScreen";
import { Ionicons } from "@expo/vector-icons";



const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="SignInScreen"
      >
        <Stack.Screen name="SignInScreen" 
        options={{ headerShown: false,
         
        }}>
          {(props) => (
            <SignInScreen
              {...props}
              buttonLabel="Sign In"
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} 
        options={
          {
            gestureEnabled: false,
            title: "",
            headerTintColor:"#fff",
            headerStyle: {
              backgroundColor: "#FF6B6B",
            },
            headerTitleStyle: {
              fontFamily: "Roboto",
              fontSize: 28,
              fontWeight: "bold",
              color: "#fff",
            },
          }
        }
        >
          
          </Stack.Screen>
          <Stack.Screen 
              name="DashboardScreen" 
              component={DashboardScreen}
              options={({ navigation }) => ({
    title: "Dashboard",
    headerBackTitle: "",
    headerBackTitleStyle: {
      color: "#fff",
      fontFamily: "Roboto",
      fontSize: 18,
    },
    headerRight: () => (
      <TouchableOpacity
      onPress={() => navigation.navigate("Settings")}
      style={{ marginRight: 20 }}
    >
      <Text style={{ color: "#fff" }}>⚙️</Text>
    </TouchableOpacity>
    
    ),
    headerStyle: { 
      height: 60,
      backgroundColor: "#121212",
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
      height: 30,
      color: "#fff",
      fontFamily: "Roboto",
      fontSize: 22,
      fontWeight: "bold",
    },
  })}
/>

        <Stack.Screen name="CreateEvent" component={CreateEventScreen}
        options={{
          title: "CreateEvent",
          headerBackTitle: "",
          headerBackTitleStyle: {
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 18,
          },
          headerStyle: { 
            height: 60,
            backgroundColor: "#121212" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            height: 30,
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: "bold",
          },
        }} />
        <Stack.Screen name="EditEvent" component={EditEventScreen}
        options={{
          title: "EditEvent",
          headerBackTitle: "",
          headerBackTitleStyle: {
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 18,
          },
          headerStyle: { 
            height: 60,
            backgroundColor: "#121212" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            height: 30,
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: "bold",
          },
        }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen}
        options={{
          title: "Favorites",
          headerBackTitle: "",
          headerBackTitleStyle: {
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 18,
          },
          headerStyle: { 
            height: 60,
            backgroundColor: "#121212" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            height: 30,
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: "bold",
          },
        }} />
        <Stack.Screen name="Settings" component={SettingsScreen}
        options={{
          title: "Settings",
          headerBackTitle: "",
          headerBackTitleStyle: {
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 18,
          },
          headerStyle: { 
            height: 60,
            backgroundColor: "#121212" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            height: 30,
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: "bold",
          },
        }} />
        <Stack.Screen name="Profile" component={ProfileScreen}
        options={{
          title: "Profile",
          headerBackTitle: "",
          headerBackTitleStyle: {
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 18,
          },
          headerStyle: { 
            height: 60,
            backgroundColor: "#121212" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            height: 30,
            color: "#fff",
            fontFamily: "Roboto",
            fontSize: 22,
            fontWeight: "bold",
          },
        }} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} 
            options={{
              title: "EventDetails",
              headerBackTitle: "",
              headerBackTitleStyle: {
                color: "#fff",
                fontFamily: "Roboto",
                fontSize: 18,
              },
              headerStyle: { 
                height: 60,
                backgroundColor: "#121212" },
              headerTitleAlign: "center",
              headerTitleStyle: {
                height: 30,
                color: "#fff",
                fontFamily: "Roboto",
                fontSize: 22,
                fontWeight: "bold",
              },
            }} 
        />
        <Stack.Screen name="HomeTabs" component={AppNavigator} options={
          {headerShown: false,}
        }>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
