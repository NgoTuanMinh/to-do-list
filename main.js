$(document).ready(function(){
    $.ajax("http://localhost:3000/todolist")
      .done(function (jobs) {  
        var htmls = jobs.map(function (job) {  
          return `<li><p>${job.job}</p><i class="far fa-trash-alt trash-${job.id}"></i></li>`
        })
        $('.to-do__list ul').html(htmls.join(''));
        var trashBtns = $('i.fa-trash-alt');
          trashBtns.click(function () {  
            var id = $(this).attr('class').slice(23);
              $.ajax ({
                  type: "DELETE",
                  url: `http://localhost:3000/todolist/${id}`,
                });
          })
      })


    $('button[type="submit"]').click(function () {
      var contentjob = $('input').val();   
      if (contentjob.length == 0) {return false}
      else {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/todolist",
            data: {
              job: contentjob,
            },
          });
        };
    });

});