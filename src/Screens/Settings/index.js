import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, Alert } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import styles from "./styles";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const navigation = useNavigation();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.replace("SignInScreen");
        Alert.alert("Signed Out", "You have been signed out successfully.");
      })
      .catch((error) => {
        console.error("Sign out error: ", error);
        Alert.alert("Error", "Failed to sign out.");
      });
  };

  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);

    if (newValue) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === "granted") {
        await showNotification();
        Alert.alert("Notifications", "Notifications enabled!");
      } else {
        Alert.alert("Permissions", "Notification permissions denied.");
      }
    } else {
      Notifications.dismissAllNotificationsAsync();
      Alert.alert("Notifications", "Notifications disabled!");
    }
  };

  const showNotification = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Notifications Enabled",
          body: "You’ll now get updates about events.",
          sound: true,
        },
        trigger: { seconds: 2 },
      });
    } catch (error) {
      console.error("Notification error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          thumbColor={notificationsEnabled ? "#00e0ff" : "#888"}
          trackColor={{ true: "#004c4c", false: "#444" }}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
