import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Profile() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1094108848/photo/hosteria-pehoe-at-torres-del-paine-national-park-torres-del-paine-national-park-chile.jpg?s=612x612&w=0&k=20&c=SLTLLmwhQBkaz24zuRCshFRqrc7eqLuCTr4Hc4OmUDw=',
            width: '100%',
            height: 300,
          }}
        />

        <View style={styles.profileContainer}>
          <View>
            <View style={styles.profileImageView}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://i.pinimg.com/originals/76/54/1f/76541ffd85c163f774f518a68759abb4.png',
                }}
              />

              <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: 10}}>
                momo
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 4,
                  color: '#333',
                  // width: '100%',
                }}>
                모모 (MOMO)
              </Text>
            </View>

            <View style={styles.countsView}>
              <View style={styles.countView}>
                <Text style={styles.countNum}>20</Text>
                <Text style={styles.countText}>Posts</Text>
              </View>

              <View style={styles.countView}>
                <Text style={styles.countNum}>10 M</Text>
                <Text style={styles.countText}>Followers</Text>
              </View>

              <View style={styles.countView}>
                <Text style={styles.countNum}>0</Text>
                <Text style={styles.countText}>Following</Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnText}>Follow</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.followBtn,
                  backgroundColor: '#fff',
                  borderWidth: 2,
                  borderColor: '#5d55ec',
                }}>
                <Text
                  style={{
                    ...styles.followBtnText,
                    color: '#5d55ec',
                  }}>
                  Message
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal: 20, marginTop: 10}}>
              <Text>
                Followed by <Text style={{fontWeight: 'bold'}}>jypjihyo</Text>{' '}
                and <Text>sana</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#fff',
    marginTop: -100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImageView: {
    alignItems: 'center',
    marginTop: -75,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
  },
  countsView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  countView: {
    flex: 1,
    alignItems: 'center',
  },
  countNum: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countText: {
    color: '#333',
    fontSize: 16,
  },
  followBtn: {
    backgroundColor: '#5d55ec',
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 4,
  },
  followBtnText: {
    fontSize: 16,
    color: '#fff',
  },
});
