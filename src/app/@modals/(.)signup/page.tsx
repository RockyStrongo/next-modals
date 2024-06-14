'use client'
import Login from "@/components/Login";
import Signup from "@/components/SignUp";
import { Dialog } from "@mui/material";
import Modal from "@mui/material/Modal";

export default function Page() {
    return <div>
        <Dialog open>
            <Signup/>
        </Dialog>
    </div>;
};
