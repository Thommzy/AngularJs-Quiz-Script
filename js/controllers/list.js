(function(){
    angular.module("turtleFacts")
    .controller("listCtrl", ListController);

    function ListController() {
        var vm = this;

        vm.data = turtlesData;
        vm.activeTurtle = {};
        vm.changeActiveTurtle = changeActiveTurtle;
        vm.search = "jhjh";

        function changeActiveTurtle (index){
            vm.activeTurtle = index;
        }
    }

    var turtlesData =[
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