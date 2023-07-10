import { ContactForm } from "../model/ContactForm";
import emailjs from '@emailjs/browser';
import { AppSettings } from "./AppSettings";
import { ToastMessage } from "primereact/toast";
import { t } from "i18next";

export const sendEmail = async(data: ContactForm) => {
    let status:ToastMessage = {};
    await emailjs
        .send(AppSettings.EMAIL_SERVICE_ID, AppSettings.EMAIL_TEMPLATE_ID, {name: data.name, email: data.email, message: data.message} , AppSettings.EMAIL_PUBLIC_KEY)
        .then(()=>{
            status = { severity: 'success', summary: t(`toast.success.header` as const), detail: t(`toast.success.message` as const)};
        },()=>{
            status = { severity: 'error', summary: t(`toast.error.header` as const), detail: t(`toast.error.message` as const)};
        })
    return status;
}