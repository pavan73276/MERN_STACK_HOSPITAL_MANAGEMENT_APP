import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Zeecare is a premier healthcare institution dedicated to providing comprehensive, 
          patient-centered care. With a team of highly skilled physicians, nurses, and support staff, 
          we offer a wide range of medical services, from routine check-ups to complex surgeries. 
          Our state-of-the-art facilities and commitment to medical excellence ensure that our patients 
          receive the highest quality care possible.



          </p>
          <p>We are all in 2024!</p>
          
          <p>
          Our aim is to be a trusted and innovative leader in healthcare, 
          providing compassionate care, fostering a culture of excellence, 
          and contributing to the health and well-being of our community.


          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
