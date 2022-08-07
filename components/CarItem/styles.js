import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },

  titles: {
    marginTop: '20%',
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
  },

  carImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default styles;