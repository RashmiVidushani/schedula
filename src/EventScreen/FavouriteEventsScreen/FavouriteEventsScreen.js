import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Alert, TouchableOpacity } from 'react-native';
import { auth, db } from '../../database/firebaseConfig';
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc
} from 'firebase/firestore';
import EventCard from '../../Components/EventCard';
import styles from './styles';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;

    const favRef = collection(db, 'users', userId, 'favorites');

    const unsubscribe = onSnapshot(favRef, (snapshot) => {
      const favList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFavorites(favList);
    });

    return unsubscribe;
  }, []);

  const removeFavorite = async (eventId) => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;

    Alert.alert('Remove Favorite', 'Are you sure you want to remove this event?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const favDocRef = doc(db, 'users', userId, 'favorites', eventId);
            await deleteDoc(favDocRef);
            setFavorites((prev) => prev.filter((item) => item.id !== eventId));
          } catch (error) {
            console.error("Error removing favourite:", error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <EventCard
      event={item}
      isFavorite={true}
      onToggleFavorite={() => removeFavorite(item.id)}
    />
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favourites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.eventList}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
