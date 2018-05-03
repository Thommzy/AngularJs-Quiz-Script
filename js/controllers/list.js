    (function(){
    angular.module("turtleFacts")
    .controller("listCtrl", ListController);

    ListController.$inject =['quizMetrics'];

     function ListController(quizMetrics) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.data = turtlesData;
        vm.activeTurtle = {};
        vm.activateQuiz = activateQuiz;
        vm.changeActiveTurtle = changeActiveTurtle;
        vm.search = "";

        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }
         
        function activateQuiz(){
            quizMetrics.changeState(true);
        }
    }

    var turtlesData =[
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
            locations: "Ogun State",
            size: "Up to 5.0m and up to 400kg",
            lifespan: "Over 60 years",
            diet: "Herbivore",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Ad aperiam, est fugit harum, ipsa ipsam laborum modi mollitia, necessitatibus " +
            "quas xquisquam similique tenetur velit. Ad aperiam dolor ipsum quos sit!"
        },
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
            locations: "Lagos State",
            size: "Up to 5.0m and up to 400kg",
            lifespan: "Over 60 years",
            diet: "Herbivore",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Ad aperiam, est fugit harum, ipsa ipsam laborum modi mollitia, necessitatibus " +
            "quas xquisquam similique tenetur velit. Ad aperiam dolor ipsum quos sit!"
        },
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
            locations: "Lagos State",
            size: "Up to 5.0m and up to 400kg",
            lifespan: "Over 60 years",
            diet: "Herbivore",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Ad aperiam, est fugit harum, ipsa ipsam laborum modi mollitia, necessitatibus " +
            "quas xquisquam similique tenetur velit. Ad aperiam dolor ipsum quos sit!"
        },
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
            locations: "Lagos State",
            size: "Up to 5.0m and up to 400kg",
            lifespan: "Over 60 years",
            diet: "Herbivore",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Ad aperiam, est fugit harum, ipsa ipsam laborum modi mollitia, necessitatibus " +
            "quas xquisquam similique tenetur velit. Ad aperiam dolor ipsum quos sit!"
        },
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
            locations: "Lagos State",
            size: "Up to 5.0m and up to 400kg",
            lifespan: "Over 60 years",
            diet: "Herbivore",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Ad aperiam, est fugit harum, ipsa ipsam laborum modi mollitia, necessitatibus " +
            "quas xquisquam similique tenetur velit. Ad aperiam dolor ipsum quos sit!"
        },
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg",
            locations: "Lagos State",
            size: "Up to 5.0m and up to 400kg",
            lifespan: "Over 60 years",
            diet: "Herbivore",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Ad aperiam, est fugit harum, ipsa ipsam laborum modi mollitia, necessitatibus " +
            "quas xquisquam similique tenetur velit. Ad aperiam dolor ipsum quos sit!"
        }
    ]
})();