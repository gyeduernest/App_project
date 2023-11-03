import React from "react";
import { useNavigate } from "react";
import {signOut} from 'firebase/auth';
import { auth } from "./firebase";

export const  Logout = () => {

  const navigate = useNavigate();

  const Signout = () => {
    signOut(auth).then(() =>  {

      navigate("/");
    })
  }

    return(
      <div>
        <button className="w-40 h-5 bg-slate-300 text-red-300"onChange={Signout}></button>
      </div>
    )

}

