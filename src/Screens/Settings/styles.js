import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00e0ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#292929',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
