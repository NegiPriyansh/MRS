import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { addUser,removeUser } from "../../utils/Redux/UserSlice";

const AuthCheck = () => {

    const dispathc = useDispatch();
    const navigate = useNavigate();
    const select = useSelector((Store)=>Store?.Video)


    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email} = user;
                dispathc(addUser({
                    uid:uid,
                    email:email
                }))
                
                
                // ...
            } else {
                // User is signed out
                // ...
                dispathc(removeUser())
                navigate('/')
            }
        });
        return ()=>unsubscribe();
    }, [])


}


export default AuthCheck;