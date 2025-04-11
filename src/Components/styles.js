import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creatorInfo: {
    marginTop: 10,
    fontSize: 14,
    color: '#ccc',
    fontStyle: 'italic',
    
  },  
  date:{
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 12,
    fontStyle: 'bold',
  },
  details: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: '#292929',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginTop: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00e0ff',
  },
  actionText: {
    color: '#00e0ff',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default styles;
