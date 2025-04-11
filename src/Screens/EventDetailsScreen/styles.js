import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212', // Dark background
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#1f1f1f', // Dark card background
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00e0ff', // Cyan accent color
  },
  date: {
    fontSize: 16,
    color: '#ccc', // Light gray text
    marginVertical: 5,
  },
  location: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 5,
  },
  details: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 5,
  },
  category: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 5,
  },
  creatorInfo: {
    fontSize: 16,
    color: '#ccc',
    marginVertical: 5,
  },
  actionButton: {
    backgroundColor: '#00e0ff', // Cyan button
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#121212', // Dark text on button
    fontWeight: 'bold',
    fontSize: 18,
  },
});
