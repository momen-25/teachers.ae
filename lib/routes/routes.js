Router.configure({
	layoutTemplate: 'main_layout'
});

console.log("mmmm")

Router.route('/', function () {
    this.render('nav' ,{to : 'nav'});
    this.render("home",{to : "first"})


});