import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../database/firebaseConfig'; 
import { getAuth } from 'firebase/auth';
import styles from './styles';

const EventCard = ({ event, onToggleFavorite, isFavorite }) => {
  const navigation = useNavigation();
  const [creator, setCreator] = useState(null);
  const [isCreator, setIsCreator] = useState(false); // Check if current user is the creator

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        if (event.userId) {
          const userDoc = await getDoc(doc(db, "users", event.userId));
          if (userDoc.exists()) {
            setCreator(userDoc.data());
            const currentUser = getAuth().currentUser;
            // Check if the logged-in user is the creator of the event
            setIsCreator(currentUser?.uid === event.userId);
          }
        }
      } catch (error) {
        console.error("Error fetching creator info:", error);
      }
    };

    fetchCreator();
  }, [event.userId]);

  const handleDelete = async () => {
    try {
      // Show confirmation alert before deleting the event
      Alert.alert(
        'Delete Event',
        'Are you sure you want to delete this event?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: async () => {
              const eventRef = doc(db, 'events', event.id);
              await deleteDoc(eventRef); 
              Alert.alert('Event Deleted', 'The event has been successfully deleted.');
              
            },
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error deleting event:', error);
      Alert.alert('Error', 'There was an issue deleting the event.');
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{event.title}</Text>
        <TouchableOpacity onPress={onToggleFavorite}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.details}>{event.location}</Text>
      <Text style={styles.details}>{event.description}</Text>
      

      {creator && (
        <Text style={styles.creatorInfo}>
          Created by: {creator.fullName || creator.email}
        </Text>
      )}
        {/* View Details button for all users */}
        <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('EventDetails', { event })}
      >
        <Text style={styles.actionText}>View Details</Text>
      </TouchableOpacity>
      {/* Show edit button only for the event creator */}
      {isCreator && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('EditEvent', { event })}
        >
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
      )}
       {/* Show Delete button only for the event creator */}
       {isCreator && (
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: 'red' }]} // Red button for delete
          onPress={handleDelete}
        >
          <Text style={[styles.actionText, { color: 'white' }]}>Delete</Text>
        </TouchableOpacity>
      )}

    
    </View>
  );
};

export default EventCard;
