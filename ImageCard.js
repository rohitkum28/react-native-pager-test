import React, { Component } from 'react'
import {
    View, 
    ImageBackground,
    StyleSheet
} from 'react-native'

// -------------------Props---------------------
// imageUrl;
// onWishlistClickHandler;
// onShareClickHandler;


class ImageCard extends Component {
   render() {
       return (
           <View>
               <ImageBackground 
                style={{width: '100%', height: '100%'}}
                source={{ uri: this.props.imageUrl }}
                resizeMode = 'stretch'
               >
                   {/* <View style={styles.wishlist}>
                        <Icon 
                        name="heart" 
                        size={25} 
                        color="red"
                        onPress={this.props.onWishlistClickHandler}
                        type = 'font-awesome'
                        />
                    </View>
                    <View style={styles.share}>
                        <Icon
                        name="share-alt" 
                        size={25} 
                        onPress={this.props.onShareClickHandler}
                        type = 'font-awesome'
                        color = 'grey'
                        />
                    </View> */}
               </ImageBackground>
           </View>
       )
   }
}

const styles = StyleSheet.create({
    wishlist: {
        position: "absolute",
        bottom: "5%",
        right: "15%"
  
    },
    share: {
        position: "absolute",
        bottom: "5%",
        right: "5%"
    }
});
export default ImageCard