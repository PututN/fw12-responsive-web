if (window.location.href.endsWith('viewAll.html')) {
    feather.replace()
    const dataListMovie = [
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
            {
                picture : 'assets/img-icon4.png',
                title : 'Black Widow',
                genre : 'Action, Adventure, Sci-Fi',
            },
        ]
        const gridListMovie = document.getElementById('gridListMovie');
        dataListMovie.forEach((data) => {
            const wrapTop = document.createElement('div');
            wrapTop.className = 'grid-listmovie-wraptop';
            gridListMovie.appendChild(wrapTop);

            const upIcon = document.createElement('div');
            upIcon.className = 'up-icon';
            wrapTop.appendChild(upIcon);

            const imgListMovie = document.createElement('img');
            imgListMovie.setAttribute('src', data.picture);
            upIcon.appendChild(imgListMovie);

            const titleListMovie = document.createElement('h5');
            titleListMovie.innerHTML = data.title;
            upIcon.appendChild(titleListMovie);

            const genreListMovie = document.createElement('p');
            genreListMovie.innerText = data.genre;
            upIcon.appendChild(genreListMovie);

            const iconDetail = document.createElement('div');
            iconDetail.className = 'icon-detail';
            upIcon.appendChild(iconDetail);

            const linkDetail= document.createElement('a');
            linkDetail.setAttribute('href', 'movieDetails.html');
            iconDetail.appendChild(linkDetail);

            const btnDetail =  document.createElement('button');
            btnDetail.className = 'icon-detail-button'
            btnDetail.type = 'submit';
            btnDetail.innerText ='Details'
            linkDetail.appendChild(btnDetail);

        })

} else if (window.location.href.endsWith('homepage2.html')) {
    feather.replace()

    const imageNowShowing = [
    {
        picture: "assets/img-icon1.png",
        title: 'Spider-Man:Homecoming',
        genre : 'Acion, Adventure, Sci-FI',
    },
    {
        picture: "assets/img-icon2.png",
        title: 'The Lion King',
        genre : 'Animation, Drama, Adventure',
    },
    {
        picture: "assets/img-icon3.png",
        title: 'John Wick',
        genre : 'Drama, Action, Crime',
    },
    {
        picture: "assets/img-icon4.png",
        title: 'Black Widow',
        genre : 'Action, Adventure, Sci-Fi',
    },
    {
        picture: "assets/img-icon5.png",
        title: 'The Witches',
        genre : 'Adventure, Comedy, Family',
    },
    ];
    const elementNowShowing = document.getElementById('imgNowShowing');
    imageNowShowing.forEach((data) => {
        const imgContent = document.createElement('div');
        imgContent.className = "img-content";
        elementNowShowing.appendChild(imgContent);

        const picture = document.createElement('div');
        picture.className = "picture";
        imgContent.appendChild(picture);

        const image = document.createElement('img');
        picture.appendChild(image);
        image.setAttribute('src', data.picture);

        const descriptionPicture = document.createElement('div');
        descriptionPicture.className = "description-picture";
        imgContent.appendChild(descriptionPicture);

        const dropDown = document.createElement('div');
        dropDown.className = "dropdown";
        descriptionPicture.appendChild(dropDown);

        const title = document.createElement('h5');
        title.innerHTML = data.title;
        dropDown.appendChild(title);

        const genre = document.createElement('p');
        genre.innerText = data.genre;
        dropDown.appendChild(genre);

        const wrapBtn = document.createElement('div');
        dropDown.appendChild(wrapBtn);

        const linkDetail = document.createElement('a');
        linkDetail.setAttribute('href', 'movieDetails.html')
        wrapBtn.appendChild(linkDetail);

        const btnDetail = document.createElement('button');
        btnDetail.className = "btn-dropdown";
        btnDetail.innerHTML ="Details"
        linkDetail.appendChild(btnDetail);

        
    });
    
    const imageUpComingMovie = [
    {
        picture: "assets/img-icon4.png",
        title: 'Black Widow',
        genre : 'Action, Adventure, Sci-Fi',
    },
    {
        picture: "assets/img-icon5.png",
        title: 'The Witches',
        genre : 'Adventure, Comedy, Family',
    },
    {
        picture: "assets/img-icon6.png",
        title: 'Tenet',
        genre : 'Action, Sci-Fi',
    },
    {
        picture: "assets/img-icon4.png",
        title: 'Black Widow',
        genre : 'Action, Adventure, Sci-Fi',
    },
    {
        picture: "assets/img-icon5.png",
        title: 'The Witches',
        genre : 'Adventure, Comedy, Family',
    },
    ];
    const upComingMovie = document.getElementById('upComingMovie');
    imageUpComingMovie.forEach((data) => {
        const upIconWrap = document.createElement('div');
        upIconWrap.className = "up-icon";
        upComingMovie.appendChild(upIconWrap);

        const imgUpComingMovie = document.createElement('img');
        imgUpComingMovie.setAttribute('src', data.picture);
        upIconWrap.appendChild(imgUpComingMovie);

        const title = document.createElement('h5');
        title.innerHTML = data.title;
        upIconWrap.appendChild(title);

        const genre = document.createElement('p');
        genre.innerText = data.genre;
        upIconWrap.appendChild(genre);

        const btnWrap = document.createElement('div');
        btnWrap.className = 'icon-detail'
        upIconWrap.appendChild(btnWrap);

        const elementLink = document.createElement('a');
        elementLink.setAttribute('href', 'movieDetails.html')
        btnWrap.appendChild(elementLink);

        const btnDetail = document.createElement('button');
        btnDetail.className = 'icon-detail-button'
        btnDetail.innerHTML = 'Details'
        btnDetail.type = 'submit'
        elementLink.appendChild(btnDetail);
    }
    )
} else if(window.location.href.endsWith('Index.html')) {
    const imageNowShowing = [
        {
            picture: "assets/img-icon1.png"
        },
        {
            picture: "assets/img-icon2.png"
        },
        {
            picture: "assets/img-icon3.png"
        },
        {
            picture: "assets/img-icon1.png"
        },
        {
            picture: "assets/img-icon2.png"
        },           
    ];
    const elementImgNowShowing = document.getElementById('imgNowShowing');
    imageNowShowing.forEach((data) => {
        const elementImgContent = document.createElement('div')
        elementImgNowShowing.appendChild(elementImgContent)
        elementImgContent.className = "img-content"
        
        const elementImg = document.createElement('img')
        elementImgContent.appendChild(elementImg)
        elementImg.setAttribute("src", data.picture)
    }
    )
    
    const imageUpComingMovie = [
        {
            picture : "assets/img-icon4.png",
            title : 'Black Widow',
            genre : 'Action, Adventure, Sci-Fi'
        },
        {
            picture : "assets/img-icon5.png",
            title : 'The Witches',
            genre : 'Adventure, Comedy, Family'
        },
        {
            picture : "assets/img-icon6.png",
            title : 'Tenet',
            genre : 'Action, Sci-Fi'
        },
        {
            picture : "assets/img-icon4.png",
            title : 'Black Widow',
            genre : 'Action, Adventure, Sci-Fi'
        },
        {
            picture : "assets/img-icon5.png",
            title : 'The Witches',
            genre : 'Adventure, Comedy, Family'
        },
    ]
    const elementUpComingMovie = document.getElementById('upComingMovie')
    imageUpComingMovie.forEach((data) => {
        const elementUpIcon= document.createElement('div');
        elementUpComingMovie.appendChild(elementUpIcon);
        elementUpIcon.className = "up-icon";

        const elementImgUpComing = document.createElement('img');
        elementUpIcon.appendChild(elementImgUpComing);
        elementImgUpComing.setAttribute('src', data.picture);

        const elementTitle = document.createElement('h5');
        elementUpIcon.appendChild(elementTitle);
        elementTitle.innerHTML = data.title;


        const elementGenre= document.createElement('p');
        elementUpIcon.appendChild(elementGenre);
        elementGenre.innerText = data.genre;

        const elementBtnDetail = document.createElement('div');
        elementUpIcon.appendChild(elementBtnDetail);
        elementBtnDetail.className = "icon-detail";

        const elLink = document.createElement('a');
        elLink.setAttribute("href", 'movieDetails.html')
        elementBtnDetail.appendChild(elLink);

        const btnDetail = document.createElement('button');
        btnDetail.innerHTML = "Details"
        btnDetail.type = "submit"
        btnDetail.className = "icon-detail-button"
        elLink.appendChild(btnDetail)
    }
    )
} else if(window.location.href.endsWith('signIn.html')) {
    feather.replace()
    //make variable for js
    const elementEmail = document.getElementById('email');
    const elementPassword = document.getElementById('password');
    const elementForm = document.getElementById('form-login')
    const elementAlert = document.createElement("div")
    const styleAlert = elementAlert.style
    const iconEye = document.getElementById('eye')
    elementForm.addEventListener('submit', (event) => { //ketika di submit akan menjalanjan fungsi
        event.preventDefault()
        if (elementEmail.value === "admin@tickitz.com" && elementPassword.value === "12345") {
            elementForm.appendChild(elementAlert) //appendChild digunakan untuk menambahkan child diakhir sebuah parent (elemntForm)
            elementAlert.innerHTML = "Login Success"
            styleAlert.color = "black"
            styleAlert.textAlign = 'center'
            styleAlert.background = '#B6E2A1'
            styleAlert.border = "2px solid black"
            styleAlert.padding = "3px"
            styleAlert.fontWeight = "900"
            styleAlert.borderRadius = "10px"
            setInterval(() => {
                window.location.href = "homepage2.html"
            }, 3000
            )
        } else {
            elementForm.appendChild(elementAlert) //appendChild digunakan untuk menambahkan child diakhir sebuah parent (elemntForm)
            elementAlert.innerHTML = "Login Failed"
            styleAlert.color = "black"
            styleAlert.textAlign = 'center'
            styleAlert.background = '#F7A4A4'
            styleAlert.border = "2px solid black"
            styleAlert.padding = "3px"
            styleAlert.fontWeight = "900"
            styleAlert.borderRadius = "10px"
            setTimeout(() => {
                elementAlert.remove()
            }, 3000)
        }
    }
    )
    iconEye.addEventListener('click', (event) =>{ //membuat kondisi eye ketika diklik berubah icon dan merubah form type password menjadi type text
        if (elementPassword.type === 'password') {
            iconEye.classList.remove('fa-eye') 
            iconEye.classList.add('fa-eye-slash') 
            elementPassword.type = "text"
            // console.log(iconEye)
        } 
        else {
            iconEye.classList.remove('fa-eye-slash')
            iconEye.classList.add('fa-eye')
            elementPassword.type = "password"
            // console.log(iconEye)
        }
    } )
} else if (window.location.href.endsWith('signUp.html')) {
    feather.replace()
    const elementFirstName = document.getElementById('first-name');
    const elementLastName = document.getElementById('last-name');
    const elementPhoneNumber = document.getElementById('phone-number');
    const elementEmail = document.getElementById('email');
    const elementPassword = document.getElementById('password');
    const iconEye = document.getElementById('eye');
    
    iconEye.addEventListener('click', (event) =>{ //membuat kondisi eye ketika diklik berubah icon dan merubah form type password menjadi type text
            if (elementPassword.type === 'password') {
                iconEye.classList.remove('fa-eye') 
                iconEye.classList.add('fa-eye-slash') 
                elementPassword.type = "text"
                // console.log(iconEye)
            } 
            else {
                iconEye.classList.remove('fa-eye-slash')
                iconEye.classList.add('fa-eye')
                elementPassword.type = "password"
                // console.log(iconEye)
            }
        } )


}