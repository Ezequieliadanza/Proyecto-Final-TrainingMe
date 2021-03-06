  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [

      {path: '/index/',        url: 'index.html',},
      
      {path: '/pagina1/',      url: 'pagina1.html',},

      {path: '/pagina2/',      url: 'pagina2.html',},
      
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
    
})

$$(document).on('page:init', '.page[data-name="pagina1"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
    
  /*/export default (props, { $, $on }) => {
    let $toolbarEl;

    const togglePosition = () => {
      $toolbarEl.toggleClass('toolbar-bottom toolbar-top');
    }

    $on('pageInit', (e, page) => {
      $toolbarEl = page.$el.find('.toolbar');
    });

    return $render;
  }
 /*/ 
})

$$(document).on('page:init', '.page[data-name="pagina2"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log(e);
  alert('Hello');
  
})


//funciones


  
