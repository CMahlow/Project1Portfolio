
(function(){

  const MVC = function MVC() {
    let self = this;

    self.name = ko.observable ('Designer Turned Web Developer');
  }
  ko.applyBinding(new MVC());
