"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/config";
import Loading from "@/app/components/Loading";
import { getUsernameFromUserId } from "@/firebase/auth";
import { toast } from "sonner";

const auth = getAuth(firebaseApp);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && !user.displayName) {
      async function loadUsername() {
        const { username, error } = await getUsernameFromUserId(user.uid);
        if (error) {
          toast.error(error.message);
        } else {
          setUsername(username || "User");
        }
      }
      loadUsername();
    } else {
      setUsername(user?.displayName);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, username }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
