import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import { onSnapshot, collection, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../database/firebaseConfig';
import EventCard from '../../Components/EventCard';
import styles from './styles';

const DashboardScreen = () => {
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState({});
  const user = auth.currentUser;

  useEffect(() => {
    const eventsRef = collection(db, 'events');
    const unsubscribe = onSnapshot(eventsRef, snapshot => {
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(list);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const favRef = collection(db, 'users', user.uid, 'favorites');
    const unsubscribe = onSnapshot(favRef, snapshot => {
      const favs = {};
      snapshot.forEach(doc => {
        favs[doc.id] = true;
      });
      setFavorites(favs);
    });
    return () => unsubscribe();
  }, []);

  const toggleFavorite = async (event) => {
    const favRef = doc(db, 'users', user.uid, 'favorites', event.id);
    try {
      if (favorites[event.id]) {
        await deleteDoc(favRef);
      } else {
        await setDoc(favRef, {
          eventId: event.id,
          title: event.title,
          description: event.description,
        });
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      Alert.alert('Error', 'Failed to update favorites.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            isFavorite={!!favorites[item.id]}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
        contentContainerStyle={styles.eventList}
      />
    </View>
  );
};

export default DashboardScreen;
