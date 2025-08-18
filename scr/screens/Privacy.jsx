
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Privacy = () => {

  return (
    <View style={{ backgroundColor: 'black' ,height :'100%' , width:'100%' , justifyContent:'center',alignContent:'center' }}>
  <Text style={{fontSize:50,color:'white',fontFamily:'Calibri (Body)'}}>Privacy Policy</Text>
  
    <Text style={{color:'white'}}> SartePlus
Effective Date: 11 August 2025

SartePlus me hum aapki privacy ki respect karte hain aur aapki personal information ko secure rakhne ke liye committed hain. Ye policy batati hai ke hum aapka data kaise collect, use, aur protect karte hain.

1. Information Collection
Jab aap SartePlus use karte hain, hum kuch information collect kar sakte hain:

Account banane par: Name, Email address, Password.

App/Website usage data: Dekhi gayi movies/shows, search history.

Device information: Device model, IP address, operating system.

2. Use of Information
Hum aapki information ka use in purposes ke liye karte hain:

Aapke liye personalized recommendations dena.

Service improve karna aur bugs fix karna.

Legal compliance aur fraud prevention.

3. Data Sharing
Hum aapki personal information third-party ko bech nahi dete. Lekin kuch trusted service providers ke sath share kar sakte hain jo hosting, analytics, ya payment processing me help karte hain — bas service deliver karne ke liye.

4. Cookies and Tracking
SartePlus cookies ka use karta hai user experience improve karne ke liye, jaise ki login remember karna aur content recommendations dena.

5. Data Security
Hum industry-standard encryption aur security measures use karte hain taaki aapka data unauthorized access se safe rahe.

6. Children’s Privacy
SartePlus 13 saal se chhote bachon ke liye direct targeted nahi hai. Agar hume pata chale ke humne accidentally kisi child ka data collect kiya hai, to hum usay delete kar denge.

7. Changes to Policy
Kabhi kabhi hum privacy policy update kar sakte hain. Nayi policy app/website par post hote hi effective ho jayegi.

8. Contact Us
Privacy related sawalon ke liye humse contact karein:
📧 Email: support@sarteplus.com</Text>
    </View>
  )
}

export default Privacy

const styles = StyleSheet.create({})