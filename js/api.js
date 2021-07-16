const apiKey = 'HEWLZUdf048cj4zqaAbBlcopt37VF5Bn';
const searchEndpoint = 'https://api.giphy.com/v1/gifs/search';
const trendingEndpoint = 'https://api.giphy.com/v1/gifs/trending';
const trendingTagsEndpoint = 'https://api.giphy.com/v1/trending/searches';
const searchAutocomplete = 'https://api.giphy.com/v1/gifs/search/tags';
const uploadGifEndpoint = 'https://upload.giphy.com/v1/gifs';
const getGifByIdEndpoint = 'https://api.giphy.com/v1/gifs';

// DOM 

const $logoButton = document.querySelector('#logoButton')
const $headerContainer = document.querySelector('#header');
const $navbarList = document.querySelector('#navList');
const $burgerMenu = document.querySelector('#burger');
const $logo = document.querySelector('#logo');
const $switchThemeBtn = document.querySelector('#switchTheme');
const $crearGifBtn = document.querySelector('#crateGifBtn');
const $favoritosMenu = document.querySelector('#FavoritosMenu');
const $gralContainers = document.querySelector('#gralContainers');
const $misGifosMenu = document.querySelector('#misGifosMenu');
const $crearGifosMenu = document.querySelector('#crearGifosMenu');

// DOM elements SEARCH
const $searchContainer = document.querySelector('#searchContainer');
const $searchResultContainer = document.querySelector('#searchResult');
const $errorContainer = document.querySelector('#error-container');
const $searchResultGallery = document.querySelector('#searchResGallery');
const $searchTitle = document.querySelector('#searchResTitle');
const $verMasbtn = document.querySelector('#verMas-btn');

// --- navbar search
const $navbarSearchGrayBtn = document.querySelector('#navbarSearch-gray-btn');
const $navbarSearchContainer = document.querySelector(
	'#busquedaNav'
);
const $navbarSearchInput = document.querySelector('#busquedaNavInput');
const $navbarSearchBtn = document.querySelector('#busquedaNavIcon');
const $navbarSearchCloseBtn = document.querySelector(
	'#navbarClose'
);

// --- hero search
const $searchGrayBtn = document.querySelector('#searchBtnGris');
const $searchInputHero = document.querySelector('#searchInput');
const $searchBtn = document.querySelector('#search-icon');
const $searchCloseBtn = document.querySelector('#search-close-icon');

// --- search suggestions
const $searchSuggestionsContainer = document.querySelector(
	'#SearchSuggCont'
);
const $searchSuggestionList = document.querySelector('#search-sugestion-list');

// DOM elements trending tags
const $trendingTagList = document.querySelector('#trendingList');

// DOM elements trending slider
const $trendingSection = document.querySelector('#trendingSection');
const $previousBtn = document.querySelector('#previous-btn');
const $nextBtn = document.querySelector('#next-btn');
const $trendingSlider = document.querySelector('#trending__slider');

// DOM gif elements
const $gifContainer = document.querySelectorAll('.gif__container');
const $gifActions = document.querySelectorAll('.gifActions');
const $maximizedGifSection = document.querySelector('#maximizedGif');
const $maxCloseBtn = document.querySelector('close-btn')

// DOM favorites
const $favSection = document.querySelector('#favorites-section');
const $favContainer = document.querySelector('#fav-container');
const $noFavsContainer = document.querySelector('#noFavs_container');
const $btnFav = document.querySelector('.favorite');

// DOM Mis gifos
const $misGifosSection = document.querySelector('#misGifosSection');
const $misGifosContainer = document.querySelector('#misGifos-container');
const $noGifContainer = document.querySelector('#noGif_container');

// DOM create GIFOs
const $createGifSection = document.querySelector('#createGifSection');
const $crearGifTitle = document.querySelector('#crearGif_title')
const $crearGifText = document.querySelector('#crearGifTxt');
const $step1 = document.querySelector('#step-1');
const $step2 = document.querySelector('#step-2');
const $step3 = document.querySelector('#step-3');
const $buttonComenzar = document.querySelector('#button--comenzar');
const $buttonGrabar = document.querySelector('#button--grabar');
const $buttonFinalizar = document.querySelector('#button--finalizar');
const $buttonSubirGif = document.querySelector('#button--subirGif');
const $timer = document.querySelector('#timer-recording');
const $repeatBtn = document.querySelector('#repeatShot');
const $overlay = document.querySelector('#overlay')
const $overlayStatusIcon = document.querySelector('#overlay_status-icon');
const $overlayStatusText = document.querySelector('#overlay_status-text');
const $video = document.querySelector('#recording_video');
const $recordedGifo = document.querySelector('#recorded_gifo');

const $camera = document.querySelector('#camera');
const $pelicula = document.querySelector('#pelicula');

