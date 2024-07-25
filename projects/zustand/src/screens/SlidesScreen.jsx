import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  Button,
} from "react-native";
import { useState, useRef } from "react";
const slides = [
  {
    id: "1",
    title: "Slide 1",
    description: "Abre tu cuenta en menos de 5 minutos",
    image: require("../../assets/adaptive-icon.png"),
  },
  {
    id: "2",
    title: "Slide 2",
    description: "Saca tus fotos al instante",
    image: require("../../assets/adaptive-icon.png"),
  },
  {
    id: "3",
    title: "Slide 3",
    description: "Compra tus productos favoritos",
    image: require("../../assets/adaptive-icon.png"),
  },
];

const SlideItem = ({ item }) => {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image
        source={item.image}
        style={{
          width: width * 0.8,
          height: width * 0.8,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />
    </View>
  );
};

const SlideScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef(null);
  const customScroll = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlide(currentIndex > 0 ? currentIndex : 0);
  };
  const nextSlide = (index) => {
    if (!flatListRef.current) {
      return;
    }
    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };
  return (
    <View style={{...styles.container}}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled={false}
        pagingEnabled
        onScroll={customScroll}
      />
      <Button title="Siguiente" onPress={() => nextSlide(currentSlide + 1)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
  },
});

export default SlideScreen;
