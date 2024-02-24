import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
 

  const categories = [
    { id: '1', title: 'Features' },
    { id: '2', title: 'Series' },
    { id: '3', title: 'Films' },
    { id: '4', title: 'Origin' },
  ];

  // Dummy data for movie posters
  const movies = [
    { id: '1', title: 'Spider-Man', poster: require('../image/spider-man.jpeg'), section: 'Popular' },
    { id: '2', title: 'Inception', poster: require('../image/interception.jpg'), section: 'Editor' },
       { id: '3', title: 'Criminal minds', poster: require('../image/criminal-minds.jpg'), section: 'Editor' },
       { id: '4', title: 'Before Valentine', poster: require('../image/valentine.jpg'), section: 'Editor' },
       { id: '5', title: 'Strong Girl Nan soon', poster: require('../image/stronggirl.jpg'), section: 'Editor' },
       { id: '6', title: 'Stanty Town', poster: require('../image/shantytown.jpg'), section: 'Editor' },
       { id: '7', title: 'Rose', poster: require('../image/rose.jpg'), section: 'Editor' },
       { id: '8', title: '2 weeks to Lago', poster: require('../image/lagos.jpg'), section: 'Editor' },
       { id: '9', title: 'The Glory', poster: require('../image/glory.jpg'), section: 'Editor' },
       { id: '10', title: 'Girls', poster: require('../image/girls.jpeg'), section: 'Editor' },
       { id: '11', title: 'The Good Doctor', poster: require('../image/doctor.jpg'), section: 'Popular' },
       { id: '12', title: 'DEEP', poster: require('../image/deep.jpg'), section: 'Popular' },
       { id: '13', title: 'Dead Places', poster: require('../image/deadplaces.jpg'), section: 'Popular' },
       { id: '14', title: 'BlackList', poster: require('../image/blacklist.jpg'), section: 'Popular' },
       { id: '15', title: 'Berlin', poster: require('../image/berlin.jpg'), section: 'Popular' },
       { id: '16', title: 'Beauty', poster: require('../image/beauty.jpg'), section: 'Popular' },
       { id: '17', title: 'The Last Airbender', poster: require('../image/airbender.jpg'), section: 'Popular' },

  ];

  
  const recommendedMovies = [
    { id: '1', title: 'Moana', subtitle: 'Disney',  poster:require('../image/moana.jpeg')},
    { id: '2', title: 'Inception', subtitle: 'Warner Bros', poster:require('../image/interception.jpg') },
    { id: '2', title: 'Spider-Man', subtitle: 'Spider Man', poster:require('../image/spider-man.jpeg') },
    { id: '2', title: 'Strong Girl Na Soon ', subtitle: 'Na Soon', poster:require('../image/stronggirl.jpg') },
    { id: '2', title: 'The Glory', subtitle: 'Glory', poster:require('../image/glory.jpg') },
    { id: '2', title: 'Inception', subtitle: 'Warner Bros', poster:require('../image/interception.jpg') },
  
  ];

  // Render movie poster
  const renderMoviePoster = ({ item }) => (
    <View style={styles.moviePosterContainer}>
      <Image source={item.poster} style={styles.moviePoster} />
      <Text style={styles.moviePosterTitle}>{item.title}</Text>
    </View>
  );

  //Recommendation section
  const renderRecommendationItem = ({ item }) => (
    <View style={styles.recommendationItemContainer}>
      <Image source={item.poster} style={styles.recommendationItemImage} />
      <Text style={styles.recommendationItemTitle}>{item.title}</Text>
      <Text style={styles.recommendationItemSubtitle}>{item.subtitle}</Text>
    </View>
  );
  

  return (
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.centeredContainer}>
            <TouchableOpacity style={styles.mButton}>
              <Text style={styles.mButtonText}>M</Text>
            </TouchableOpacity>
            <Text style={styles.muviText}>Muvi</Text>
          </View>
        </View>

        {/* Category List */}
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
          )}
        />

        {/* Recommendation Section */}
        <Text style={styles.greeting}>Hi, Kitani Saraswati</Text>
       <Text style={styles.recommendation}>I have recommended this for you - enjoy! :)</Text>
          <FlatList
        data={recommendedMovies}
          horizontal={true}
       showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.id}
        renderItem={renderRecommendationItem} 
           />

        
        {/* Popular on Muvi section */}
        <Text style={styles.popularTitle}>Popular on Muvi</Text>
        <FlatList
          data={movies.filter(movie => movie.section === 'Popular')}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderMoviePoster}
        />
        
         

        {/* Editor's Choice section */}
        <Text style={styles.editorTitle}>Editor's Choice</Text>
        <FlatList
          data={movies.filter(movie => movie.section === 'Editor')}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderMoviePoster}
        />

        {/* Bottom Navigation Bar */}
            <View style={styles.bottomNavBar}>
     <TouchableOpacity onPress={() => alert('Home')}>
       <Icon name="home" size={16} color="#FFFFFF" />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => alert('Search')}>
    <Icon name="search" size={16} color="#FFFFFF" />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => alert('Folder')}>
    <Icon name="folder" size={16} color="#FFFFFF" />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => alert('Maximize')}>
    <Icon name="expand" size={16} color="#FFFFFF" /> 
  </TouchableOpacity>
</View>
</View>
  );
};

const styles = StyleSheet.create({
  overlay:{
    flex:1,
    padding: 10,
    backgroundColor: '#000000',
  },
  moviePosterContainer: {
    marginRight: 10, 
    marginTop:12
  },
  moviePoster: {
    width: 130, 
    height: 160, 
    borderRadius: 5, 
    fontWeight:'bold',
  },
  moviePosterTitle: {
    color: 'black', 
    textAlign: 'center', 
    fontWeight:'bold'
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20, 
    paddingTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10, 
    backgroundColor: 'transparent', 
  },
  backButton: {
    padding: 10, 
    marginLeft: -10, 
  },
  backButtonText: {
    fontSize: 24, 
    color: '#FFFFFF', 
    
  },
  centeredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  mButton: {
    backgroundColor: 'gold', 
    paddingVertical: 5, 
    paddingHorizontal: 5, 
    borderRadius: 5, 
    marginRight: 70, 
  },
  mButtonText: {
    color: 'white',
    fontSize: 18, 
    fontWeight: 'bold', 
   
  },
  muviText: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'white', 
    marginRight: 30,
  },
  popularTitle:{
color:'white',
fontVariant:'bold',
fontSize:16,
  },
  editorTitle:{
    color:'white',
    fontVariant:'bold',
    fontSize:16
  },
  greeting:{
    color:'white',
    fontVariant:'bold',
    fontSize:20
  },
  recommendation:{
     color:'white',
   fontVariant:'bold',
    fontSize:10
 },
 recommendationItemContainer: {
  margin: 5,
  alignItems: 'center',
},
recommendationItemImage: {
  width: 110,
  height: 110,
  borderRadius: 4,
},
recommendationItemTitle: {
  fontWeight: 'bold',
  marginTop: 5,
},
recommendationItemSubtitle: {
  color: 'grey',
},
});

export default HomeScreen;

