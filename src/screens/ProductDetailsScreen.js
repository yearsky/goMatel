import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Easing,
  Animated,
  Pressable,
} from "react-native";

import React, { useEffect, useState, useRef } from "react";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { FlatListSlider } from 'react-native-flatlist-slider';
import { cartSlice } from "../store/cartSlice";
import { FontAwesome5 } from "@expo/vector-icons";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const [show, setShow] = useState(0);
  const addToCart = () => {
    setShow(1);
    dispatch(cartSlice.actions.addCartItem({ product }));
  };
  const animated = new Animated.Value(0);
  const duration = 500;

  const [opacityValue] = useState(new Animated.Value(1));
  const flatListRef = useRef(null);
  const handleOnScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    if (currentOffset > 0) {
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    {
      show == 1
        ? Animated.sequence([
            Animated.timing(animated, {
              toValue: 130,
              duration: duration,
              useNativeDriver: true,
            }),
            Animated.timing(animated, {
              toValue: 0,
              duration: 2000,
              useNativeDriver: true,
              easing: Easing.back(),
            }),
          ]).start()
        : null;
    }
  }, [animated]);

  return (
    <View>
      <Animated.View
        style={[{ transform: [{ translateY: animated }], zIndex: 3 }]}
      >
        <View style={styles.toast}>
          <FontAwesome5
            name="check"
            size={18}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.textToast}>Item added to Cart!</Text>
        </View>
      </Animated.View>

      <ScrollView
        onScroll={handleOnScroll}
        ref={flatListRef}
        scrollEventThrottle={16}
      >
        {/* Image Carousel */}
        {/* <FlatListSlider 
          data={product.images} 
          local
        /> */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      {/* <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable> */}
      <Animated.View style={{ opacity: opacityValue }}>
        <Pressable onPress={addToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
      </Animated.View>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  toast: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "white",
    top: -100,
    elevation: 3,
    zIndex: 3,
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    padding: 15,
    borderWidth: 2,
    borderColor: "limegreen",
    borderRadius: 100,
    alignItems: "center",
  },
  textToast: {
    color: "black",
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },

  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
