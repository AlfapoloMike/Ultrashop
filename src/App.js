import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import Routes from "./routes/Routes";
import * as userActions from "./redux/user/user-actions";
import { useEffect } from "react";

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => unsuscribe();
  }, [dispatch]);


  return (
    <>
      <Navbar></Navbar>
      <Routes></Routes>
    </>
  );
}

export default App;
