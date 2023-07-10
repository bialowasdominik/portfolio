import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../model/ContactForm';
import { sendEmail } from '../utils/EmailSender';
import { Toast } from 'primereact/toast';
import { AppSettings } from '../utils/AppSettings';
import { downloadCv } from '../utils/FileDownloader';

const Contact = () => {
    const [formData,setFromData] = useState<ContactForm>(new ContactForm());
    const [loadingButton, setLoadingButton] = useState<boolean>(false);
    const toast = useRef<Toast>(null);
    const { t } = useTranslation();

    const submit = () => {
        setLoadingButton(true);
        sendEmail(formData)
        .then(result => {
            setLoadingButton(false);
            toast.current?.show(result);
        })
        .finally(()=>{
            setLoadingButton(false);
        })
    }

    return (
        <div className='flex-column justify-content-center w-full h-full'>
            <h1 className='text-5xl uppercase text-center'>{t(`contact.header` as const)}</h1>
            <hr className='mb-6 w-3' />
            <div className='flex flex-wrap justify-content-center gap-6'>
                <div className='flex flex-column gap-3 surface-0 p-5 shadow-3 border-round-2xl text-center w-3 min-w-max'>
                    <h2>{t(`contact.messageHeader` as const)}</h2>
                    <InputText onChange={(e)=>setFromData({...formData,name:e.target.value})} placeholder={t(`contact.messageName` as const)!} className='w-full' style={{ fontFamily: 'Lora' }} />
                    <InputText onChange={(e)=>setFromData({...formData,email:e.target.value})} placeholder='E-mail' className='w-full' style={{ fontFamily: 'Lora' }} />
                    <InputTextarea onChange={(e)=>setFromData({...formData,message:e.target.value})} autoResize placeholder={t(`contact.messageContent` as const)!} className='w-full' rows={5} cols={30} style={{ fontFamily: 'Lora' }} />
                    <Button onClick={submit} loading={loadingButton} type='submit' style={{ background: 'linear-gradient(90deg, rgba(249,130,49,1) 0%, rgba(251,161,34,1) 50%)', border: '0', color: 'white' }} rounded label={t(`contact.messageSend` as const)!} icon={"pi pi-send"} />
                </div>
                <div className='flex flex-column gap-3 surface-0 p-5 shadow-3 border-round-2xl text-center justify-content-between w-3 min-w-max'>
                    <div className=''>
                        <h2>{t(`contact.details` as const)}</h2>
                        <p className='flex flex-column text-lg gap-2'>
                        <span><i className={"mr-2 pi "+AppSettings.MAP_PIN_ICON}/>{t(`contact.place` as const)}</span>
                            <span><i className={"mr-2 pi "+AppSettings.USER_ICON}/>Dominik Białowąs</span>
                            <span><i className={"mr-2 pi "+AppSettings.ENVELOPE_ICON}/>bialowasdominik@gmail.com</span>
                            <span><i className={"mr-2 pi "+AppSettings.GITHUUB_ICON}/>github.com/bialowasdominik</span>
                            <span><i className={"mr-2 pi "+AppSettings.LINKEDIN_ICON}/>linkedin.com/in/bialowasdominik</span>
                        </p>
                    </div>
                    <h2>{t(`contact.or` as const)}</h2>
                    <Button onClick={downloadCv} style={{ background: 'linear-gradient(90deg, rgba(249,130,49,1) 0%, rgba(251,161,34,1) 50%)', border: '0', color: 'white' }} rounded label={t(`contact.CV` as const)!} icon={'pi '+ AppSettings.DOWNLOAD_ICON} />
                </div>
            </div>
            <Toast ref={toast} />
        </div>
    );
}

export default Contact;