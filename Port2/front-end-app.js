// template_j0ofy5d
// service_myn19k1
// LrIR6_ub3lnb16FdH

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modaloverlay-loading');
    const success = document.querySelector('.modal-overlay-success');
    loading.classList += " modal-overlay-visable";
    emailjs
    .sendForm(
        'service_myn19k1',
        'template_j0ofy5d',
        event.target,
        'LrIR6_ub3lnb16FdH'
    ).then(() => {
         loading.classList.remove("modal-overlay-visable");
        success.classList += " modal-overlay-visable";
    }).catch(() => {
        loading.classList.remove("modal-overlay-visable");
        alert("The email service is temporarily unavalible. Please contact me directly on email ethgon19@gmail.com")
    })



}
let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        

        return document.body.classList.remove("modal-open")
       
    }
    isModalOpen = true;
    document.body.classList += " modal-open"
}