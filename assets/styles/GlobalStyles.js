import { StyleSheet, Dimensions } from "react-native";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    width: "50%",
    padding: 20,
  },
  image: {
    width: deviceWidth * 0.3,
    aspectRatio: 1,
  },
  tabPils: {
    margin: 10,
  },
  bannerText: {
    padding: 10,
    marginBottom: 30,
    fontFamily: "the-natures",
    fontWeight: "400",
    textAlign: "center",
    fontSize: 32,
  },
  bannerItem: {
    flexDirection: "row",
    padding: 30,
    alignItems: "center",
    margin: 20,
  },
  sloganLeft: {
    fontFamily: "louis",
    marginLeft: -30,
    fontSize: 32,
  },
  sloganRight: {
    fontFamily: "louis",
    marginRight: -30,
    fontSize: 32,
  },
  slogan2: {
    padding: 10,
    fontFamily: "louis",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "200",
  },
  textPilsHome: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 9,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchFieldHome: {
    backgroundColor: "white",
    padding: deviceWidth * 0.05,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  textPils: {
    width: "100%",
    height: 35,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    textAlign: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingVertical: 8,
    borderRadius: 15,
    borderColor: "black",
  },
});

export default styles;
