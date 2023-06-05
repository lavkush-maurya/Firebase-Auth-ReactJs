import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  // Retrieve the googleSignIn function and user object from the UserAuth context
  const { googleSignIn, user } = UserAuth();
  // Get the navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Function to handle the Google sign-in button click
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
//https://github.com/lavkush-maurya
  useEffect(() => {
    // Check if the user object is not null
    if (user != null) {
      // If user is signed in, navigate to the '/account' route
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
      {/* Sign in heading */}
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        {/* Google sign-in button */}
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
