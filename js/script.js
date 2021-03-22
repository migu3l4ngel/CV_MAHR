addEventListener('DOMContentLoaded', () => {
    const btnmenu = document.querySelector('.btn-menu')
    const btncerrar = document.querySelector('.btn-exit')
    if(btnmenu) {
        btnmenu.addEventListener('click', () => {
            const navg = document.querySelector('.nav')
            navg.classList.toggle('show')
        })
    }
})

