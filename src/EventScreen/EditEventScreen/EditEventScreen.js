import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../database/firebaseConfig';
import styles from './styles';

const EditEventScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);

  const handleUpdate = async () => {
    if (!title || !description) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    try {
      const docRef = doc(db, 'events', event.id);
      await updateDoc(docRef, { title, description });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Update Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Edit Event</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter updated title"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
        placeholder="Enter updated description"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditEventScreen;
