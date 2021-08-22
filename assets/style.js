import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "#E8F7EE",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#3C362A",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleLight: {
    color: "#F2FDF5",
    fontSize: 36,
    marginBottom: 20,
  },
  titleDark: {
    color: "#3C362A",
    fontSize: 36,
    marginBottom: 20,
  },
  italic: {
    fontStyle: "italic",
  },
  subtitleLight: {
    color: "#F2FDF5",
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  subtitleDark: {
    color: "#3C362A",
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: "#F2FDF5",
    borderRadius: 10,
    borderColor: "#3C362A",
    padding: 10,
  },
  addMargin: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  moreMarginBottom: {
    marginBottom: 30,
  },
  extraMarginBottom: {
    marginBottom: 110,
  },
  extraMarginHorizontal: {
    marginRight: 30,
    marginLeft: 30,
  },
  extraMarginVertical: {
    marginTop: 10,
    marginBottom: 10,
  },
  extraLeftPadding: {
    paddingLeft: 60,
  },
  radioButton: {
    color: "#F2FDF5",
    backgroundColor: "#F2FDF5",
    display: "none",
    opacity: 0,
    width: 0,
    height: 0,
    left: -100,
    bottom: -100,
  },
  bold: {
    fontWeight: "bold",
  },
  leftAlign: {
    textAlign: "left",
    paddingLeft: 10,
  },
  logo: {
    width: 160,
    height: 160,
    justifyContent: "flex-start",
  },
  logoSmall: {
    width: 80,
    height: 80,
    justifyContent: "flex-start",
  },
  horizontalFlex: {
    flexDirection: "row",
  },
  textLight: {
    color: "#F2FDF5",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
  },
  textDark: {
    color: "#3C362A",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonPurple: {
    backgroundColor: "#663F46",
    width: 200,
    height: 40,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonGrey: {
    backgroundColor:"#C2C2C2",
    width: 200,
    height: 40,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonLong: {
    width: 350,
    height: 80,
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 20,
    borderRadius: 10,
  },
  buttonShort: {
    width: 100,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonMint: {
    backgroundColor: "#E8F7EE",
    width: 200,
    height: 50,
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  footerImageBirds: {
    position: "absolute",
    resizeMode: "contain",
    bottom: 10,
    marginBottom: 10,
  },
  footerImageTree: {
    position: "absolute",
    resizeMode: "contain",
    bottom: -100,
    // right: -50,
    right: -160,
    marginBottom: 10,
  },
  iconImage: {
    position: "absolute",
    top: 7,
    width: 40,
    height: 40,
  },
});