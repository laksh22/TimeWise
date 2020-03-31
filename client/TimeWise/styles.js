import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  // Backgrounds
  introPage: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  background: {
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  // Text
  titleText: {
    fontSize: 50,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  headingText: {
    color: '#FFFFFF',
    fontSize: 30
  },
  lightHeadingText: {
    color: '#FFFFFF',
    fontWeight: '100',
    fontSize: 30
  },
  boldHeadingText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30
  },
  mediumText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  boldMediumText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  text: {
    color: '#FFFFFF'
  },
  timeText: {
    color: 'black',
    backgroundColor: 'white'
  },
  // Containers
  homePage: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'
  },
  button: {
    fontSize: 32,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 15,
    marginTop: 100,
    backgroundColor: '#2AB1E3'
  },
  modal: {
    backgroundColor: '#565656',
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.7,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: (Dimensions.get('window').width * 0.3) / 2,
    marginVertical: Dimensions.get('window').height / 4
  },
  container: {
    margin: 5,
    padding: 8,
    backgroundColor: '#636363',
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeContainer: {
    margin: 5,
    padding: 8,
    backgroundColor: '#636363',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  taskNameContainer: {
    margin: 5,
    padding: 8,
    backgroundColor: '#636363',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  },
  loginPageContainer: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop:
      StatusBar.currentHeight + Dimensions.get('window').height * 0.06,
    paddingLeft: Dimensions.get('window').width * 0.1
  },
  timeRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.6
  },
  buttonRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.6
  },
  timeButtonRow: {
    margin: 3,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  timeButtonColumn: {},
  taskTag: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00ADFE',
    padding: 5
  },
  classTag: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFC700',
    paddingHorizontal: 5
  },
  chooseTimeButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00ADFE',
    padding: 5,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  toolbar: {
    alignSelf: 'stretch',
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    paddingVertical: 10
  },
  task: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(204, 204, 204, 0.6)',
    borderBottomWidth: 1
  },
  dayHeading: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderBottomColor: 'rgba(204, 204, 204, 0.6)',
    borderBottomWidth: 1,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  dayHeadingDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  tasksList: {
    alignSelf: 'stretch'
  },
  timeRecommendation: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#04D400',
    padding: 3,
    color: '#FFFFFF',
    margin: 2,
    fontSize: 12
  },
  emailTextBox: {
    marginTop: Dimensions.get('window').height * 0.14,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    width: Dimensions.get('window').width * 0.8,
    fontSize: 25,
    color: '#EEEEEE',
    padding: 10
  },
  passwordTextBox: {
    marginTop: Dimensions.get('window').height * 0.03,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    width: Dimensions.get('window').width * 0.8,
    fontSize: 25,
    color: '#EEEEEE',
    padding: 10
  },
  //Direction
  row: {
    flexDirection: 'row'
  },
  // Icons
  bigIcon: {
    width: 20,
    height: 20
  },
  smallIcon: {
    width: 15,
    height: 15
  },
  // Sidebar
  sidebarContainer: {
    backgroundColor: '#3C3C3C',
    flex: 1,
    width: Dimensions.get('window').width * 0.6
  },
  sidebarHeading: {
    color: '#DDDDDD',
    fontWeight: '100',
    fontSize: 30
  },
  sidebarText: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    color: '#FFFFFF',
    fontWeight: '100',
    fontSize: 27
  },
  sidebarRow: {
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#747474',
    borderBottomWidth: 2
  }
});

export default styles;
