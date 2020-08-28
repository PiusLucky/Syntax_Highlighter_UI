$(document).ready(function() {
  // starters
  $(".stack_details").addClass("show-now");
  $(".stack").addClass("border-adder");
  $( ".stack-items" ).first().addClass("current")
  $( ".style-items" ).first().addClass("current")
  $(".clear-btn").on("click", function(){form.reset()})
  var colorPickerDefaultCustomAnchorInline = new ColorPicker.Default('#dc-ex6', {
    color: '#fff',
    inline: true,
    history: {
      colors: ['black', 'red', 'blue', 'gray']
    }
  });
  
  function slider(main, cls, i1, i2, int){
    $('body').on("change", `.${main}`, function() {
      const range = $(this).val();
      if(range == int){
       $(`.${cls} .${i1}`).removeClass(i1).addClass(i2)
      }else{
       $(`.${cls} i`).addClass(i1).removeClass(i2)
      }
    });
  }



  function tagger(target){
    $( `.${target}` ).each(function( main_index, element ) {
      $(this).addClass(`${target}_${main_index}`)
      $(`.${target}_${main_index}`).on("click", function(){
      $( `.${target}` ).first().removeClass("current")
      const siblings_object = $(`.${target}_${main_index}`).siblings() 
      if ($(`.${target}_${main_index}`).next().length == 0){
        $(element).addClass("current") 
       }else{
        $(`.${target}_${main_index}`).siblings().removeClass("current")
        $(element).removeClass("current") 
       }

      siblings_object.each(function( index, child_element ) {
      if(main_index === index){   
        $(`.${target}_${index}`).addClass("current")  
      }   
      else{
        $(`.${target}_${index}`).removeClass("current")  
      }   
      });

      })

    })
  }
  
   $('.submit_btn').on("click", function(event){
     event.preventDefault()
     $('.modal-code').addClass('show-modal')
     $('.shield').addClass('show-modal')
     $('body').addClass('overflow-stopped')
     $(window).scrollTop(0)
   })

    $('.close').on("click", function(event){
      event.preventDefault()
      $('.modal-code').removeClass('show-modal')
      $('.shield').removeClass('show-modal')
      $('body').removeClass('overflow-stopped')
    })

  
  $('body').on("change", ".bw", function() {
    const range = $(this).val();
    $(".bwv").html(range);
  });

  function cleanup(bdr, ob1, ob2, main, ot1, ot2){
    $(`.${bdr}`).addClass("border-adder");
    $(`.${ob1}`).removeClass("border-adder");
    $(`.${ob2}`).removeClass("border-adder");
    if(bdr == "a-opt") {
       $(`.${main}`).addClass("show-flex");
    }else{
      $(`.${main}`).addClass("show-now");
      $('.advance_opt').removeClass("show-flex");
      
    }
    $(`.${ot1}`).removeClass("show-now");
    $(`.${ot2}`).removeClass("show-now");
  }

  $(".stack").on("click", function(){
    cleanup("stack","editor","a-opt", "stack_details", "style_details", "advance_opt" )
  })

  $(".editor").on("click", function(){
    cleanup("editor","stack","a-opt", "style_details", "stack_details", "advance_opt" )
  })

  $(".a-opt").on("click", function(){
    cleanup("a-opt", "stack","editor", "advance_opt", "stack_details", "style_details" )
  })

  currentDate = new Date()
  const year = currentDate.getFullYear()
  $(".footer__year").html(year)

  tagger("stack-items")
  tagger("style-items")
  slider("git_input", "git", "fa-check-circle", "fa-minus-circle", 1)
  slider("lnb_input", "lnb", "fa-minus-circle", "fa-check-circle", 2)
  slider("mfy_input", "mfy", "fa-minus-circle", "fa-check-circle", 2)


  





});

