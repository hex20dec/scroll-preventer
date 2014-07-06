  function ScrollbarsClass(){
    var self = this;
    this.listener = false;

    //call .deny when modal is in focus
    this.deny = function(){
      $("html").height($(window).height());
      $("body").css("overflow-y","hidden");
      if(this.listener == false){
        this.listener = true;
        $(window).on("resize.scrollbars", function(){
          self.deny();
        });
      }
    }

    //call .allow when the modal is removed from focus
    this.allow = function(){
      $("html").css("height", "100%");
      $("body").css("overflow-y","");
      $(window).off("resize.scrollbars");
      this.listener = false;
    }
  }

  //instantiate the object
  scrollbars = new ScrollbarsClass();