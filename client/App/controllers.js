
'use strict';

angular.module('app.controllers', [])

    .controller('MoviesController', function ($scope, $http)
    {
        // this will do for now
        $scope.details =
        [
           
            
        ];
        
       
    
        var title = 'Daytime Shooting Star';
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(movie) {
          $scope.details = movie.Title;  
        var title = $("<h3>").append(movie.Title);
        var plot = $("<p>").append(movie.Plot);
        var poster = $("<img/>").attr("src",movie.Poster);
        $(".movie1").append('<img class="data-poster" src="'+ movie.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+movie.imdbID+"'"+">"+ movie.Title +"<h3/></a>",plot,"Rating:"+movie.imdbRating)
        }
    }); 
    var title = 'How To Train Your Dragon';
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie2").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    });   
    var title = 'Spirited Away';
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie3").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    });   
   var title = "Howl's Moving Castle";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie4").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    }); 
    var title = "L♡DK";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie5").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    }); 
    var title = "Your Name";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie6").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    });
    var title = "Thor: Ragnarök";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie7").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    });
    var title = "Spider-Man: Homecoming";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_s,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie8").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 100%; height: 480px;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"Rating:"+data.imdbRating)
        }
    }); 
        
        

    })
    

  
  
    .controller('HomeController', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.home =
        [
            { 
                Id: 1, 
                Poster: "img/castleinthesky.jpeg",
                Name: "Castle In The Sky",
                Director: "Hayao Miyazaki" 
                
            },
            { 
                Id: 2,
                Poster: "img/Howl'sMovingCastle.jpg",
                Name: "Howl's Moving Castle",
                Director: "Hayao Miyazaki" 
                
            },
            { 
                Id: 3,
                Poster: "img/spiritedaway.jpg",
                Name: "Spirited Away",
                Director:"Hayao Miyazaki,Kirk Wise"
            },
            
            { 
                Id: 4,
                Poster: "img/secretworldofarrietty.jpg",
                Name: "The Secret World of Arrietty",
                Director:"Hiromasa Yonebayashi"
            }
           
        ]
        
        
        
        
        $http({
            method: 'GET',
            url: 'http://localhost/angular-webapi/api/movies'
        })
         .success(function (data)
         {             
             $scope.home = data;
         });   
       

    })
    
  
    .controller('DetailsController', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.Cs=
        [
            { 
                Id: 1, 
                Poster: "img/castleinthesky.jpeg",
                Name: "Castle In The Sky",
                Description:"A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
                Director: "Hayao Miyazaki" 
                
            }
            
            
        ]
        $http({
            method: 'GET',
            url: 'http://localhost/angular-webapi/api/movies'
        })
         .success(function (data)
         {             
             $scope.Cs = data;
         });   
    })
    
    .controller('HowlsController', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.Mc=
        [
            { 
                Id: 2,
                Poster: "img/Howl'sMovingCastle.jpg",
                Name: "Howl's Moving Castle",
                Description:"When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
                Director: "Hayao Miyazaki" 
                
            }
            
            
        ]
        $http({
            method: 'GET',
            url: 'http://localhost/angular-webapi/api/movies'
        })
         .success(function (data)
         {             
             $scope.Cs = data;
         });   
    })
    
    .controller('SpiritedController', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.Sa=
        [
            { 
                Id: 3,
                Poster: "img/spiritedaway.jpg",
                Name: "Spirited Away",
                Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                Director:"Hayao Miyazaki,Kirk Wise"
                
            }
            
            
        ]
        $http({
            method: 'GET',
            url: 'http://localhost/angular-webapi/api/movies'
        })
         .success(function (data)
         {             
             $scope.Cs = data;
         });   
    })
    
     .controller('SecretController', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.Sw=
        [
            { 
                Id: 4,
                Poster: "img/secretworldofarrietty.jpg",
                Name: "The Secret World of Arrietty",
                Description:"The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their daughter, Arrietty, is discovered.",
                Director:"Hiromasa Yonebayashi"
                
            }
            
            
        ]
        $http({
            method: 'GET',
            url: 'http://localhost/angular-webapi/api/movies'
        })
         .success(function (data)
         {             
             $scope.Cs = data;
         });   
    })
     .controller('SearchController', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Sherlock Holmes";

    function fetch() {
      $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full&apikey=ec594335")
        .then(function(response) {
          $scope.details = response.data;
        });

      $http.get("https://www.omdbapi.com/?s=" + $scope.search+ "&tomatoes=true&plot=full&apikey=ec594335")
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      
      $scope.search = movie.Title;
    
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  })
  
   .controller('Page1_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title1=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = "Daytime Shooting Star";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie1").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"&nbsp;("+data.Year+")"+"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
  
   .controller('PageController', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = 'How To Train Your Dragon';
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie2").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
    
     .controller('Page_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title2=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = 'Spirited Away';
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie3").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
     .controller('Page2_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title3=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = "Howl's Moving Castle";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie4").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
    .controller('Page5_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title5=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = "L♡DK";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie5").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
     .controller('Page6_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title6=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = "Your Name";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie6").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
    
     .controller('Page7_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title7=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = "Thor: Ragnarok";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie7").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
    
     .controller('Page8_Controller', function ($scope, $http)
    {
        
        
        
        // this will do for now
         $scope.title8=
        [
            //{ 
                //Id: 3,
                //Poster: "img/spiritedaway.jpg",
                //Name: "Spirited Away",
                //Description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                //Director:"Hayao Miyazaki,Kirk Wise"
                
            //}
            
            
        ]
        var title = "Spider-Man: Homecoming";
        var plot_s = 'short';
        var plot_f = 'full';
        var year = '';
        var response = 'json';

        $.ajax({
            url:'https://www.omdbapi.com/?=tt3896198&apikey=ec594335',
            type:'GET',
            datatype:'json',
            data: {
            //Parameters
            't': title,
            'plot':plot_f,
            'r':response,
            'y':year
        },
        success: function(data) {
        var title = $("<h3>").append(data.Title);
        var plot = $("<p>").append(data.Plot);
        var poster = $("<img/>").attr("src",data.Poster);
        $(".movie8").append('<img class="data-poster" src="'+ data.Poster +'" style="width: 25%;">',"<h3><a href='#/title/"+data.imdbID+"'"+">"+ data.Title +"<h3/></a>",plot,"<span class='label label-primary'>Directors:</span>&nbsp;"+data.Director,"<br/><span class='label label-primary'>Writers:</span>&nbsp;"+data.Writer,"<br/><span class='label label-primary'>Rating:</span>&nbsp;"+data.imdbRating,'<br/><br/><button class="btn-favorite" data-movie-title="'+ data.Title +'" data-movie-id="'+ data.imdbID +'">'+ "Add to Favourite" +"</button>")
        }
    });   
    })
    
    
    
    .controller('searchMovies', ['$scope', '$http',
      function($scope, $http) {
        $scope.method = 'GET';
        $scope.fetch = function() {
          if ($scope.searchparam) {
            $scope.url = 'https://www.omdbapi.com/?s=' + $scope.searchparam + '&type=movie&r=json&apikey=ec594335';
            $http({
              method: $scope.method,
              url: $scope.url
            }).
            then(function(response) {
              if (response.data.Response) {
                // success
                $('.results').css('display', 'block');
                $('.noResults').css('display', 'none');
                var theSrchResults = response.data["Search"];
                angular.forEach(theSrchResults, function(obj) {
                  // loop through each movie, and pull the details using the IMDB ID
                  $http({
                    method: $scope.method,
                    url: 'https://www.omdbapi.com/?i=' + obj.imdbID + '&plot=full&r=json&tomatoes=true&apikey=ec594335'
                  }).
                  then(function(response) {
                    // extend the details to the parent
                    obj.details = response.data;
                  });
                });
                 $scope.movieResults = theSrchResults;
              } else {
                 
                //error, movie not found
                console.log("not found");
                $('.results').css('display', 'none');
                $('.noResults').css('display', 'block');
                $('.noResults ').html("<strong>No results found.</strong>");
              }
            }, function(response) {
                
              console.log("failure");
              $('.results').css('display', 'none');
              $('.noResults').css('display', 'block');
              $('.noResults').html("<strong>Network or data error, please try again.</strong>");
            });
          } else {
            // no input value
            $('.results').css('display', 'none');
            $('.noResults').css('display', 'none');
            $('#theSearch').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
          }
        };
      }
    ])
    .directive('movieSrchResults', function() {
      return {
        templateUrl: 'movieresult.html'
      };
    });

    
    
    