window.Menu = {};

    //create  observable properties
   /* Menu.ViewModel = new function () {

        Name: 'Daryl',
        FavouiteFood: 'Hot Dogs',
        FavouriteDrink: 'Coke',
        FavouriteDessert:'Pie'
    },
    */

Menu.ViewModel = new function() {

    this.Name= ko.observable('Daryl');
    this.FavouiteFood= ko.observable('Hot Dogs');
    this.FavouriteDrink= ko.observable('Coke');
    this.FavouriteDessert= ko.observable('Pie');
    this.OrderSubmitted= ko.observable(false);
    this.Customers = ko.observableArray([

      { name: 'Child', number: ko.observable(0), price: ko.observable(1) },
      { name: 'Adult', number: ko.observable(0), price: ko.observable(2) },
      { name: 'Seniors', number: ko.observable(0), price: ko.observable(1.50) }

    ]);

    this.totalCost = ko.computed(function () {

        var total = 0;

        ko.utils.arrayForEach(this.Customers(), function (item) {
            total += (item.number()* item.price());
        })

        return total;

    }, this);

};

    //add customers
  

Menu.Init = function () {

        ko.applyBindings(Menu.ViewModel);

        $(document).on('click', '#show-order', function () {

            Menu.ViewModel.OrderSubmitted(true);        

        });

    }




