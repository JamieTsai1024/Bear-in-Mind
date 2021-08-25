import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  // Containers 
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

  // Titles and Subtitles 
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

  // Text Styling and Page Formatting 
  italic: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: "bold",
  },
  leftAlign: {
    textAlign: "left",
    paddingLeft: 10,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  horizontalFlex: {
    flexDirection: "row",
  },
  addMargin: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  // hideElement: {
  //   opacity: 0, 
  //   position: "absolute",
  //   left: -1000,
  //   bottom: -1000,
  // },
  // unhideElement: {
  //   opacity: 1, 
  //   position: "relative",
  //   left: 0,
  //   bottom: 0,
  // },

  // Input 
  input: {
    width: 200,
    height: 40,
    backgroundColor: "#F2FDF5",
    borderRadius: 10,
    borderColor: "#3C362A",
    padding: 10,
  },

  // Padding and Margin
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

  // Text
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
  textWarn: {
    fontSize: 18,
    color: "#f5ad42",
    fontStyle: "italic",
    textAlign: "center",
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "column",
  },

  // Buttons 
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

  // Images
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
    right: -160,
    marginBottom: 10,
  },
  iconImage: {
    position: "absolute",
    top: 7,
    width: 40,
    height: 40,
  },

  // Radio Buttons 
  buttonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: "center",
    alignItems: 'center',
  },
  radio: {
    width: 100,
    height: 50,
    paddingTop: 30,
    paddingBottom: 30,
    margin: 10,
    borderRadius: 10,
    zIndex: -1,
    backgroundColor: "#E8F7EE",
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioChecked: {
    width: 100,
    height: 50,
    paddingTop: 30,
    paddingBottom: 30,
    margin: 10,
    borderRadius: 10,
    zIndex: -1,
    backgroundColor: "#96E3B4",
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    color: "#3C362A",
    fontSize: 18,
    position: 'absolute',
    zIndex: 1,
    textAlign: "center",
    justifyContent: 'center',
  },
});