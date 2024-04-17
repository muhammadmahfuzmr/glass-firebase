import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return ( 
        <div>
            <button onClick={handleGoogleLogin} className="btn"> Google</button>
        </div>
    );
};

export default SocialLogin;