import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';  // Assuming you're using a shared styles file for consistency

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params; // Get event data from route params
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{event.title}</Text>
        </View>

        <Text style={styles.date}>Date: {event.date}</Text>
        <Text style={styles.location}>Location: {event.location}</Text>
        <Text style={styles.details}>Description: {event.description}</Text>
        <Text style={styles.category}>Category: {event.category}</Text>

        {/* Display the creator info */}
        <Text style={styles.creatorInfo}>
          Created by: {event.userId}
        </Text>

        {/* Go back to the event list */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.actionText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EventDetailsScreen;
