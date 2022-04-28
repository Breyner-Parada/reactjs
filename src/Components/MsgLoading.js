import React from "react";
import '../StyleComponents/MsgLoading.css'

export function MsgLoading(){
    return(
        <>
            <p className="msgLoading">Estamos cargando, no desesperes....</p>
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>   
        </>
    );
}