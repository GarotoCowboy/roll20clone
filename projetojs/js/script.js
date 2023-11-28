// menu.js
document.addEventListener("DOMContentLoaded", function () {
    // Carregar o conteúdo do menu
    var header = document.getElementById("header");

    // Verificar se o contêiner do menu existe na página
    if (header) {
        // Carregar o conteúdo do menu.html no contêiner do menu
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "header.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                header.innerHTML = xhr.responseText;

                // Destacar o item do menu correspondente à página atual
                highlightCurrentPage();
                setupMenuClickEvent();
                abrirTelaLogin()

            }
        };
        xhr.send();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Carregar o conteúdo do form login
    var containerLogin = document.getElementsByClassName("containerLogin");

    // Verificar se o contêiner do menu existe na página
    if (containerLogin) {
        // Carregar o conteúdo do menu.html no contêiner do menu
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "form-login.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                header.innerHTML = xhr.responseText;

                // Destacar o item do menu correspondente à página atual
                highlightCurrentPage();
                setupMenuClickEvent();
                abrirTelaLogin()
            }
        };
        xhr.send();
    }
});

// function highlightCurrentPage() {
//     // Sua implementação para destacar a página atual no menu
//     // ...

//      // Obtém a URL da página atual
//      var currentPageUrl = window.location.href;

//      // Obtém todos os links no menu
//      var menuLinks = document.querySelectorAll('#header a');
 
//      // Itera sobre os links do menu
//      menuLinks.forEach(function (link) {
//          // Obtém a URL do link atual no menu
//          var linkUrl = link.href;
 
//          // Verifica se a URL da página atual corresponde à URL do link no menu
//          if (currentPageUrl === linkUrl) {
//              // Aplica algum destaque ao link, por exemplo, adicionando uma classe CSS
//              link.classList.add('active');

//              highlightCurrentPage();
//                 setupMenuClickEvent();
//          }
//      });
// }


function abrirTelaLogin(){
document.querySelector('#login-btn').onclick = ()=>{
    document.querySelector(".containerLogin").classList.toggle('active')
}

}


function setupMenuClickEvent() {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    console.log(menu);
    
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
      grabCursor:true,
      centeredSlides:true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
