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
      $("body").css({
        "height": $(window).height()+this.scrollPosition+"px",
        "width" : "100%",
        "overflow-y": "hidden",
        "position": "absolute",
        "top": "-"+this.scrollPosition+"px"
      });
    }

    //call .allow when the modal is removed from focus
    this.allow = function(){
      $("body").css({
        "height": "100%",
        "overflow-y": "",
        "position": "",
        "top": ""
      });
      $(window).off("resize.scrollbars");
      $(window).scrollTop(this.scrollPosition);
      this.runOnce = false;
    }
  }

  //instantiate the object
  scrollbars = new ScrollbarsClass();