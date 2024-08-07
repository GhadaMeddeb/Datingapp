import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { AntDesign, Entypo, MaterialIcons, Feather } from '@expo/vector-icons';

// Données des cartes avec image, bio et distance
const cards = [
  { 
    name: 'Ahmed', 
    age: 29, 
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    bio: 'Actif·ve',
    distance: 'à 1 km'
  },
  { 
    name: 'Jane Smith', 
    age: 23, 
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    bio: 'Foodie and aspiring chef.',
    distance: '3 km'
  },
  { 
    name: 'Sam Wilson', 
    age: 27, 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Tech enthusiast and music lover.',
    distance: '10 km'
  },
];

export default function TinderSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiped = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleMatch = () => {
    console.log('Match!');
  };

  const handleNope = () => {
    console.log('Nope!');
  };

  const handleRewind = () => {
    console.log('Rewind!');
  };

  const handleBoost = () => {
    console.log('Boost!');
  };

  const handleLogout = () => {
    console.log('Logout!');
    // Ajoutez ici la logique de déconnexion
  };

  return (
    <View style={styles.container}>
      {/* Barre de navigation en haut */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={handleLogout}>
          <Feather name="log-out" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.logo}>Dating app</Text>
        <TouchableOpacity>
          <AntDesign name="bells" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Barre de navigation en bas */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <MaterialIcons name="local-fire-department" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="chat" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="user" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Icônes au-dessus du swiper */}
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <AntDesign name="user" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="chat" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="local-fire-department" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.image} />
            <View style={styles.cardDetails}>
              <View style={styles.textRow}>
                <Text style={styles.name}>{card.name},</Text>
                <Text style={styles.age}>{card.age}</Text>
                <AntDesign name="checkcircle" size={18} color="#1E90FF" style={styles.verifiedIcon} />
              </View>
              <Text style={styles.bio}>{card.bio}</Text>
              <Text style={styles.distance}>{card.distance}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={handleRewind}>
                <MaterialIcons name="replay" size={30} color="#f5b748" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNope}>
                <Entypo name="cross" size={30} color="#ec5e6f" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleMatch}>
                <Entypo name="star" size={30} color="#62b4f9" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleMatch}>
                <AntDesign name="heart" size={30} color="#76e2b3" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleBoost}>
                <MaterialIcons name="flash-on" size={30} color="#a65cd2" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        onSwiped={handleSwiped}
        onSwipedAll={() => console.log('All cards swiped!')}
        cardIndex={currentIndex}
        backgroundColor={'#fff'}
        stackSize={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  cardDetails: {
    position: 'absolute',
    bottom: 110,
    left: 20,
    right: 20,
    alignItems: 'flex-start',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  age: {
    fontSize: 22,
    color: '#000',
    marginLeft: 5,
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  bio: {
    fontSize: 18,
    color: '#000',
    marginVertical: 5,
  },
  distance: {
    fontSize: 16,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
