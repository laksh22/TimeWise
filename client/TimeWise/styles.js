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
    flex: 1
  },
  // Text
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
  text: {
    color: '#FFFFFF'
  },
  // Containers
  modal: {
    backgroundColor: '#565656',
    borderRadius: 20,
    width: Dimensions.get('window').width * 0.7,
    alignItems: 'center',
    padding: 10
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
  buttonRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.6
  },
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
  toolbar: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    flex: 1,
    right: 0,
    left: 0,
    paddingTop: StatusBar.currentHeight
  },
  task: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(204, 204, 204, 0.6)',
    borderBottomWidth: 1,
    borderTopColor: 'rgba(204, 204, 204, 0.6)',
    borderTopWidth: 1
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
  }
});

export default styles;
