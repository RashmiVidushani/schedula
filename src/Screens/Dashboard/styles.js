import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00e0ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  eventList: {
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#1f1f1f',
    padding: 14,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#00e0ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
