addEventListener('DOMContentLoaded', () => {
    const btnmenu = document.querySelector('.btn-menu')
    if(btnmenu) {
        btnmenu.addEventListener('click', () => {
            const navg = document.querySelector('.nav')
            navg.classList.toggle('show')
        })
    }
})
