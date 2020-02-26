<<<<<<< HEAD
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  text: {
    color: '#FFFFFF'
  }
});

export default styles;
||||||| merged common ancestors
=======
import { StyleSheet, Dimensions } from 'react-native';

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
    fontWeight: 'bold',
    fontSize: 30
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
>>>>>>> Create UI of task description modal
