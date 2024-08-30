//contac form integration
const scriptURL = 'https://script.google.com/macros/s/AKfycbyGo_xoXrARvpJWegahHN5JxuNAWx2uXBHYS3JgqHSt_iig3QwoI0pjgdLgi_gSmDlsAQ/exec'

const form = document.forms['rv-contact-form']
const myAlert=document.querySelector('.pesan-alert')
const btnLoad=document.querySelector('.btn-load')
const btnKirim=document.querySelector('.btn-kirim')

form.addEventListener('submit', e => {
  e.preventDefault()
  //show load btn then eliminate kirim btn
  btnLoad.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      //d-none load btn n then munculkan kirim btn
      btnKirim.classList.toggle('d-none')
      btnLoad.classList.toggle('d-none')

      //show alert
      myAlert.classList.toggle('d-none')

      //reset form
      form.reset()

      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
});

//Aos area


//project
const projectImg=document.querySelectorAll('.img-project')
projectImg.forEach((img,i)=>{
    img.dataset.aos='fade-down';
    img.dataset.aosDelay=i*100;
    img.dataset.aosDuration=1000;
});

gsap.from('.jumbotron img',{duration:1, rotateY:360,opacity:0});