'use client'
import Login from "@/components/Login";
import './Modal.css'
import { useEffect, useRef } from "react";

export default function Page() {

    const dialog = useRef<HTMLDialogElement>(null);
  
    useEffect(() => {
        if(dialog.current) 
        dialog.current.showModal();
    }, [dialog]);
    
    return (
        <>
            <dialog ref={dialog} className="backdrop:bg-black/80">
            <Login />
            </dialog>
        </>)
};