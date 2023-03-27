'use strict'

const buy_btn = document.querySelectorAll('.buy')

buy_btn.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        location.href = './payment.html'
    })
})
