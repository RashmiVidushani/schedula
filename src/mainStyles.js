import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  // Container Layout
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // Headings
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Input Fields
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },

  // Buttons
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Event Card
  card: {
    backgroundColor: '#f0f4f8',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: '#666',
  },

  // List separator
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },

  // Action Row (Edit/Delete/Favorite)
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    padding: 8,
    backgroundColor: '#d1d5db',
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  actionText: {
    fontSize: 12,
    color: '#111',
  },

  // Error / Success messages
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
    fontSize: 14,
  },
});

export default mainStyles;
