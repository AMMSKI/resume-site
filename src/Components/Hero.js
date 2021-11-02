import React from "react";

const Hero = () => {
  return(
    <div style={styles.heroDiv}>
      <div>
        <h1>Alan Mamulski</h1>
        <h3>Web Developer</h3>
      </div>
    </div>
  )
}

const styles = {
  heroDiv:{
    borderColor: 'black',
    border: '2px solid',
    height: '90vh',
    padding: '10px',
  }
}

export default Hero