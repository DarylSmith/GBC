ko.extenders.validate = function (target, pattern) {

    var result = ko.computed({

        //item to read
        read: target,

        //what to write to target
        write: function (newValue) {
            var regexp = new RegExp(pattern);
            debugger;
            if (!regexp.test(newValue)) {

                target('');
                alert('This entry is not valid');

            }

        }

    }).extend({ notify: 'always' });

    return result;

}

window.Menu = {

    SavedItems: {},

    LocalStorageKey: 'myMenu',

    SaveMenu: function (obj) {

        Menu.SavedItems = ko.toJSON(obj);

        window.localStorage.setItem(Menu.LocalStorageKey, Menu.SavedItems);

    },

    RetrieveMenu: function (obj) {

        Menu.SavedItems = JSON.parse(window.localStorage.getItem(Menu.LocalStorageKey));

        //obj.FavouriteDrink(Menu.SavedItems.FavouriteDrink);

        for(var property in obj)
        {
            var item = obj[property];

            if (ko.isObservable(item) && typeof (item) != 'object') {

                item(Menu.SavedItems[property]);
            }

        }


    }


};

//create  observable properties
/* Menu.ViewModel = new function () {

     Name: 'Daryl',
     FavouiteFood: 'Hot Dogs',
     FavouriteDrink: 'Coke',
     FavouriteDessert:'Pie'
 },
 */

Menu.ViewModel = new function () {

    this.Name = ko.observable('Daryl').extend({ validate: '^[A-Za-z]+$' });
    this.FavouiteFood = ko.observable('Hot Dogs');
    this.FavouriteDrink = ko.observable('Coke');
    this.FavouriteDessert = ko.observable('Pie');
    this.OrderSubmitted = ko.observable(false);
    this.Customers = ko.observableArray([

      { name: 'Child', number: ko.observable(0), price: ko.observable(1) },
      { name: 'Adult', number: ko.observable(0), price: ko.observable(2) },
      { name: 'Seniors', number: ko.observable(0), price: ko.observable(1.50) }

    ]);

    this.totalCost = ko.computed(function () {

        var total = 0;

        ko.utils.arrayForEach(this.Customers(), function (item) {
            total += (item.number() * item.price());
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

//extensions






