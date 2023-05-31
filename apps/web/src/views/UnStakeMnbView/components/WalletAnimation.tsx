import React from 'react';
import Lottie from "lottie-react-web";
import groovyWalkAnimation from "./WalletAnimation.json";

const WalletAnimation = () => {
    return (
        <div style={{display: "flex"}}> 
              <Lottie
              style={{
                marginRight: "0 auto"
              }}
        options={{
          animationData: groovyWalkAnimation,
          loop: true,
          autoplay: true,
        }}
      />
        </div>
    )
}

export default WalletAnimation;