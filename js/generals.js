// DARK MODE

const darkMode = () => {
	document.body.classList.toggle('darkMode');

	if (document.body.classList.contains('darkMode')) {
		localStorage.setItem('dark-mode', true);
	} else {
		localStorage.setItem('dark-mode', false);
	}
};

$switchThemeBtn.addEventListener('click', darkMode);

const setStorageTheme = () => {
	if (localStorage.getItem('dark-mode') == 'true') {
		document.body.classList.add('darkMode');
		$switchThemeBtn.textContent = 'Modo Diurno';
		$logo.src = 'assets/logo-mobile-modo-noct.svg';
		$crearGifBtn.src = 'assets/CTA-crar-gifo-modo-noc.svg';
		$burgerMenu.src = 'assets/burger-modo-noct.svg';
		$navbarSearchBtn.src = 'assets/icon-search-mod-noc.svg';
		$navbarSearchCloseBtn.src = 'assets/close-modo-noct.svg';
		$searchBtn.src = 'assets/icon-search-mod-noc.svg';
		$searchCloseBtn.src = 'assets/close-modo-noct.svg';
		$previousBtn.src = 'assets/button-slider-left-md-noct.svg';
		$nextBtn.src = 'assets/button-slider-right-md-noct.svg';
		$camera.src = 'assets/camara-modo-noc.svg';
		$pelicula.src = 'assets/pelicula-modo-noc.svg';
	} else {
		document.body.classList.remove('darkMode');
		$switchThemeBtn.textContent = 'Modo Nocturno';
	}
};

setStorageTheme();

// NAVBAR

const displayBurger = () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		if ($navbarList.classList.contains('hiddenMenu')) {
			$navbarList.classList.remove('hiddenMenu');
			$burgerMenu.src = 'assets/close-modo-noct.svg';
		} else {
			$navbarList.classList.add('hiddenMenu');
			$burgerMenu.src = 'assets/burger-modo-noct.svg';
		}
	} else {
		if ($navbarList.classList.contains('hiddenMenu')) {
			$navbarList.classList.remove('hiddenMenu');
			$burgerMenu.src = 'assets/close.svg';
		} else {
			$navbarList.classList.add('hiddenMenu');
			$burgerMenu.src = 'assets/burger.svg';
		}
	}
};

$burgerMenu.addEventListener('click', displayBurger);
$favoritosMenu.addEventListener('click', displayBurger);

$crearGifBtn.addEventListener('click', () => {
	$crearGifBtn.src = 'assets/CTA-crear-gifo-active.svg';
});

$crearGifBtn.addEventListener('mouseover', () => {
	$crearGifBtn.src = 'assets/CTA-crear-gifo-hover.svg';
});

$crearGifBtn.addEventListener('mouseout', () => {
	$crearGifBtn.src = 'assets/button-crear-gifo.svg';
});


function stickyNav() {
	if (document.documentElement.scrollTop > 600) {
		if (window.innerWidth < 1024) {
			$navbarSearchContainer.classList.add('hiddenBar');
		} else {
			$navbarSearchContainer.classList.remove('hiddenBar');
			$headerContainer.style.boxShadow =
				'0 9px 8px -10px rgba(148,147,147,0.9)';
		}
	} else {
		$navbarSearchContainer.classList.add('hiddenBar');
		$headerContainer.style.boxShadow = 'none';
	}
}

window.addEventListener('scroll', stickyNav);

const displayCreateSection = (event) => {
	event.preventDefault();
	$createGifSection.classList.remove('hidden');
	$gralContainers.classList.add('hidden');
	$favSection.classList.add('hidden');
    $trendingSection.classList.remove('trending');
	$trendingSection.classList.add('hidden');
	$misGifosSection.classList.add('hidden');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};


const displayMainSection = (event) => {
	event.preventDefault();
	$gralContainers.classList.remove('hidden');
	$misGifosSection.classList.add('hidden');
	$favSection.classList.add('hidden');
	$createGifSection.classList.add('hidden');
	$trendingSection.classList.remove('hidden');
    $trendingSection.classList.add('trending');
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

$crearGifosMenu.addEventListener('click', displayCreateSection);

$logoButton.addEventListener('click', displayMainSection);


// ACCIONES GIFS

let arrFavoriteGifs = [];

const addToFav = (gif, username, title) => {
	let objGif = {
		username: username,
		title: title,
		gif: gif
	};

	arrFavoriteGifs.push(objGif);

	localStorage.setItem('FavoriteGifs', JSON.stringify(arrFavoriteGifs));
	displayFavGifs();

    let iconFav = document.getElementById('fav' + title);
    iconFav.setAttribute("src", "./assets/icon-fav-active.svg");
    iconFav.setAttribute("class", "favActive");

};

const displayFavSection = (event) => {
	event.preventDefault();
	$gralContainers.classList.add('hidden');
	$misGifosSection.classList.add('hidden');
	$createGifSection.classList.add('hidden');
	$favSection.classList.remove('hidden');
	window.scrollTo({ top: 0, behavior: 'smooth' });
	displayFavGifs();

	if (arrFavoriteGifs == 0 || arrFavoriteGifs == null) {
		$noFavsContainer.classList.remove('hidden');
		$favContainer.classList.add('hidden');
	} else {
		$noFavsContainer.classList.add('hidden');
		$favContainer.classList.remove('hidden');
	}
};

const displayFavGifs = () => {
	$favContainer.innerHTML = '';

	arrFavoriteGifs = JSON.parse(localStorage.getItem('FavoriteGifs'));

	if (arrFavoriteGifs == null) {
		arrFavoriteGifs = [];
	} else {
		for (let i = 0; i < arrFavoriteGifs.length; i++) {
			const gifContainer = document.createElement('div');
			gifContainer.classList.add('gif__container');
			gifContainer.innerHTML = ` 
			<img class="gif" onclick="maximizeFavGif('${arrFavoriteGifs[i].gif}','${arrFavoriteGifs[i].username}','${arrFavoriteGifs[i].title}')" src="${arrFavoriteGifs[i].gif}" alt="${arrFavoriteGifs[i].title}">
		
			<div class="gifActions">
				<div class="gifActions__btn">
					<div class="btn remove" onclick="removeGif('${arrFavoriteGifs[i].gif}')">
                    <img src="assets/icon-trash-normal.svg" alt="icon-remove">
                    </div>
					<div class="btn download" onclick="downloadGif('${arrFavoriteGifs[i].gif}','${arrFavoriteGifs[i].title}')">
                    <img src="assets/icon-download.svg" alt="icon-download">
                    </div>
					<div class="btn maximize" onclick="maximizeFavGif('${arrFavoriteGifs[i].gif}','${arrFavoriteGifs[i].username}','${arrFavoriteGifs[i].title}')">
                    <img src="assets/icon-max-normal.svg" alt="icon-max"></div>
				</div>
				<div class="gif__info">
					<p class="gif_user">${arrFavoriteGifs[i].username}</p>
					<p class="gif_title">${arrFavoriteGifs[i].title}</p>
				</div>
			</div>
			`;
			$favContainer.appendChild(gifContainer);
		}
	}
};

$favoritosMenu.addEventListener('click', displayFavSection);

const displayMisGifosSection = (event) => {
	event.preventDefault();
	$misGifosSection.classList.remove('hidden');
	$gralContainers.classList.add('hidden');
	$favSection.classList.add('hidden');
	$createGifSection.classList.add('hidden');
    $trendingSection.classList.remove('trending');
	$trendingSection.classList.add('hidden');
    $navbarList.classList.add('hiddenMenu');
	window.scrollTo({ top: 0, behavior: 'smooth' });
	displayMiGifos();

	if (arrMyGifos == 0 || arrMyGifos == null) {
		$noGifContainer.classList.remove('hidden');
		$misGifosContainer.classList.add('hidden');
	} else {
		$noGifContainer.classList.add('hidden');
		$misGifosContainer.classList.remove('hidden');
	}
};
$misGifosMenu.addEventListener('click', displayMisGifosSection);

const displayMiGifos = () => {
	$misGifosContainer.innerHTML = '';

	arrMyGifos = JSON.parse(localStorage.getItem('MyGifs'));

	console.log(arrMyGifos);
	if (arrMyGifos == null) {
		arrMyGifos = [];
	} else {
		for (let i = 0; i < arrMyGifos.length; i++) {
			fetch(
				`${getGifByIdEndpoint}?ids=${arrMyGifos[i]}&api_key=${apiKey}`
			)
				.then((response) => response.json())
				.then((misGifosGiphy) => {
					console.log(misGifosGiphy);
					console.log(typeof misGifosGiphy.data[0].id);

					const gifContainer = document.createElement('div');
					gifContainer.classList.add('gif__container');
					gifContainer.innerHTML = `
					<img class="gif" src="${misGifosGiphy.data[0].images.original.url}" alt="Gif Creado por el usuario">

					<div class="gifActions">
						<div class="gifActions__btn">
							<div class="btn remove" onclick="removeMyGif('${misGifosGiphy.data[0].id}')">
                            <img src="assets/icon-trash-normal.svg" alt="icon-remove">
                            </div>
							<div class="btn download" onclick="downloadGif('${misGifosGiphy.data[0].images.original.url}','Gif')">
                            <img src="assets/icon-download.svg" alt="icon-download">
                            </div>
							<div class="btn maximize" onclick="maximizeFavGif('${misGifosGiphy.data[0].images.original.url}','User','Gif')">
                            <img src="assets/icon-max-normal.svg" alt="icon-max">
                            </div>
						</div>
						<div class="gif__info">
							<p class="gif_user">User</p>
							<p class="gif_title">Gif</p>
						</div>
					</div>
					`;
					$misGifosContainer.appendChild(gifContainer);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}
};


const downloadGif = async (url, title) => {
	let blob = await fetch(url).then((img) => img.blob());
	invokeSaveAsDialog(blob, title + '.gif');
};

const maximizeGif = (gif, username, title) => {
	$maximizedGifSection.classList.remove('hidden');
	$maximizedGifSection.classList.add('maximizedGif');
	$maximizedGifSection.innerHTML = '';
	const maximizedGifContainer = document.createElement('div');
	maximizedGifContainer.classList.add('maximizedGif__container');
	maximizedGifContainer.innerHTML = `
	<div class="close-btn" id="close-max-btn" onclick="closeMax()"></div>

	<div class="maxGif_Container">
		<img class="gifMax" src="${gif}" alt="${title}">
	</div>

	<div class="gifMaxActions">
		<div class="gif__info">
			<p class="gif_user">${username}</p>
			<p class="gif_title">${title}</p>
		</div>
		<div class="gifMaxActions__btn">
			<div class="buttonsMax favoriteMax" onclick="addToFav('${gif}', '${username}', '${title}')"></div>
			<div class="buttonsMax downloadMax" onclick="downloadGif('${gif}','${title}')"></div>
			</div>
	</div>`;
	$maximizedGifSection.appendChild(maximizedGifContainer);
};

const maximizeFavGif = (gif, username, title) => {
	$maximizedGifSection.classList.remove('hidden');
	$maximizedGifSection.classList.add('maximizedGif');
	$maximizedGifSection.innerHTML = '';
	const maximizedGifContainer = document.createElement('div');
	maximizedGifContainer.classList.add('maximizedGif__container');
	maximizedGifContainer.innerHTML = `
	<div class="close-btn" id="close-max-btn" onclick="closeMax()"></div>

	<div class="maxGif_Container">
		<img class="gifMax" src="${gif}" alt="${title}">
	</div>

	<div class="gifMaxActions">
		<div class="gif__info">
			<p class="gif_user">${username}</p>
			<p class="gif_title">${title}</p>
		</div>
		<div class="gifMaxActions__btn">
			<div class="buttonsMax removeMax" onclick="removeGif('${gif}')"></div>
			<div class="buttonsMax downloadMax" onclick="downloadGif('${gif}','${title}')"></div>
			</div>
	</div>`;
	$maximizedGifSection.appendChild(maximizedGifContainer);
};

const closeMax = () => {
	$maximizedGifSection.classList.add('hidden');
	$maximizedGifSection.classList.remove('maximizedGif');
};

const removeGif = (gif) => {
	let arrFavoriteParsed = JSON.parse(localStorage.getItem('FavoriteGifs'));
	console.log(arrFavoriteParsed);
	for (let i = 0; i < arrFavoriteParsed.length; i++) {
		if (arrFavoriteParsed[i].gif === gif) {
			arrFavoriteParsed.splice(i, 1);
			localStorage.setItem(
				'FavoriteGifs',
				JSON.stringify(arrFavoriteParsed)
			);
			displayFavSection(event);
			closeMax();
		}
	}
};

const removeMyGif = (gif) => {
	event.preventDefault();
	let arrMyGifosParsed = JSON.parse(localStorage.getItem('MyGifs'));
	console.log(arrMyGifosParsed);
	for (let i = 0; i < arrMyGifosParsed.length; i++) {
		if (arrMyGifosParsed[i] == gif) {
			arrMyGifosParsed.splice(i, 1);
			localStorage.setItem('MyGifs', JSON.stringify(arrMyGifosParsed));
			displayMisGifosSection(event);
			closeMax();
		}
	}
};


// SEARCH

let offsetSearch = 0;

const getSearch = async (search) => {
	event.preventDefault();
	cleanSearchSuggestions();
	$searchInputHero.value = search;
	$navbarSearchInput.value = search;
	$searchTitle.innerHTML = search;

	if (offsetSearch === 0) {
		$searchResultGallery.innerHTML = '';
	}

	await fetch(
		`${searchEndpoint}?api_key=${apiKey}&q=${search}&offset=${offsetSearch}&limit=12&rating=g`
	)
		.then((response) => response.json())
		.then((results) => {
			if (results.data == 0) {
				displayErrorSearch();
			} else {
				displaySearchGif(results);
			}
		})
		.catch((err) => console.log(err));
};

const displaySearchGif = (results) => {
	$searchResultContainer.classList.remove('hidden');
	$verMasbtn.classList.remove('hidden');

	if (offsetSearch === 0) {
		window.scrollTo({ top: 600, behavior: 'smooth' });
	}

	if (results.data.length < 12) {
		$verMasbtn.style.display = 'none';
	}

	for (let i = 0; i < results.data.length; i++) {
		const gifContainer = document.createElement('div');
		gifContainer.classList.add('gif__container');
		gifContainer.innerHTML = ` 
		<img class="gif" onclick="maximizeGif('${results.data[i].images.original.url}','${results.data[i].username}','${results.data[i].title}')" src="${results.data[i].images.original.url}" alt="${results.data[i].title}">
	
		<div class="gifActions">
			<div class="gifActions__btn">
				<div class="btn favorite" onclick="addToFav('${results.data[i].images.original.url}','${results.data[i].username}','${results.data[i].title}')">
                <img src="assets/icon-fav.svg" alt="icon-fav" id="fav${results.data[i].title}">
                </div>
				<div class="btn download" onclick="downloadGif('${results.data[i].images.original.url}','${results.data[i].title}')">
                <img src="assets/icon-download.svg" alt="icon-download">
                </div>
				<div class="btn maximize" onclick="maximizeGif('${results.data[i].images.original.url}','${results.data[i].username}','${results.data[i].title}')">
                <img src="assets/icon-max-normal.svg" alt="icon-max">
                </div>
			</div>
			<div class="gif__info">
				<p class="gif_user">${results.data[i].username}</p>
				<p class="gif_title">${results.data[i].title}</p>
			</div>
		</div>
		`;
		$searchResultGallery.appendChild(gifContainer);
	}
};

const displayErrorSearch = () => {
	$searchResultContainer.classList.remove('hidden');
	$errorContainer.classList.remove('hidden');
	$errorContainer.innerHTML = `
	<div class="error__container" id="error-container">
	<img class="" id="error-search" src="assets/icon-busqueda-sin-resultado.svg" alt="Busqueda sin resultado" >
	<h4 class="error-search-text">Intenta con otra búsqueda.</h4>
	</div>
	`;
	$verMasbtn.style.display = 'none';
};

const verMasButton = () => {
	offsetSearch += 12;
	if ($searchInputHero.value) {
		getSearch($searchInputHero.value);
	} else {
		getSearch($navbarSearchInput.value);
	}
};

const getSug = async () => {
	cleanSearchSuggestions();
	$searchSuggestionList.classList.remove('hidden');
	const USER_INPUT = $searchInputHero.value;

	if (USER_INPUT.length >= 1) {
		await fetch(
			`${searchAutocomplete}?api_key=${apiKey}&q=${USER_INPUT}&limit=4&rating=g`
		)
			.then((response) => response.json())
			.then((suggestions) => {
				displaySuggestions(suggestions);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

const displaySuggestions = (suggestions) => {
	for (let i = 0; i < suggestions.data.length; i++) {
		const searchSuggestionItem = document.createElement('li');
		searchSuggestionItem.classList.add('SearchSuggestions__item');
		searchSuggestionItem.innerHTML = `
		<img class="searchBtnGray" src="assets/icon-search-gray.svg" alt="Boton Buscar" onclick="getSearch('${suggestions.data[i].name}')">
		<p class="search__Text" onclick="getSearch('${suggestions.data[i].name}')">${suggestions.data[i].name}</p>`;
		$searchSuggestionList.appendChild(searchSuggestionItem);
	}
};

const cleanResultsContianer = () => {
	$searchResultContainer.classList.add('hidden');
	$errorContainer.classList.add('hidden');
	$verMasbtn.style.display = 'block';
	$searchResultGallery.innerHTML = '';
	$navbarSearchInput.placeholder = 'Busca GIFOS y más';
	$searchInputHero.placeholder = 'Busca GIFOS y más';
};

const cleanSearchSuggestions = () => {
	$searchSuggestionList.classList.add('hidden');
	$searchSuggestionList.innerHTML = '';
};

const setActiveSearchBar = () => {
	$searchGrayBtn.classList.remove('hidden');
	$searchCloseBtn.classList.remove('hidden');
	$searchBtn.classList.add('hidden');
	$searchSuggestionsContainer.classList.remove('hidden');
	$searchContainer.classList.add('searchActive');
	$searchSuggestionsContainer.classList.add('searchActiveContainer');
};

const setActiveNavbarSearch = () => {
	$navbarSearchGrayBtn.classList.remove('hidden');
	$navbarSearchCloseBtn.classList.remove('hidden');
	$navbarSearchBtn.classList.add('hidden');
};

const setInactiveSearchBar = () => {
	$navbarSearchInput.value = '';
	$searchInputHero.value = '';
	cleanResultsContianer();
	cleanSearchSuggestions();
	$searchSuggestionsContainer.classList.add('hidden');
	$searchBtn.classList.remove('hidden');
	$searchCloseBtn.classList.add('hidden');
	$searchGrayBtn.classList.add('hidden');
	$searchContainer.classList.remove('searchActive');
};
654;
const setInactiveNavbarSearch = () => {
	$navbarSearchInput.value = '';
	$searchInputHero.value = '';
	cleanResultsContianer();
	$navbarSearchBtn.classList.remove('hidden');
	$navbarSearchCloseBtn.classList.add('hidden');
	$navbarSearchGrayBtn.classList.add('hidden');
};


$searchGrayBtn.addEventListener('click', () => {
	getSearch($searchInputHero.value);
});
$searchInputHero.addEventListener('keypress', (event) => {
	if (event.keyCode === 13) {
		getSearch($searchInputHero.value);
	}
});
$searchInputHero.addEventListener('click', setActiveSearchBar);
$searchInputHero.addEventListener('input', setActiveSearchBar);
$searchInputHero.addEventListener('input', getSug);
$searchInputHero.addEventListener('input', cleanResultsContianer);

$searchCloseBtn.addEventListener('click', setInactiveSearchBar);
$verMasbtn.addEventListener('click', verMasButton);

// SEARCH EN NAVBAR

$navbarSearchGrayBtn.addEventListener('click', () => {
	getSearch($navbarSearchInput.value);
});
$navbarSearchInput.addEventListener('keypress', (event) => {
	if (event.keyCode === 13) {
		getSearch($navbarSearchInput.value);
	}
});
$navbarSearchInput.addEventListener('click', setActiveNavbarSearch);
$navbarSearchInput.addEventListener('input', setActiveNavbarSearch);
$navbarSearchCloseBtn.addEventListener('click', setInactiveNavbarSearch);
$navbarSearchInput.addEventListener('input', cleanResultsContianer);


// TRENDINGS

const setTrendingBtn = () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		$previousBtn.src = 'assets/button-slider-left-md-noct.svg';
		$nextBtn.src = 'assets/button-slider-right-md-noct.svg';
	} else {
		$previousBtn.src = 'assets/button-slider-left.svg';
		$nextBtn.src = 'assets/Button-Slider-right.svg';
	}
};

$previousBtn.addEventListener('mouseover', () => {
	$previousBtn.src = 'assets/button-slider-left-hover.svg';
});

$nextBtn.addEventListener('mouseover', () => {
	$nextBtn.src = 'assets/Button-Slider-right-hover.svg';
});

$previousBtn.addEventListener('mouseout', setTrendingBtn);
$nextBtn.addEventListener('mouseout', setTrendingBtn);


const getTrendingTags = async () => {
	await fetch(`${trendingTagsEndpoint}?api_key=${apiKey}`)
		.then((response) => response.json())
		.then((trendingTags) => {
			console.log(trendingTags);
			displayTags(trendingTags);
		})
		.catch((err) => console.log(err));
};

getTrendingTags();

const displayTags = (trendingTags) => {
	for (let i = 0; i < 6; i++) {
		const trendingTagItem = document.createElement('span');
		trendingTagItem.classList.add('trending__item');
		trendingTagItem.setAttribute(
			'onclick',
			`getSearch("${trendingTags.data[i]}")`
		);
		trendingTagItem.innerHTML = `${trendingTags.data[i]}`;
		$trendingTagList.appendChild(trendingTagItem);
	}
};

// SLIDER

const getTrendingGif = async () => {
	await fetch(`${trendingEndpoint}?api_key=${apiKey}&limit=12&rating=g`)
		.then((response) => response.json())
		.then((results) => {
			console.log(results);
			displayTrendingGifs(results);
		})
		.catch((err) => console.error(err));
};

getTrendingGif();

const displayTrendingGifs = (results) => {
	for (let i = 0; i < results.data.length; i++) {
		const gifContainer = document.createElement('div');
		gifContainer.classList.add('gif__container');
		gifContainer.innerHTML = ` 
		<img class="gif" onclick="maximizeGif('${results.data[i].images.original.url}','${results.data[i].username}','${results.data[i].title}')" src="${results.data[i].images.original.url}" alt="${results.data[i].title}">
	
		<div class="gifActions">
			<div class="gifActions__btn">
				<div class="btn favorite"  onclick="addToFav('${results.data[i].images.original.url}','${results.data[i].username}','${results.data[i].title}')">
                    <img src="assets/icon-fav.svg" alt="icon-fav" id="fav${results.data[i].title}">
                </div>
				<div class="btn download" onclick="downloadGif('${results.data[i].images.original.url}','${results.data[i].title}')">
                    <img src="assets/icon-download.svg" alt="icon-download">
                </div>
				<div class="btn maximize" onclick="maximizeGif('${results.data[i].images.original.url}','${results.data[i].username}','${results.data[i].title}')">
                    <img src="assets/icon-max-normal.svg" alt="icon-max">
                </div>
			</div>
			<div class="gif__info">
				<p class="gif_user">${results.data[i].username}</p>
				<p class="gif_title">${results.data[i].title}</p>
			</div>
		</div>
		`;
		$trendingSlider.appendChild(gifContainer);
	}
};

const nextSliderBtn = () => {
	$trendingSlider.scrollLeft += 1176;
};

const prevSliderBtn = () => {
	$trendingSlider.scrollLeft -= 1176;
};

$nextBtn.addEventListener('click', nextSliderBtn);
$previousBtn.addEventListener('click', prevSliderBtn);

// CREAR GIF

$buttonGrabar.style.display = 'none';
$buttonFinalizar.style.display = 'none';
$buttonSubirGif.style.display = 'none';
$overlay.style.display = 'none';

let recorder;
let blob;
let form = new FormData();
let arrMyGifos = [];

let timer;
let hours = '00';
let minutes = '00';
let seconds = '00';

const getStreamAndRecord = async () => {
	$crearGifTitle.innerHTML = `¿Nos das acceso <br> a tu cámara?`;
	$crearGifText.innerHTML = `El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.`;
	$buttonComenzar.style.visibility = 'hidden';
	$step1.classList.add('step-active');

	await navigator.mediaDevices
		.getUserMedia({
			audio: false,
			video: {
				height: { max: 480 }
			}
		})
		.then((mediaStreamObj) => {
			$crearGifTitle.classList.add('hidden');
			$crearGifText.classList.add('hidden');
			$step1.classList.remove('step-active');
			$step2.classList.add('step-active');
			$buttonComenzar.style.display = 'none';
			$buttonGrabar.style.display = 'block';
			$video.classList.remove('hidden');
			$video.srcObject = mediaStreamObj;
			$video.play();

			recorder = RecordRTC(mediaStreamObj, {
				type: 'gif',
				frameRate: 1,
				quality: 10,
				width: 360,
				hidden: 240,
				onGifRecordingStarted: function () {
					console.log('started');
				}
			});
		})
		.catch((err) => console.log(err));
};

$buttonComenzar.addEventListener('click', getStreamAndRecord);

const createGifo = () => {
	console.log('está grabando');
	$buttonGrabar.style.display = 'none';
	$buttonFinalizar.style.display = 'block';
	$timer.classList.remove('hidden');
	$repeatBtn.classList.add('hidden');
	recorder.startRecording();
	timer = setInterval(timerActive, 1000);
};

$buttonGrabar.addEventListener('click', createGifo);

const stopCreatingGif = () => {
	$video.classList.add('hidden');
	$recordedGifo.classList.remove('hidden');
	recorder.stopRecording(() => {
		blob = recorder.getBlob();
		$recordedGifo.src = URL.createObjectURL(blob);

		form.append('file', recorder.getBlob(), 'myGif.gif');
		console.log(form.get('file'));
	});

	$buttonFinalizar.style.display = 'none';
	$buttonSubirGif.style.display = 'block';
	$timer.classList.add('hidden');
	$repeatBtn.classList.remove('hidden');

	clearInterval(timer);
	hours = '00';
	minutes = '00';
	seconds = '00';
	$timer.innerText = `${hours}:${minutes}:${seconds}`;
};

$buttonFinalizar.addEventListener('click', stopCreatingGif);

const uploeadCreatedGif = async () => {
	$overlay.style.display = 'flex';
	$step2.classList.remove('step-active');
	$step3.classList.add('step-active');
	$repeatBtn.classList.add('hidden');
	$buttonSubirGif.style.visibility = 'hidden';

	await fetch(`${uploadGifEndpoint}?api_key=${apiKey}`, {
		method: 'POST',
		body: form,
	})
		.then((response) => response.json())
		.then((myGif) => {

			let myGifoId = myGif.data.id
			console.log(myGif.data.id);
			$overlayStatusIcon.src = 'assets/check.svg';
			$overlayStatusText.innerHTML = 'GIFO subido con éxito';

			let buttonsMyGif = document.createElement('div');
			buttonsMyGif.classList.add('overlay__buttons');
			buttonsMyGif.innerHTML = `<div class="btns downloadOverlay" onclick="downloadCreatedGif('${myGifoId}')"></div> 
			<div class="btns linkOverlay" onclick="displayMisGifosSection(event)"></div>`;
			$overlay.appendChild(buttonsMyGif);

			arrMyGifos.push(myGifoId);
			console.log(arrMyGifos);

			myGifos = localStorage.setItem('MyGifs', JSON.stringify(arrMyGifos));
		})
		.catch((err) => {
			console.error(err);
		});
};

$buttonSubirGif.addEventListener('click', uploeadCreatedGif);

const repeatRecordingGif = (event) => {
	event.preventDefault();
	recorder.clearRecordedData();
	$step2.classList.add('step-active');
	$repeatBtn.classList.add('hidden');
	$buttonGrabar.style.display = 'block';
	$buttonSubirGif.style.display = 'none';
	$video.classList.remove('hidden');
	$recordedGifo.classList.add('hidden');

	navigator.mediaDevices
		.getUserMedia({
			audio: false,
			video: {
				height: { max: 480 }
			}
		})
		.then((mediaStreamObj) => {
			$video.srcObject = mediaStreamObj;
			$video.play();

			recorder = RecordRTC(mediaStreamObj, {
				type: 'gif',
				frameRate: 1,
				quality: 10,
				width: 360,
				hidden: 240,
				onGifRecordingStarted: function () {
					console.log('started');
				}
			});
		})
		.catch((err) => console.log(err));
};
$repeatBtn.addEventListener('click', repeatRecordingGif);

const downloadCreatedGif = async (myGifId) => {
	let blob = await fetch(
		`https://media.giphy.com/media/${myGifId}/giphy.gif`
	).then((img) => img.blob());
	invokeSaveAsDialog(blob, 'My-Gif.gif');
};

function timerActive() {
	seconds++;

	if (seconds < 10) seconds = `0` + seconds;

	if (seconds > 59) {
		seconds = `00`;
		minutes ++;

		if (minutes < 10) minutes = `0` + minutes;
	}

	if (minutes > 59) {
		minutes = `00`;
		hours++;

		if (hours < 10) hours = `0` + hours;
	}

	$timer.innerHTML = `${hours}:${minutes}:${seconds}`;
}
