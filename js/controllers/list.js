(function(){
    angular.module("turtleFacts")
    .controller("listCtrl", ListController);

    function ListController() {
        this.dummyData = "hello World";
    }

    var turtlesData =[
        {
            type: "Green Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Oriental_Turtle_Dove.jpg"
        }
    ]
})();