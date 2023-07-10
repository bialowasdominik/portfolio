export const downloadCv = () => {
    fetch('Dominik_Białowąs_CV.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Dominik_Białowąs_CV.pdf';
            alink.click();
        })
    })
}