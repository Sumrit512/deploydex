import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./WalletAnimation.json";

const WalletAnimation = () => {
    return (
        <div>
              <Lottie
        options={{
          animationData: groovyWalkAnimation,
          loop: true,
          autoplay: true,
        }}
      />;
        </div>
    )
}

export default WalletAnimation;