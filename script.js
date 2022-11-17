if (window.location.href.endsWith('viewAll.html') || window.location.href.endsWith('viewall')) {
    feather.replace()
    const dataListMovie = [ //data array of object
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: 'assets/img-icon4.png',
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
    ]
    const gridListMovie = document.getElementById('gridListMovie'); //memanggil id parent
    dataListMovie.forEach((data) => { //membuat for each untuk iterasi/perulangan memiliki callbackfuntion
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
        titleListMovie.innerText = data.title;
        upIcon.appendChild(titleListMovie);

        const genreListMovie = document.createElement('p');
        genreListMovie.innerText = data.genre;
        upIcon.appendChild(genreListMovie);

        const iconDetail = document.createElement('div');
        iconDetail.className = 'icon-detail';
        upIcon.appendChild(iconDetail);

        const linkDetail = document.createElement('a');
        linkDetail.setAttribute('href', 'movieDetails.html');
        iconDetail.appendChild(linkDetail);

        const btnDetail = document.createElement('button');
        btnDetail.className = 'icon-detail-button'
        btnDetail.type = 'submit';
        btnDetail.innerText = 'Details'
        linkDetail.appendChild(btnDetail);

    })

} else if (window.location.href.endsWith('homepage2.html') || window.location.href.endsWith('hompage2')) {
    feather.replace()
    //make data array of object
    const imageNowShowing = [
        {
            picture: "assets/img-icon1.png",
            title: 'Spider-Man:Homecoming',
            genre: 'Acion, Adventure, Sci-FI',
        },
        {
            picture: "assets/img-icon2.png",
            title: 'The Lion King',
            genre: 'Animation, Drama, Adventure',
        },
        {
            picture: "assets/img-icon3.png",
            title: 'John Wick',
            genre: 'Drama, Action, Crime',
        },
        {
            picture: "assets/img-icon4.png",
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi',
        },
        {
            picture: "assets/img-icon5.png",
            title: 'The Witches',
            genre: 'Adventure, Comedy, Family',
        },
    ];
    //making variable for calling id HTML
    const elementNowShowing = document.getElementById('imgNowShowing');
    //iterate with data array of object
    imageNowShowing.forEach((data) => {
        //making element div
        const imgContent = document.createElement('div');
        //give element name
        imgContent.className = "img-content";
        //put div into parent
        elementNowShowing.appendChild(imgContent);

        const picture = document.createElement('div');
        picture.className = "picture";
        imgContent.appendChild(picture);

        const image = document.createElement('img');
        picture.appendChild(image);
        //set atribute for img using data array of object
        image.setAttribute('src', data.picture);

        const descriptionPicture = document.createElement('div');
        descriptionPicture.className = "description-picture";
        imgContent.appendChild(descriptionPicture);

        const dropDown = document.createElement('div');
        dropDown.className = "dropdown";
        descriptionPicture.appendChild(dropDown);

        const title = document.createElement('h5');
        //give title content using data array of object
        title.innerText = data.title;
        dropDown.appendChild(title);

        const genre = document.createElement('p');
        //give genre content using data array of object
        genre.innerText = data.genre;
        dropDown.appendChild(genre);

        const wrapBtn = document.createElement('div');
        dropDown.appendChild(wrapBtn);

        const linkDetail = document.createElement('a');
        linkDetail.setAttribute('href', 'movieDetails.html')
        wrapBtn.appendChild(linkDetail);

        const btnDetail = document.createElement('button');
        btnDetail.className = "btn-dropdown";
        btnDetail.innerText = "Details"
        linkDetail.appendChild(btnDetail);


    });

    //mengambil data dari id parent
    const elementUpComingMovie = document.getElementById('upComingMovie')
    //memanggil/import data di fetch
    //membuat variable untuk data API menggunakan fetch
    const dataMovie = fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ead1d8a314197c8be641efe9adeea96b&language=en-US&page=5')
    const dataGenre = fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ead1d8a314197c8be641efe9adeea96b&language=en-US')
    
    const getData = async () => { 
        //asyncronus bisa menjalankan perintah/kondisi tanpa perlu menunggu kode yang lain selesai
        
        //mengambil data dari variable
        const responMovie = await dataMovie
        const responGenre = await dataGenre

        const getMovie = await responMovie.json()
        const getGenre = await responGenre.json()

        getMovie.results.forEach((data) => {

            const elementUpIcon = document.createElement('div');
            elementUpComingMovie.appendChild(elementUpIcon);
            elementUpIcon.className = "up-icon";

            const elementImgUpComing = document.createElement('img');
            elementUpIcon.appendChild(elementImgUpComing);
            elementImgUpComing.setAttribute('src', 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + data.poster_path);

            const elementTitle = document.createElement('h5');
            elementUpIcon.appendChild(elementTitle);
            elementTitle.innerText = data.title;

            //mengambil id dari getMovie kemudian dipasangkan dengan getGenre
            const elementGenre = document.createElement('p');
            elementUpIcon.appendChild(elementGenre);
            data.genre_ids.forEach((id) => {
                getGenre.genres.forEach((genres) => {
                    if (id === genres.id) {
                        elementGenre.innerText = `${genres.name} ${elementGenre.innerText}`
                    }

                });


            })

            const elementBtnDetail = document.createElement('div');
            elementUpIcon.appendChild(elementBtnDetail);
            elementBtnDetail.className = "icon-detail";

            const elLink = document.createElement('a');
            elLink.setAttribute("href", 'movieDetails.html')
            elementBtnDetail.appendChild(elLink);

            const btnDetail = document.createElement('button');
            btnDetail.innerText = "Details"
            btnDetail.type = "submit"
            btnDetail.className = "icon-detail-button"
            elLink.appendChild(btnDetail)


        });

        console.log(getMovie)
        console.log(getGenre)

    }
    getData()

} else if (window.location.href.endsWith('Index.html') || window.location.href.endsWith('/')) {
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
            picture: "assets/img-icon4.png",
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi'
        },
        {
            picture: "assets/img-icon5.png",
            title: 'The Witches',
            genre: 'Adventure, Comedy, Family'
        },
        {
            picture: "assets/img-icon6.png",
            title: 'Tenet',
            genre: 'Action, Sci-Fi'
        },
        {
            picture: "assets/img-icon4.png",
            title: 'Black Widow',
            genre: 'Action, Adventure, Sci-Fi'
        },
        {
            picture: "assets/img-icon5.png",
            title: 'The Witches',
            genre: 'Adventure, Comedy, Family'
        },
    ]
    const elementUpComingMovie = document.getElementById('upComingMovie')
    imageUpComingMovie.forEach((data) => {
        const elementUpIcon = document.createElement('div');
        elementUpComingMovie.appendChild(elementUpIcon);
        elementUpIcon.className = "up-icon";

        const elementImgUpComing = document.createElement('img');
        elementUpIcon.appendChild(elementImgUpComing);
        elementImgUpComing.setAttribute('src', data.picture);

        const elementTitle = document.createElement('h5');
        elementUpIcon.appendChild(elementTitle);
        elementTitle.innerText = data.title;


        const elementGenre = document.createElement('p');
        elementUpIcon.appendChild(elementGenre);
        elementGenre.innerText = data.genre;

        const elementBtnDetail = document.createElement('div');
        elementUpIcon.appendChild(elementBtnDetail);
        elementBtnDetail.className = "icon-detail";

        const elLink = document.createElement('a');
        elLink.setAttribute("href", 'movieDetails.html')
        elementBtnDetail.appendChild(elLink);

        const btnDetail = document.createElement('button');
        btnDetail.innerText = "Details"
        btnDetail.type = "submit"
        btnDetail.className = "icon-detail-button"
        elLink.appendChild(btnDetail)
    }
    )
} else if (window.location.href.endsWith('signIn.html') || window.location.href.endsWith('signin')) {
    feather.replace()
    //making variabel.
    const elementEmail = document.getElementById('email');
    const elementPassword = document.getElementById('password');
    const elementForm = document.getElementById('form-login')
    const elementAlert = document.createElement("div")
    const styleAlert = elementAlert.style
    const iconEye = document.getElementById('eye')
    elementForm.addEventListener('submit', (event) => { //ketika di submit akan menjalanjan fungsi
        event.preventDefault() //untuk menghentikan action default
        if (elementEmail.value === "admin@tickitz.com" && elementPassword.value === "12345") {
            elementForm.appendChild(elementAlert) //appendChild digunakan untuk menambahkan child diakhir sebuah parent (elemntForm)
            elementAlert.innerText = "Login Success" //menambahkan alert ketika nilai true
            styleAlert.color = "black"
            styleAlert.textAlign = 'center'
            styleAlert.background = '#B6E2A1'
            styleAlert.border = "2px solid black"
            styleAlert.padding = "3px"
            styleAlert.fontWeight = "900"
            styleAlert.borderRadius = "10px"
            setInterval(() => {
                window.location.href = "homepage2.html" //membuat interval ketika login sukses kemudian move ke homepage2
            }, 3000
            )
        } else {
            elementForm.appendChild(elementAlert)
            elementAlert.innerText = "Login Failed" //menambahkan alert ketika nilai false
            styleAlert.color = "black"
            styleAlert.textAlign = 'center'
            styleAlert.background = '#F7A4A4'
            styleAlert.border = "2px solid black"
            styleAlert.padding = "3px"
            styleAlert.fontWeight = "900"
            styleAlert.borderRadius = "10px"
            setTimeout(() => {
                elementAlert.remove() //menghilangkan/timeout alert login failed selama 3 detik
            }, 3000)
        }
    }
    )
    //make eye password dinamis
    iconEye.addEventListener('click', (event) => { //membuat kondisi eye ketika diklik berubah icon dan merubah form type password menjadi type text
        event.preventDefault()
        if (elementPassword.type === 'password') { //mengganti eye-off ketika diklik dan merubah type password menjadi text
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
    })
} else if (window.location.href.endsWith('signUp.html') || window.location.href.endsWith('signup')) {
    feather.replace()
    const elementFirstName = document.getElementById('first-name');
    const elementLastName = document.getElementById('last-name');
    const elementPhoneNumber = document.getElementById('phone-number');
    const elementEmail = document.getElementById('email');
    const elementPassword = document.getElementById('password');
    const iconEye = document.getElementById('eye');

    iconEye.addEventListener('click', (event) => { //membuat kondisi eye ketika diklik berubah icon dan merubah form type password menjadi type text
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
    })


}