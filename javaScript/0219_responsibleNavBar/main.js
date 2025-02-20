// main.js for reponsibleNavBar.html

    const $inner = document.querySelector('.inner');
    const $header = document.querySelector('.header_wrap');
    const $navMenu = document.querySelector('.nav_menu');
    const $mobMenuBtn = document.querySelector('.mob_nav_btn');

    let count = 0;

    $mobMenuBtn.addEventListener('click', function(){

        count++;

        if(count % 2 == 1){
            this.style.transform = 'translateY(-50%) rotate(90deg)';
            $navMenu.classList.add('active');
            $inner.style.borderBottom = "1px solid rgb(119 136 153 / 0.3)";
        } else{
            this.style.transform = 'translateY(-50%) rotate(0deg)';
            $navMenu.classList.remove('active');
            $inner.style.border = "none";
        }
    })

    $header.addEventListener('mouseleave', function(){
        $mobMenuBtn.style.transform = 'translateY(-50%) rotate(0deg)';
        $navMenu.classList.remove('active');
        count++;
    })