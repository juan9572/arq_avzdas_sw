import Swal from "sweetalert2";
import React from "react";
import { useRouter } from "next/navigation";

// icon: 'success' | 'error' | 'warning' | 'info' | 'question'
// Close alert is a function that execute when user click on button
export default function Alert({
    icon,
    title,
    text,
    location,
    closeAlert,
    confirmButtonText,
    secondButtonText,
    handleSecondButton,
}) {
    const routes = useRouter();
    const Alerta = () => {
        Swal?.fire({
            icon: `${icon}`,
            title: `${title}`,
            text: `${text}`,
            confirmButtonText: confirmButtonText || "Continue",
            showCancelButton: secondButtonText ? true : false,
            cancelButtonText: secondButtonText || "Cancel",
        })?.then((res) => {
            if (res.isConfirmed) {
                closeAlert && closeAlert();
                location && routes.push(location);
                !location && routes.push("/");
            }
            if (res.isDismissed) {
                handleSecondButton && handleSecondButton();
            }
        });
    };

    return (
        <div>
            <div>{Alerta()}</div>
        </div>
    );
}
