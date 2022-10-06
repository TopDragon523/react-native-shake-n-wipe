import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
// import Toast from 'react-native-toast-message';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth().onAuthStateChanged(
      async authenticatedUser => {
        console.log("========> o n s t a t t e c h a n g e d ");
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        if (authenticatedUser) {
          console.log("Auth User", authenticatedUser.email);
        } else {
          // setUserProfile(null);
          setUser(null);
        }
      }
    );
    // unsubscribe auth listener on unmount
    return () => {
      unsubscribeAuth();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: async (displayName, email, password) => {
          if (email !== '' && password !== '') {
            setLoading(true);
            try {
              await auth().signInWithEmailAndPassword(email, password)
                .then((resp) => console.log('Login success', resp))
                .catch(async (err) => {
                  console.log(`Login err: ${err}`)
                  if (err.toString().indexOf('auth/user-not-found') > -1) {
                    try {
                      await auth().createUserWithEmailAndPassword(email, password)
                        .then((credential) => {
                          console.log('=====>>>>', credential);
                          credential.user
                            .updateProfile({ displayName: displayName })
                        })
                    } catch (e) {
                      console.error(e);
                    }
                  }
                });
            } catch (e) {
              console.error(e);
            }
            setLoading(false);
          } else {
            // Toast.show({
            //   type: 'error',
            //   text1: 'Sorry',
            //   text2: 'Please enter user email and password.'
            // });
          }
        },
        register: async (displayName, email, password) => {
          setLoading(true);
          try {
            await auth().createUserWithEmailAndPassword(email, password)
              .then((credential) => {
                console.log('=====>>>>', credential);
                credential.user
                  .updateProfile({ displayName: displayName })
              })
          } catch (e) {
            console.error(e);
          }
          setLoading(false);
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
      {/* <Toast /> */}
    </AuthContext.Provider>
  )
}