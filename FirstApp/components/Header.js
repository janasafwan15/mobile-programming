import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍 MY SHOP</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{props.itemsCount} Items</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal:70,
    backgroundColor: '#FEEBE7',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  badge: {
    backgroundColor: '#FF6B6B',
    padding:12,
    borderRadius: 20,
    marginLeft:60
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});