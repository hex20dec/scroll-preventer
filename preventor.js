  function ScrollbarsClass(){
    var self = this;
    this.runOnce = false;

    //call .deny when modal is in focus
    this.deny = function(){
      if(this.runOnce == false){
        this.runOnce = true;
        this.scrollPosition = $(window).scrollTop();
        $(window).on("resize.scrollbars", function(){
          self.deny();
        });
      }
      $("html").height($(window).height());
      $("body").css("overflow-y","hidden");
    }

    //call .allow when the modal is removed from focus
    this.allow = function(){
      $("html").css("height", "100%");
      $("body").css("overflow-y","");
      $(window).off("resize.scrollbars");
      $(window).scrollTop(this.scrollPosition);
      this.runOnce = false;
    }
  }

  //instantiate the object
  scrollbars = new ScrollbarsClass();