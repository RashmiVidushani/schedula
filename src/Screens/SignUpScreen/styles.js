import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00e0ff',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1f1f1f',
    padding: 16,
    borderRadius: 12,
    color: '#fff',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00e0ff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ccc',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default styles;
