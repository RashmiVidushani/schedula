import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../database/firebaseConfig';
import styles from './styles'; // assuming your styles support extra fields or will be updated

const CreateEventScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleCreate = async () => {
    if (!title || !description || !date || !location || !category) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'events'), {
        title,
        description,
        date,
        location,
        category,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create New Event</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter event title"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
        placeholder="Enter description"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="e.g., 2025-04-20"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="e.g., Toronto, ON"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="e.g., Tech, Music, Sports"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateEventScreen;
