import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
          const user = result.user;
          console.log(user);
          setAuthToken(user);
       
        })
        .catch(err=>console.error(err))
    } 

    return (
      <div className="text-center">
        <p className="text-center">
         
          <button className="text-5xl pt-5" onClick={handleGoogleSignIn}>
            <FcGoogle />
          </button>
        </p>
      </div>
    );
};

export default SocialLogin;