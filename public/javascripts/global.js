$(document).ready(function(){

  /*  ADD EDUCATION MODAL START DAY DROPDOWNS */
    $('#newEducationDayStart').click(function(){
        var ul = $('ul#newEducationDayStartul');
        var count = 31; // number of images
        for(var i = 1; i <= count; i++) {
            ul.append('<li><a>' + i+'</a></li>');
        }
        $('ul#newEducationDayStartul a').click(function(){
          $('#newEducationDayStartspan').text($(this).text());
        });
    });


     $('#newEducationMonthStartul a').click(function(){
        $('#newEducationMonthStartSpan').text($(this).text());
      });

      $('#newEducationYearStart').click(function(){
      var start_year = new Date().getFullYear();
      var ul = $('ul#newEducationYearStartul');
      var count = 31;

       for (var i = start_year; i > start_year - 20; i--) {
         ul.append('<li><a>' + i+'</a></li>');
       }
       $('ul#newEducationYearStartul a').click(function(){
         $('#newEducationYearStart').text($(this).text());
       });
      });


      $('#newEducationDayEnd').click(function(){
          var ul = $('ul#newEducationDayul');
          var count = 31; // number of images
          for(var i = 1; i <= count; i++) {
              ul.append('<li><a>' + i+'</a></li>');
          }
          $('ul#newEducationDayul a').click(function(){
            $('#newEducationDay').text($(this).text());
          });
      });


       $('#newEducationMonthEndul a').click(function(){
          $('#newEducationMonthEndSpan').text($(this).text());
        });

        $('#newEducationYearEnd').click(function(){
        var start_year = new Date().getFullYear();
        var ul = $('ul#newEducationYearEndul');
        var count = 31;

         for (var i = start_year; i > start_year - 20; i--) {
           ul.append('<li><a>' + i+'</a></li>');
         }
         $('ul#newEducationYearEndul a').click(function(){
           $('#newEducationYearEnd').text($(this).text());
         });
        });




  /*  POSITION MODAL END YEAR DROPDOWN */
    $('#positionYearEnd').click(function(){
//    var start_year = new Date().getFullYear();
  //  var ul = $('ul#yearMenuEndPosition');

     $('ul#yearMenuEndPosition a').click(function(){
       $('#positionSelectedYearEnd').text($(this).text());
     });
   });
   /*  FINISHED */

   /*  EDUCATION MODAL START DAY DROPDOWNS */
     $('#startExp').click(function(){
         var ul = $('ul#ulstartExp');
         var count = 31; // number of images
         for(var i = 1; i <= count; i++) {
             ul.append('<li><a>' + i+'</a></li>');
         }
         $('ul#ulstartExp a').click(function(){
           $('#startExpSpan').text($(this).text());
         });
     });

     $('#ulMonthExp a').click(function(){
        $('#monthExpSpan').text($(this).text());
      });


   /*  EDUCATION MODAL START DAY DROPDOWNS */
     $('#dayStartPosition').click(function(){
         var ul = $('ul#dayMenuStartPosition');
         var count = 31; // number of images
         for(var i = 1; i <= count; i++) {
             ul.append('<li><a>' + i+'</a></li>');
         }
         $('ul#dayMenuStartPosition a').click(function(){
           $('#positionStartDay').text($(this).text());
         });
     });


     $('#monthMenuStartPosition a').click(function(){
        $('#selectedMonthStartPosition').text($(this).text());
      });

   /*  ADDING EDUCATION MODAL END/START DAY DROPDOWNS */
      $('#newExperienceDayEnd').click(function(){
          $( "ul#newExperienceDayul" ).empty();
          var ul = $('ul#newExperienceDayul');
          var count = 31; // number of images
          for(var i = 1; i <= count; i++) {
              ul.append('<li><a>' + i+'</a></li>');
          }
          $('ul#newExperienceDayul a').click(function(){
            $('#newExperienceDay').text($(this).text());
      });
      });

      $('#newExperienceDayStart').click(function(){
          $( "ul#newExperienceDayStartul" ).empty();
          var ul = $('ul#newExperienceDayStartul');
          var count = 31; // number of images
          for(var i = 1; i <= count; i++) {
              ul.append('<li><a>' + i+'</a></li>');
          }
          $('ul#newExperienceDayStartul a').click(function(){
            $('#newExperienceDayStartspan').text($(this).text());
      });
      });


/*  EDUCATION MODAL START DAY DROPDOWNS */
  $('#dayStartEdu').click(function(){
      var ul = $('ul#dayMenuStartEdu');
      var count = 31; // number of images
      for(var i = 1; i <= count; i++) {
          ul.append('<li><a>' + i+'</a></li>');
      }
      $('ul#dayMenuStartEdu a').click(function(){
        $('#selectedDayStartEdu').text($(this).text());
      });
  });
  $('#dayEndEdu').click(function(){
      var ul = $('ul#dayMenuEndEdu');
      var count = 31; // number of images
      for(var i = 1; i <= count; i++) {
          ul.append('<li><a>' + i+'</a></li>');
      }
      $('ul#dayMenuEndEdu a').click(function(){
        $('#selectedDayEndEdu').text($(this).text());
      });
  });
/*  FINISHED */

$('#newExperienceYearEnd').click(function(){
var start_year = new Date().getFullYear();
var ul = $('ul#newEducationYearEndul');
var count = 31;

 for (var i = start_year; i > start_year - 20; i--) {
   ul.append('<li><a>' + i+'</a></li>');
 }
 $('ul#newEducationYearEndul a').click(function(){
   $('#newEducationYearEndspan').text($(this).text());
 });
});

$('#newExperienceYearStart').click(function(){
var start_year = new Date().getFullYear();
var ul = $('ul#newEducationYearStartul');
var count = 31;

 for (var i = start_year; i > start_year - 20; i--) {
   ul.append('<li><a>' + i+'</a></li>');
 }
 $('ul#newEducationYearStartul a').click(function(){
   $('#newEducationYearStartspan').text($(this).text());
 });
});



/*  EDUCATION MODAL END YEAR DROPDOWN */
  $('#eduYearEnd').click(function(){
  var start_year = new Date().getFullYear();
  var ul = $('ul#yearMenuEndEdu');
  var count = 31;

   for (var i = start_year; i > start_year - 20; i--) {
     ul.append('<li><a>' + i+'</a></li>');
   }
   $('ul#yearMenuEndEdu a').click(function(){
     $('#eduSelectedYearEnd').text($(this).text());
   });
 });
 /*  FINISHED */
 /*  EDUCATION MODAL START YEAR DROPDOWN */
 $('#eduYearStart').click(function(){
 var start_year = new Date().getFullYear();
 var ul = $('ul#yearMenuStartEdu');
 var count = 31;
  for (var i = start_year; i > start_year - 20; i--) {
    ul.append('<li><a>' + i+'</a></li>');
  }
  $('ul#yearMenuStartEdu a').click(function(){
    $('#eduSelectedYearStart').text($(this).text());
  });
});
/*  FINISHED */

 /*  EXPERIENCE MODAL DAY START DROPDOWN */
  $('#dayStart').click(function(){
      var ul = $('ul#dayMenuStart');
      var count = 31; // number of images
      for(var i = 1; i <= count; i++) {
         ul.append('<li><a>' + i+'</a></li>');
      }

      $('ul#dayMenuStart a').click(function(){
        $('#selectedDayStart').text($(this).text());
      });
      });
/*  FINISHED */

/*  EXPERIENCE MODAL DAY END DROPDOWN */
  $('#dayEnd').click(function(){
      var ul = $('ul#dayMenuEnd');
      var count = 31; // number of images
      for(var i = 1; i <= count; i++) {
          ul.append('<li id ='+i+'><a id ='+i+'>' + i+'</a></li>');
      }

      $('ul#dayMenuEnd a').click(function(){
          $('#selectedDayEnd').text($(this).text());
      });
  });
  /*  FINISHED */

/*  EXPERIENCE MODAL MONTH END DROPDOWN */
$('#newExperienceMonthStartul a').click(function(){
   $('#newExperienceMonthStartSpan').text($(this).text());
 });

 $('#newExperienceMonthEndul a').click(function(){
    $('#newExperienceMonthEndSpan').text($(this).text());
  });

  $('#monthMenuEnd a').click(function(){
     $('#selectedMonthEnd').text($(this).text());
   });

  $('#yearMenuEnd a').click(function(){
     $('#selectedYearEnd').text($(this).text());
   });

   $('#monthMenu a').click(function(){
      $('#selectedMonth').text($(this).text());
    });
   $('#yearMenu a').click(function(){
      $('#selectedYear').text($(this).text());
    });
  /*  FINISHED */

  /*  EDUCATION MODAL MONTH END DROPDOWN */
    $('#monthMenuEndEdu a').click(function(){
       $('#selectedMonthEndEdu').text($(this).text());
     });

     $('#monthMenuStartEdu a').click(function(){
        $('#selectedMonthStartEdu').text($(this).text());
      });
/*  FINISHED */

  $('#menu1 a').click(function(){
     $('#selected').text($(this).text());
   });
  $('#menu2 a').click(function(){
    $('#selected2').text($(this).text());
   });
  $('#menu3 a').click(function(){
    $('#selected3').text($(this).text());
    });
  $('#menu4 a').click(function(){
    $('#selected4').text($(this).text());
  });
  $('#menu5 a').click(function(){
    $('#selected5').text($(this).text());
  });

/*$( "#myrow" ).mouseenter(function(){
$(".fa-pencil-square-o").fadeIn( 200 );
});

$( "#myrow" ).mouseleave(function(){
$(".fa-pencil-square-o").fadeOut( 200 );
});

$( ".wrapper" ).mouseenter(function(){
$(".fa-pencil-square-o").fadeIn( 200 );
//$(".fa-trash").fadeIn( 200 );
});

$( ".wrapper" ).mouseleave(function(){
 $(".fa-pencil-square-o").fadeOut( 200 );
 //$(".fa-trash").fadeOut( 200 );
});*/


  $(".edit_profile").click(function() {
      $('#editProfileModal').modal('show');
      var id = $(this).attr('id');
      var array = id.split('+');
      console.log(array);

      $("#heading").val(array[0]);
      $("dropdown#location").val(array[1]);
      $("input#employees").val(array[3]);
      $("input#email1").val(array[4]);
      $("textarea#biodescription").val(array[5]);
      $("input#twitter").val(array[6]);
      $("input#facebook").val(array[7]);
      $("input#instagram").val(array[8]);
      $("input#linkedin").val(array[9]);
      $("input#google").val(array[10]);


      var companyname = $("input#companyname").val();
      var location = $("dropdown#location").val();
      var employees = $("input#employees").val();
      var email = $("input#email").val();
      var biodescription = $("textarea#biodescription").val();


  });



  $(".edit_profile_candidate").click(function() {
      $('#editProfileModalCandidate').modal('show');
      var id = $(this).attr('id');

      // get user and display information in modal window
      $.ajax({
         url: "/getUser",
         type: "POST",
         dataType: "json",
         data: {
             _id: id

         },
         success: function (data) {
             $("input#name").val(data.result.name);
             $("input#location").val(data.result.location);
             $("input#email1").val(data.result.email);
             $("textarea#biodescription").val(data.result.biodescription);
             $("input#twitter").val(data.result.twitter);
             $("input#facebook").val(data.result.facebook);
             $("input#instagram").val(data.result.instagram);
             $("input#linkedin").val(data.result.linkedin);
             $("input#google").val(data.result.google);
             $("input#technical_skills").val(data.result.technical_skills);
             $("input#profile_image_link").val(data.result.profile_image_link);
             $("input#video_link").val(data.result.video_url);
             $("input#imageOne").val(data.result.images[0].one);
             $("input#imageTwo").val(data.result.images[0].two);
             $("input#imageThree").val(data.result.images[0].three);
             $("input#imageFour").val(data.result.images[0].four);
             $("input#imageFive").val(data.result.images[0].five);
             $("input#imageSix").val(data.result.images[0].six);
          }
        })
      $('#updateProfile').click(function(){

        var _id = id;
        var name =  $("input#name").val();
        var location = $("input#location").val();
        var email = $("input#email1").val();
        var biodescription = $("textarea#biodescription").val();
        var twitter = $("input#twitter").val();
        var facebook = $("input#facebook").val();
        var instagram = $("input#instagram").val();
        var linkedin = $("input#linkedin").val();
        var google = $("input#google").val();
        var technical_skills = $("input#technical_skills").val();
        var profile_image_link = $("input#profile_image_link").val();
        var video_url = $("input#video_link").val();
        var imageOne = $("input#imageOne").val();
        var imageTwo = $("input#imageTwo").val();
        var imageThree = $("input#imageThree").val();
        var imageFour = $("input#imageFour").val();
        var imageFive = $("input#imageFive").val();
        var imageSix = $("input#imageSix").val();


        $('#profile_info_section').empty();
            $.ajax({
               url: "/updateCandidateProfile",
               type: "POST",
               dataType: "json",
               data: {
                   _id: _id,
                   name:name,
                   location: location,
                   email:email,
                   biodescription:biodescription,
                   twitter:twitter,
                   facebook:facebook,
                   instagram:instagram,
                   linkedin:linkedin,
                   google:google,
                   technical_skills:technical_skills,
                   profile_image_link:profile_image_link,
                   video_url:video_url,
                   imageOne:imageOne,
                   imageTwo:imageTwo,
                   imageThree:imageThree,
                   imageFour:imageFour,
                   imageFive:imageFive,
                   imageSix:imageSix
               },
               success: function (data) {

                 var html ="<i class='fa fa-pencil-square-o edit_profile_candidate fa-2x' id ="
                 +_id+"></i><p id ='heading'>"+name+
                 "</p><p><span><b>Location: </b></span><text class ='info'>"+location+
                 " </text></p><p><text><b>Email: </b></text><text class ='info'>"+email+
                 " </text></p><p><text><b>Technical Skills Results: </b></text><text class ='info'> "+technical_skills+
                 "%</text></p><p><text>"+biodescription+"</text></p></div>";
                  console.log(html);


                 $('#profile_info_section').append(html);
                   $('#editProfileModalCandidate').modal('hide');

                   }

                 });
                 });
  });



  $('#addImagesButton').click(function(){


    var imageOne = $("input#imageOne").val();
    var imageTwo = $("input#imageTwo").val();
    var imageThree = $("input#imageThree").val();
    var imageFour = $("input#imageFour").val();
    var imageFive = $("input#imageFive").val();
    var imageSix = $("input#imageSix").val();


    //$('#profile_info_section').empty();
        $.ajax({
           url: "/addImages",
           type: "POST",
           dataType: "json",
           data: {
            //   _id: _id,
               imageOne:imageOne,
               imageTwo:imageTwo,
               imageThree:imageThree,
               imageFour:imageFour,
               imageFive:imageFive,
               imageSix:imageSix
           },
           success: function (data) {

               console.log(data);



               $('#imageModal').modal('hide');

               }

             });
             //});
});

  $(".edit_profile").click(function() {
      $('#editProfileModalEmployer').modal('show');
      var id = $(this).attr('id');

      // get user and display information in modal window
      $.ajax({
         url: "/getUser",
         type: "POST",
         dataType: "json",
         data: {
             _id: id

         },
         success: function (data) {
             $("input#companyname").val(data.result.companyname);
             $("input#location").val(data.result.location);
             $("input#employees").val(data.result.employees);
             $("input#email1").val(data.result.email);
             $("textarea#biodescription").val(data.result.biodescription);
             $("input#twitter").val(data.result.twitter);
             $("input#facebook").val(data.result.facebook);
             $("input#instagram").val(data.result.instagram);
             $("input#linkedin").val(data.result.linkedin);
             $("input#google").val(data.result.google);
             $("input#profile_image_link").val(data.result.profile_image_link);
             $("input#video_link").val(data.result.video_url);
             $("input#imageOne").val(data.result.images[0].one);
             $("input#imageTwo").val(data.result.images[0].two);
             $("input#imageThree").val(data.result.images[0].three);
             $("input#imageFour").val(data.result.images[0].four);
             $("input#imageFive").val(data.result.images[0].five);
             $("input#imageSix").val(data.result.images[0].six);
          }
        })
      $('#updateEmployerProfile').click(function(){

        var _id = id;
        var companyname =  $("input#companyname").val();
        var location = $("input#location").val();
        var employees = $("input#employees").val();
        var email = $("input#email1").val();
        var biodescription = $("textarea#biodescription").val();
        var twitter = $("input#twitter").val();
        var facebook = $("input#facebook").val();
        var instagram = $("input#instagram").val();
        var linkedin = $("input#linkedin").val();
        var google = $("input#google").val();
        var profile_image_link = $("input#profile_image_link").val();
        var video_url = $("input#video_link").val();
        var imageOne = $("input#imageOne").val();
        var imageTwo = $("input#imageTwo").val();
        var imageThree = $("input#imageThree").val();
        var imageFour = $("input#imageFour").val();
        var imageFive = $("input#imageFive").val();
        var imageSix = $("input#imageSix").val();


        $('#profile_info_section').empty();
            $.ajax({
               url: "/updateEmployerProfile",
               type: "POST",
               dataType: "json",
               data: {
                   _id: _id,
                   name:name,
                   location: location,
                   employees: employees,
                   email:email,
                   biodescription:biodescription,
                   twitter:twitter,
                   facebook:facebook,
                   instagram:instagram,
                   linkedin:linkedin,
                   google:google,
                   profile_image_link:profile_image_link,
                   video_url:video_url,
                   imageOne:imageOne,
                   imageTwo:imageTwo,
                   imageThree:imageThree,
                   imageFour:imageFour,
                   imageFive:imageFive,
                   imageSix:imageSix
               },
               success: function (data) {

                 var html ="<i class='fa fa-pencil-square-o edit_profile fa-2x' id ="
                 +_id+"></i><p id ='heading'>"+companyname+
                 "</p><p><span><b>Location: </b></span><text class ='info'>"+location+
                 "</p><p><span><b>Employees: </b></span><text class ='info'>"+employees+
                 " </text></p><p><text><b>Email: </b></text><text class ='info'>"+email+
                 "</text></p><p><text>"+biodescription+"</text></p></div>";



                 $('#profile_info_section').append(html);
                   $('#editProfileModalEmployer').modal('hide');

                   }

                 });
                 });
  });









  $(function() {
    $("#addEducation").click(function() {
      var school = $("input#schoolEdu").val();
      var degree = $("input#degreeEdu").val();
      var location = $("input#locationEdu").val();
      var term = $("#input#term").val();
      var description = $("textarea#newDescriptionExperience").val();

      var dayStart = $('#newEducationDayStart span').text();
      var monthStart = $('#newEducationMonthStart span').text();
      var yearStart = $('#newEducationYearStart span').text();
      var start = (dayStart+" " +monthStart+ " "+yearStart);

      var dayEnd = $('#newEducationDayEnd span').text();
      var monthEnd= $('#newEducationMonthEnd span').text();
      var yearEnd = $('#newEducationYearEnd span').text();
      var end = (dayEnd +" " +monthEnd+ " "+yearEnd);

      console.log(start);
      console.log(end);


      $.ajax({
         url: "/addEducation",
         type: "POST",
         dataType: "json",
         data: {
             school: school,
             degree: degree,
             location:location,
             start:start,
             end:end,
             term:term,
             description:description
         },
         success: function (data) {
          // console.log(data.new_id);
           var html ="<div class='bs-callout bs-callout-danger' id ="+data.new_id+
           "><div id ='crud_links'><i class='fa fa-pencil-square-o updateEdu fa-2x' data-toggle='modal' data-target='#updateModalEdu' data-id='"
           +data.new_id+"+"+degree+"+"+school+"+"+location+"+"+description+"+"+term+"+"+start+"+"+end+
           "id ="+data.new_id+"+"+degree+"+"+school+"+"+location+"+"+description+"+"+term+"+"+start+"+"+end+
           " aria-hidden='true'></i><i class='fa fa-trash fa-2x' id ="+data.new_id+" data-toggle='modal' data-target='#deleteEducationModal' data-id="+data.new_id+" aria-hidden='true'></i></i></div><h4>"
           +degree+"</h4><p><strong>"+school+ "</strong> - " +start+" - "+end+"</p><p>"+location+"</p><p>"+description+"</p></div>";

           $('.container_education').append(html);
             $('#newEducationModal').modal('hide');
             $('#confirmEducationModal').modal('show');
             }

           });



    });
    });



      $("#addExperience").click(function() {
        var title = $("input#titleExp").val();
        var company = $("#input#companyExp").val();
        var location = $("input#locationExp").val();

        console.log(company);
        var description = $("textarea#newDescriptionExperience").val();
        var dayStart = $('#startExpSpan span').text();
        var monthStart = $('#monthExpSpan span').text();
        var yearStart = $('#newExperienceYearStart span').text();
        var start = (dayStart+" " +monthStart+ " "+yearStart);

        var dayEnd = $('#newExperienceDayEnd span').text();
        var monthEnd= $('#newExperienceMonthEnd span').text();
        var yearEnd = $('#newExperienceYearEnd span').text();
        var end = (dayEnd +" " +monthEnd+ " "+yearEnd);



        $.ajax({
           url: "/addExperience",
           type: "POST",
           dataType: "json",
           data: {
               title: title,
               company: company,
               location:location,
               start:start,
               end:end,
               description:description
           },
           success: function (data) {
             console.log(data.new_id);
             var html ="<div class='bs-callout bs-callout-danger' id ="+data.new_id+
             "><div id ='crud_links'><i class='fa fa-pencil-square-o updateEdu fa-2x' data-toggle='modal' data-target='#updateModalExp' data-id='"
             +data.new_id+"+"+title+"+"+company+"+"+location+"+"+description+"+"+start+"+"+end+
             "id ="+data.new_id+"+"+title+"+"+company+"+"+location+"+"+description+"+"+start+"+"+end+
             " aria-hidden='true'></i><i class='fa fa-trash fa-2x' id ="+data.new_id+" data-toggle='modal' data-target='#deleteEducationModal' data-id="+data.new_id+" aria-hidden='true'></i></i></div><h4>"
             +title+"</h4><p><strong>"+company+ "</strong> - " +start+" - "+end+"</p><p>"+location+"</p><p>"+description+"</p></div>";

             $('.container_experience').append(html);
               $('#newExperienceModal').modal('hide');
               $('#confirmExperienceModal').modal('show');
               }

             });
      });


      $(function() {
        $("#submitPosition").click(function() {

          var title = $("#selected5").text();
          var location = $("#selected2").text();
          var term = $("input#term").val();
          var teamwork_value = $("input#teamwork").val();
          var communication_value = $("input#communication").val();
          var initiative_value = $("input#initiative").val();
          var technical_skills_value = $("input#technical_skills").val();
          console.log(teamwork_value,communication_value,initiative_value,technical_skills_value);
          var description = $("textarea#description").val();
          var dayStart = $('#dayStartPosition span').text();
          var monthStart = $('#monthStartPosition span').text();
          var yearStart = $('#positionYearEnd span').text();
          var positionStart = (dayStart +" " +monthStart+ " "+yearStart);
        //  console.log(positionStart);
         $.ajax({
            url: "/addPosition",
            type: "POST",
            dataType: "json",
            data: {
              //  _id:_id,
                title: title,
                location:location,
                positionStart:positionStart,
                term:term,
                teamwork_value:teamwork_value,
                communication_value:communication_value,
                initiative_value:initiative_value,
                technical_skills_value:technical_skills_value,
                description:description
            },
            success: function (data) {

              //  console.log(data);
                var html ="<div class='bs-callout bs-callout-danger' id ="+data._id+"><div id ='crud_links'><i class='fa fa-pencil-square-o updateClass fa-2x' id ="+data._id+ "aria-hidden='true'></i> <i id ="+data._id+" class='fa fa-trash positionTrash fa-2x' data-id='{{_id}}' data-toggle='modal' data-target='#deleteModal' aria-hidden='true'></i></div><h4 id ='h4'>"+title+
                "</h4><p id ='location'>"+location+"<p><strong>Start:</strong> <text id ='start'>"+positionStart+"</text> / <strong>Term: </strong> <text id ='term'>"+term+"</text> months</p><p id ='description'>"+description+"</p> <button  id ="+data._id+" class='view_applied' data-toggle='modal' data-target='#appliedModal' > Applied Candidates</button><button  id ="+data.index_number+" class='view_match' data-toggle='modal' data-target='#matchModal' > Matched Candidate</button>";


                $('.container').append(html);
                $('#myModal').modal('hide');
                $('#confirmModal').modal('show');
                }

              });
            });
          });

/*  $(function() {
    $("#button").click(function() {

var location = $("#selected2").text();
alert(location);
});
});*/
/*  $(function() {
    $("#updatePosition").click(function() {
      var _id =  $(this).attr('_id');
      var title = $("input#title").val();
      var location = $('#selected2').text();
      var term = $("input#term").val();
      var start = $("input#start").val();
      var desciption = $("textarea#description").val();
      console.log(location);

           $.ajax({
               url: "/update_position",
               type: "POST",
               dataType: "json",
               data: {
                   _id: id,
                   title: title,
                   location: location,
                   term: term,
                   start: start,
                   desciption: desciption

               },
               success: function (data) {
                 console.log("hello");
               }

        });
});
});*/

// Update experience section \\
$('.updateExp').click(function(){
  $('#updateExpModal').modal('show');
  var id = $(this).attr('id');
  var array = id.split('+');
  var _id = array[0];

  $("input#title").val(array[1]);
  $("input#company").val(array[2]);
  $("input#location").val(array[5]);
  $("textarea#descriptionOfExperience").val(array[6]);

  var title = $("input#title").val();
  var location = $("input#location").val();
  var term = $("input#term").val();
  var start = $("input#start").val();
  var description = $("textarea#descriptionOfExperience").val();



$('#updateExperience').click(function(){

  var dayStart = $('#dayStart span').text();
  var monthStart = $('#monthStart span').text();
  var yearStart = $('#yearStart span').text();
  var newStart = (dayStart +" " +monthStart+ " "+yearStart);
  var dayEnd = $('#dayEnd span').text();
  var monthEnd= $('#monthEnd span').text();
  var yearEnd = $('#yearEnd span').text();
  var newEnd = (dayEnd +" " +monthEnd+ " "+yearEnd);
  var newTitle = $("input#title").val();
  var newCompany = $("input#company").val();
  var newLocation = $("input#location").val();
  var newDescription = $("textarea#descriptionOfExperience").val();
  console.log(newTitle);
  console.log(dayStart);
  console.log(monthStart);
  console.log(yearStart);
  console.log(newStart);
  console.log(dayEnd);
  console.log(monthEnd);
  console.log(yearEnd);
  console.log(newEnd);
  console.log(newCompany);
  console.log(newLocation);
  console.log(newDescription);


   $.ajax({
       url: "/updateExperience",
       type: "POST",
       dataType: "json",
       data: {
           _id: _id,
           newTitle: newTitle,
           newCompany: newCompany,
           newLocation: newLocation,
           newStart: newStart,
           newEnd: newEnd,
           newDescription: newDescription

       },
       success: function (data) {
         console.log(data);
        $('#updateExpModal').modal('hide');
       }

});
});
});


// Update Education Section \\
$('.updateEdu').click(function(){
  $('#updateModalEdu').modal('show');
  var id = $(this).attr('id');
  var array = id.split('+');
  console.log(array);
  $("input#degree").val(array[1]);
  $("input#school").val(array[2]);
  $("input#location").val(array[3]);
  $("textarea#descriptionOfEducation").val(array[4]);

  var school = $("input#school").val();
  var degree = $("input#degree").val();
  var location = $("input#location").val();
  var startDay = $("#selectedDayStartEdu").val();
  var description = $("textarea#descriptionOfEducation").val();
  var _id = array[0];

$('#updateEducation').click(function(){
    var dayStart = $('#dayStartEdu span').text();
    var monthStart = $('#monthStartEdu span').text();
    var yearStart = $('#eduYearStart span').text();
    var newStart = (dayStart +" " +monthStart+ " "+yearStart);
    var dayEnd = $('#dayEndEdu span').text();
    var monthEnd= $('#monthEndEdu span').text();
    var yearEnd = $('#eduYearEnd span').text();
    var newEnd = (dayEnd +" " +monthEnd+ " "+yearEnd);
    var newSchool = $("input#school").val();
    var newDegree = $("input#degree").val();
    var newLocation = $("input#location").val();
    var newDescription = $("textarea#descriptionOfEducation").val();

   $.ajax({
       url: "/updateEducation",
       type: "POST",
       dataType: "json",
       data: {
           _id: _id,
           newDegree: newDegree,
           newSchool: newSchool,
           newLocation: newLocation,
           newStart: newStart,
           newEnd: newEnd,
           newDescription: newDescription
       },
       success: function (data) {
         console.log(data._id);
         (jQuery)('#'+_id).html('');
         var html ="<div id ='crud_links'><i class='fa fa-pencil-square-o updateEdu fa-2x' data-toggle='modal' data-target='#updateModalEdu' data-id='"+_id+"+"+newDegree+"+"+newSchool+"+"+newLocation+"+"+newDescription+" id ="+_id+"+"+newDegree+"+"+newSchool+"+"+newLocation+"+"+newDescription+" aria-hidden='true'></i> <i class='fa fa-trash education-trash fa-2x' data-toggle='modal' data-target=''#deleteEducationModal' id ="+_id+" aria-hidden='true'></i></div><h4>"+newDegree+
         "</h4><p><strong>"+newSchool+ "</strong> - " +newStart+" - "+newEnd+"</p><p>"+newLocation+"</p><p>"+newDescription+"</p></div>";

         $('#'+_id).append(html);
         $('#updateModalEdu').modal('hide');
       }

});
});
});





  $('.updateClass').click(function(){
    $('#updateModal').modal('show');
    var _id = $(this).attr('id');

    var array = _id.split('+');
    var _id = array[0];
    console.log(_id);

    $("input#title").val(array[1]);
    $("dropdown#location").val(array[2]);
    $("input#term").val(array[3]);
    $("input#start").val(array[4]);
    $("textarea#description").val(array[5]);

  $('#updatePosition').click(function(){
//var _id = $(this).attr('data-id');
        var title = $("input#title1").val();
        var location = $('#selected2').text();
        var term = $("input#term1").val();
        var start = $("#start1").val();
        var description = $("textarea#description1").val();
        var teamwork_value = $("input#teamwork1").val();
        var communication_value = $("input#communication1").val();
        var initiative_value = $("input#initiative1").val();
        var technical_skills_value = $("input#technical_skills1").val();
        console.log(title);
        console.log(_id);
        console.log(location);
        console.log(start);
        console.log(description);
        console.log(teamwork);
        console.log(communication);
        console.log(initiative);
        console.log(technical_skills);

        var newTitle =  $('#input#title').text();
        var newTerm =  $('#input#term').text();
      //  console.log(start);
     $.ajax({
         url: "/update_position",
         type: "POST",
         dataType: "json",
         data: {
             _id: _id,
             title: title,
             location: location,
             term: term,
             start: start,
             description: description,
             teamwork_value: teamwork_value,
             communication_value: communication_value,
             initiative_value: initiative_value,
             technical_skills_value: technical_skills_value,


         },
         success: function (data) {
          console.log(data);
           $('#updateModal').modal('hide');
         }

  });
  });
  });
//delete education
  $('.education-trash').click(function(){
    var id = $(this).attr('id');
      console.log(id);
    //$('#deleteExpModal').modal('show');

    $("#deleteEducationButton").click(function() {

        $.ajax({
         url: "/delete_education",
         type: "POST",
         dataType: "json",
         data: {
             _id: id,
         },
         success: function (data) {
           console.log(data.theID);
           //$(this).closest("div").parent(".bs-callout-danger").remove();
        //  $("#"+data.theID).remove();
          $("div").remove("#"+data.theID);
           $('#deleteEducationModal').modal('hide');
         },
         error: function (err) {

         }
      });

    });
    });


    $('.positionTrash').click(function(){
      var _id = $(this).data('id');
        console.log(_id);
      $('#deleteModal').modal('show');

      $("#deletePositionButton").click(function() {
      //  console.log("clicked");
          $.ajax({
           url: "/delete_position",
           type: "POST",
           dataType: "json",
           data: {
               _id: _id,
           },
           success: function (data) {
          //   console.log("here "+data.theID);
             //$(this).closest("div").parent(".bs-callout").remove();
            // e.preventDefault();
            //  $(this).closest('.bs-callout').remove();
              $("div").remove("#"+_id);
                 $('#deleteModal').modal('hide');
            //a  return false;
           },
           error: function (err) {
            console.log(err);
           }
        });

      });

    //  $(".modal-body #this_id").val( id );
  //  var post_id = $(this).closest("div").parent(".bs-callout-danger").attr("id");
    });
//delete position
  $('.experience-trash').click(function(){
    var id = $(this).data('id');
      console.log(id);
    $('#deleteExperienceModal').modal('show');

    $("#deleteExperienceButton").click(function() {

        $.ajax({
         url: "/delete_experience",
         type: "POST",
         dataType: "json",
         data: {
             _id: id,
         },
         success: function (data) {
           $('#deleteExperienceModal').modal('hide');
        //   $(this).closest("div").parent(".bs-callout-danger").remove();
        $("div").remove("#"+data.theID);

         },
         error: function (err) {
          console.log(err);
         }
      });

    });

  //  $(".modal-body #this_id").val( id );
//  var post_id = $(this).closest("div").parent(".bs-callout-danger").attr("id");
  });




    $('.radio_buttons').click(function(){

        if($(this).attr("value")=="candidate"){
        //  $(this).css({"visibility":"visible"});
            $("#candidate_reg_form").css({"visibility":"visible","display":"block"});
            $("#employer_reg_form").css({"visibility":"hidden","display":"none" });

            //$(".red").show();
        }
        else{
            //$("#employer_reg_form").show();
            //$("#candidate_reg_form").hide();
            $("#candidate_reg_form").css({"display":"none"});
            $("#employer_reg_form").css({"visibility":"visible","display":"block" });

        }

    });





        $(".view_applied").click(function() {
            var _id = $(this).attr('id');

            //alert(_id);
          $.ajax({
             url: "/applied_candidates",
             type: "POST",
             dataType: "json",
             data: {
               _id:_id //position_id
             },
             success: function (data) {
                if(data){
                  // $('#appliedModal').modal('show');
                    $('#buttonBody').empty();
                    $('#modalBody').empty();
                    var buttons = "<button id='rank_candidates' class = 'buttonGroup' value='rank'>Rank</button><button id='save_preference' class = 'buttonGroup'  value='save'>Save Preference</button>";


                    $('#buttonBody').append(buttons);
                   for(i = 0; i < data.results.length; i++){
                   var html ="<div class='bs-callout bs-callout-danger' id ="
                   +data.results[i].position.applied.candidate_id+"+"
                   +data.results[i].position.applied.teamwork+"+"
                   +data.results[i].position.applied.initiative+"+"
                   +data.results[i].position.applied.communication+"+"
                   +data.results[i].position.applied.technical_skills+"+"
                   +data.results[i].position.teamwork_value+"+"
                   +data.results[i].position.communication_value+"+"
                   +data.results[i].position.initiative_value+"+"
                   +data.results[i].position.technical_skills_value+"+"
                   +_id+"+"
                   +data.results[i].position.index_number+"+"
                    +data.results[i].position.applied.index_number+"><img class='img' id ='thumbnail_image1' src ='"+data.results[i].position.applied.profile_image+
                   "'/> <h4 id ='h4'>"+data.results[i].position.applied.name+"</h4><p id='first_p'>"+data.results[i].position.applied.location+"</p><button class='view_candidate defaultClass1' id = "+data.results[i].position.applied.candidate_id+">View candidate</button></div>";


                   $('#modalBody').append(html);
                     }
                   }


                }

        });
      });

      $(".view_candidate_match").click(function() {
    var _id = $(this).attr('id');
    $('#modalBodyMatch').empty();
  //  console.log(_id);
        $.ajax({
           url: "/findCandidateMatching",
           type: "POST",
           dataType: "json",
              data: {
                  _id:_id
              },
           success: function (data) {
             console.log(data.results[0]._id);
             console.log(data.results[0].companyname);
             var html ="<div class='bs-callout bs-callout-danger' id ="+data.results[0]._id+"><img class='img' id ='thumbnail_image1' src ='"+data.results[0].profile_image_link+
             "'/> <h4 id ='h4'>"+data.results[0].companyname+"</h4><p id='first_p'>"+data.results[0].position.title+"</p><p id='first_p'>"+data.results[0].email+"</p></div>";
    $('#modalBodyMatch').append(html);
    }
         })
    });
      $(".view_match").click(function() {
  var _id = $(this).attr('id');
  $('#modalBodyMatch').empty();
  console.log(_id);
        $.ajax({
           url: "/findPositionMatching",
           type: "POST",
           dataType: "json",
              data: {
                  _id:_id
              },
           success: function (data) {
             console.log(data.results._id);
             var html ="<div class='bs-callout bs-callout-danger' id ="+data.results._id+"><img class='img' id ='thumbnail_image1' src ='"+data.results.profile_image_link+
             "'/> <h4 id ='h4'>"+data.results.name+"</h4><p id='first_p'>"+data.results.location+"</p><p id='first_p'>"+data.results.email+"</p></div>";
   $('#modalBodyMatch').append(html);
    }
         })
    });
    $("#appliedModal").on("click","#match_candidates", function(){

      $.ajax({
         url: "/getAllPreferences",
         type: "POST",
         dataType: "json",
            data: {
            //  array:arrayOfPositionIndexes
            },
         success: function (data) {
           console.log(data);
         }
       })

    });
    $("#appliedModal").on("click","#test", function(){
      var arrayOfPositionIndexes=[931,901];
      //console.log(arrayOfPositionIndexes);
      var array =[];
      $.ajax({
         url: "/checkPreferences",
         type: "POST",
         dataType: "json",
            data: {
              array:arrayOfPositionIndexes
            },
         success: function (data) {
           console.log(data);
            for(var i = 0; i < data.results.length; i++){
              //console.log(data.results[i].position.preference.length);
              //array.push(data.results[i].position.pos_index_number);
            //  for(var i = 0; i < data.results[i].position.preference.length; i++){
            //    console.log(data.results[i].position.preference.length);
              //  array.push(data.results.position.preference[i].candidate_index_number);
              //  array.push(data.results.position.preference[i].weightedScore);
                console.log(data.results.length);
            //  for(var i = 0; i < data.results[i].position.preference.length; i++){

          //  }
                }

          // console.log(data.results[0].preference.length);
           /*console.log(data.results[0].position.preference[0].candidate_index_number);
          for(var i = 0; i < data.results.length; i++){
              arrayOfPositionIndexes.push(data.results[i].position.pos_index_number);
          //  arrayOfPositionIndexes.push(data.results[i].position.preference[i].candidate_index_number);
           }
           for(var i = 0; i < data.results.position.length; i++){
               arrayOfPositionIndexes.push(data.results[i].position.pos_index_number);
           //  arrayOfPositionIndexes.push(data.results[i].position.preference[i].candidate_index_number);
            }
          console.log(arrayOfPositionIndexes);*/

         }
       })

      /* $.ajax({
          url: "/checkPreferences",
          type: "POST",
          dataType: "json",
             data: {
                arrayOfPositionIndexes
             },
          success: function (data) {
           console.log(data);
          }
        })*/


    });
    $("#appliedModal").on("click","#rank_candidates", function(){
      var array =[];
      var newarray =[];
      var teamwork_value;
      var communication_value;
      var initiative_value;
      var technical_skills_value;
      var arrayOfUserIds =[];
      var index_number;
      $('div',$('div#modalBody')).each(function() {
          var fullId =$(this).attr('id');
          var array = fullId.split('+');
        //  console.log("thearray " +array);
          var _id = array[0];
          index_number = array[11];
        //  console.log(index_number);
          var position_id = array[9];
          teamwork_value = array[5];
          communication_value = array[6];
          initiative_value = array[7];
          technical_skills_value = array[8];
          pos_index_number = array[10];
        //console.log("thenum "+pos_index_number);
          arrayOfUserIds.push({_id:_id,index_number:index_number,teamwork_value:teamwork_value,communication_value:communication_value,initiative_value:initiative_value,technical_skills_value:technical_skills_value,position_id:position_id,pos_index_number:pos_index_number});

        });

  console.log("arrayOfUserIds");
  console.log(arrayOfUserIds);
          var object={};
          var _id;
          var arrayOfUsers =[];
          var arrayOfWeightedScores=[];
          var teamwork;
          var initiative;
          var communication;
          var technical_skills;
          var newarrayjane =[];
          var finalArray =[];
          newarrayjane.push(arrayOfUserIds);
          var index_number1;
          console.log(newarrayjane);
          $.post("/getMultipleUsersAndRank",
            {array:JSON.stringify(newarrayjane)},
            function(data,status){

              finalArray.push(data);
              console.log("final");

              console.log(finalArray);
              //onsole.log(finalArray[0].index_number);

              for(i = 0; i < finalArray[0].results.length; i++){
                //  console.log(finalArray[0][i].index_number);
                position_id1 = finalArray[0].position_id;
                index_number1 = finalArray[0].results[i].index_number;

                teamwork = finalArray[0].results[i].survey[0].teamwork;
                communication = finalArray[0].results[i].survey[0].communication;
                initiative = finalArray[0].results[i].survey[0].initiative;
                technical_skills = finalArray[0].results[i].technical_skills;
                var weightedTotal = ((teamwork*finalArray[0].teamwork_value)
                +(initiative*finalArray[0].initiative_value)+
                (communication*finalArray[0].communication_value)+
                (technical_skills*finalArray[0].technical_skills_value));

               arrayOfWeightedScores.push({_id:finalArray[0].results[i]._id,
                 index_number:index_number1,
                 pos_index_number:finalArray[0].pos_index_number,
                 profile_image:finalArray[0].results[i].profile_image_link,
                 position_id:position_id1,
                 name:finalArray[0].results[i].name,
                 email:finalArray[0].results[i].email,
                 location:finalArray[0].results[i].location,
                 score:weightedTotal});

                 console.log("arrayOfWeightedScores");
                 console.log(arrayOfWeightedScores);

           }
           //console.log("here");
           //console.log(arrayOfWeightedScores);
           arrayOfWeightedScores.sort(function (a, b) {
             return b.score - a.score;
           });
          //  console.log(arrayOfWeightedScores);
            $('#modalBody').fadeOut(500, function() {
             $(this).empty().show();
             });
             $('#modalBody').fadeIn(500, function() {
               for(i = 0; i < arrayOfWeightedScores.length; i++){

               var html ="<div class='bs-callout bs-callout-danger' id ="+arrayOfWeightedScores[i]._id+"+"+arrayOfWeightedScores[i].score+"+"+arrayOfWeightedScores[i].index_number+"+"+arrayOfWeightedScores[i].position_id+"+"+arrayOfWeightedScores[i].index_number+"+"+arrayOfWeightedScores[i].pos_index_number+"><img class='img' id ='thumbnail_image1' src ='"+arrayOfWeightedScores[i].profile_image+
               "'/> <h4 id ='h4'>"+arrayOfWeightedScores[i].name+"</h4><p id='first_p'>"+arrayOfWeightedScores[i].location+"</p><p id='first_p'>"+arrayOfWeightedScores[i].email+"</p><button class='view_candidate' id = "+arrayOfWeightedScores[i]._id+">View candidate</button></div>";
               $('#modalBody').append(html);
            //   $('#rank_candidates').visibility).each(function() {
                 $('#rank_candidates').css('visibility','hidden').hide().fadeOut('slow');
                 $('#save_preference').css('visibility','visible').show().fadeIn('slow');

             }
             });


            });

        });


        $("#appliedModal").on("click","#save_preference", function(){
            var arrayToDb =[];
            $('div',$('div#modalBody')).each(function() {
                var fullId =$(this).attr('id');
                var array = fullId.split('+');
                var candidate_id = array[0];
                var weightedScore = array[1];
            //    var weightedScore = array[1];
                var index_number = array[2];
                var position_id = array[3];
                var index_number= array[4];
                var pos_index_number= array[5];

                arrayToDb.push({weightedScore:weightedScore,index_number:index_number,pos_index_number:pos_index_number});
          //      arrayToDb.push({candidate_id:candidate_id,weightedScore:weightedScore,position_id:position_id,candidate_index_number:candidate_index_number,pos_index_number:pos_index_number});

              });

              console.log("here");
              console.log(JSON.stringify(arrayToDb));
              $.post("/save_preference",
                {
                  array:JSON.stringify(arrayToDb)},
                function(data,status){
                  $('#appliedModal').modal('hide');

                });


      });





/*    $("#appliedModal").on("click","#rank_candidates", function(){
      var array =[];
      var newarray =[];
      var teamwork_value;
      var communication_value;
      var initiative_value;
      var technical_skills_value;
      $('div',$('div#modalBody')).each(function() {
            var fullId =$(this).attr('id');
            var array = fullId.split('+');
            var _id = array[0];
            var teamwork = array[1];
            var initiative = array[2];
            var communication = array[3];
            var technical_skills = array[4];
            teamwork_value = array[5];
            communication_value = array[6];
            initiative_value = array[7];
            technical_skills_value = array[7];
            var weightedTotal = ((teamwork*teamwork_value)+(initiative*initiative_value)+(communication*communication_value)+(technical_skills*technical_skills_value));
            var object ={"_id":array[0],"weightedTotal":weightedTotal};
            newarray.push(object);
        });
        // sort by value
        newarray.sort(function (a, b) {
          return b.weightedTotal - a.weightedTotal;
        });


 var arraynew=[];
 arraynew.push(newarray);

   console.log(arraynew);

 $.post("/rankcandidates",
   {array:JSON.stringify(arraynew),
   teamwork_value:teamwork_value,
   communication_value:communication_value,
   initiative_value:initiative_value,
   technical_skills_value:technical_skills_value},
   function(data,status,teamwork_value){
     var data1 = JSON.stringify(data);
    // console.log(data1);
     var newdata = JSON.parse(data1);

     var runagain =[];
     for(i = 0; i < newdata.length; i++){
      // var _id = newdata[i];
       console.log(newdata[i].teamwork_value);
       var teamwork = newdata.results[i].survey[0].teamwork;
    //   console.log(teamwork);
       var initiative = newdata[i].survey[0].initiative;
       var communication = newdata[i].survey[0].communication;
       var technical_skills = newdata[i].survey[0].technical_skills;
       var teamwork_value =newdata[i].teamwork_value;
       var initiative_value = newdata[i].initiative_value;
       var communication_value = newdata[i].communication_value;
       var technical_skills_value = newdata[i].technical_skills_value;

       var weightedTotal = ((teamwork*teamwork_value)+(initiative*initiative_value)+(communication*communication_value)+(technical_skills*technical_skills_value));

      console.log(weightedTotal);
}


     $('#modalBody').fadeOut(500, function() {
      $(this).empty().show();
      });
      $('#modalBody').fadeIn(500, function() {
        for(i = 0; i < newdata.results.length; i++){

        var html ="<div class='bs-callout bs-callout-danger' id ="+newdata.results[i]._id+"><img class='img' id ='thumbnail_image' src ='"+newdata.results[i].profile_image_link+
        "'/> <h4 id ='h4'>"+newdata.results[i].name+"</h4><p id='first_p'>"+newdata.results[i].location+"</p><p id='first_p'>"+newdata.results[i].email+"</p><button class='view_candidate' id = "+newdata.results[i]._id+">View candidate</button></div>";
        $('#modalBody').append(html);
      }
      });

   });
   });

        //  var newArray =JSON.stringify(array);


      /*$.ajax({
         url: "/rankcandidates",
         type: "POST",
         dataType: "json",
            data: {
              newarray:newarray
            },
         success: function (data) {
           //console.log(data);
           $('#modalBody').fadeOut(500, function() {
            $(this).empty().show();
          });
          /*   $('#modalBody').fadeIn(500, function() {
            for(i = 0; i < data.results.length; i++){
            var html ="<div class='bs-callout bs-callout-danger' id ="+data.results[i]._id+"><img class='img' id ='thumbnail_image' src ='"+data.results[i].profile_image+
            "'/> <h4 id ='h4'>"+data.results[i].name+"</h4><p id='first_p'>"+data.results[i].email+"</p><p id='first_p'>"+data.results[i].location+"</p><button class='view_candidate' id = "+data.results[i]._id+">View candidate</button></div>";

            $('#modalBody').append(html);
          //}
      //  }
    //  })

      // }
       //})

    });


    //});*/
  //  $(function() {


    $("#testAlgorithm").click(function() {
      var array =[];
      var prefArray =[];


              $.ajax({
                 url: "/testAlgorithm",
                 type: "POST",
                 dataType: "json",
                 data: {
                 },
                success: function (data) {
                  console.log(data);


              }

            })
          //  function(sma) {




});
            //});




      $("#showApplied").click(function() {
        $( "#modalBody" ).empty();
        var ordered_divs= [];
        var positions;

        $.ajax({
           url: "/applied",
           type: "POST",
           dataType: "json",
           data: {
           },
           success: function (data) {

           for(i = 0; i < data.results.length; i++){
             var html ="<li><div class='bs-callout bs-callout-danger' id ="
             +data.results[i].position.index_number+"+"
             +data.results[i].position._id+"><img class='img' id ='thumbnail_image' src ='"
             +data.results[i].profile_image_link+"'/> <h4 id ='h4'>"
             +data.results[i].position.title+"</h4><p id='first_p'>"
             +data.results[i].companyname+"</p><p id='second_p'>"
             +data.results[i].position.description+"</p></div></li>"
             $('#modalBody').append(html); // append the positions to the div
           }
             $('#appliedModal').modal('show'); // show the modal with positions
             $("#listOfApplied").sortable({ // enable the sortable function for the list items
              update: function(event, ui) { // on update get the position_id and index position of each div
                     $('#listOfApplied li').each( function(e) {
                        // console.log({position_id: $(this).prop('id'), index_position: $(this).find('div').prop('id')});
                         ordered_divs.push({position_id: $(this).prop('id'), index_position: $(this).find('div').prop('id')});
                      });
                     positions = ordered_divs.join(';');
                    }
                  });
            }
          })

        });

        $("#listModalBody").on("click","#delete", function(){

          $.post("/deleteall",

            function(data,status){
              console.log(status);
            });
        });


   // save funtion
  $("#listModalBody").on("click","#saveOrder", function(){
        var ordered_divs= [];

    $("#listOfApplied li").sort(function (a, b) {
          return parseInt(a.id) > parseInt(b.id);
      }).each(function () {
         // get id and split to separate index number and index position
          var fullid = $(this).find('div').prop('id');
          var array = fullid.split('+');
//index number will always be at position 0, while the position is taken from the list item index
          ordered_divs.push({index_number:array[0],index_position: $(this).index() });
        });
        var arrayOfObjects =[]; // define array
        var array =[]; // define array
        // loop through each array and add index number with the position to arrayOfObjects
          for(i = 0; i < ordered_divs.length; i++){
             var index_number = ordered_divs[i].index_number;
             var index_position=ordered_divs[i].index_position;
             arrayOfObjects.push(ordered_divs[i]);

         }
         array.push(arrayOfObjects); // push arrayOfObjects to final array

         //post request with a url of /insertPositionIndex
        $.post("/insertPositionIndex",
          {array:JSON.stringify(array)}, //turn array into string and pass to route file
          function(data,status){
             $('#appliedModal').modal('hide'); // hide the original modal
             $('#preferenceModal').modal('hide'); // show the confirmation modal
          });

    });

      //  $(function() {

            /*  $("#listOfApplied li").sort(function (a, b) {
                  return parseInt(a.id) > parseInt(b.id);
              }).each(function () {
                //  console.log($(this).text());
                  ordered_divs.push({ position_id: $(this).find('div').prop('id'),index_position: $(this).index() });

                });*/
//console.log(positions);
              /*  var arrayOfObjects =[];

                for(i = 0; i < ordered_divs.length; i++){
                   var position_id = ordered_divs[i].position_id;
                   var index_position=ordered_divs[i].index_position;
                   arrayOfObjects.push(position_id);
                   arrayOfObjects.push(index_position);
               }*/

              // console.log(arrayOfObjects);
            /*    $.ajax({
                   url: "/insertPositionIndex",
                   type: "POST",
                   dataType: "json",
                   data: {
                      ordered_divs
                   },
                   success: function (data) {
                      //console.log(data);

                }
              })*/
            //}
          //  });
          //  });
    //  });
    //  });









    $(function() {
      $("#modalBody").on("click",".view_candidate", function(){
          var _id = $(this).attr('id');
          console.log(_id);
           $('#candidate_profile_modal').modal('show');
             $( "#modalBodyCandidate" ).empty();

           $.ajax({
              url: "/getUser",
              type: "POST",
              dataType: "json",
              data: {
                  _id: _id
              },
              success: function (data) {
            $('#modalBodyCandidate').empty();
            $('#modalBodyCandidate2').empty();
            $('#modalBodyCandidate3').empty();
            $('#modalBodyCandidate4').empty();
                var html = "<div class='jumbotron' id ='candidate_header'><div class='row' id='myrow1'><div class='col-md-4' ><img class='img' src = '"+data.result.profile_image_link+
                "' id ='profile_image' /></div><div class='col-md-8' id ='profile_info_section'><p id ='heading'>"+data.result.name+"</p><p><span><b>Location: </b></span><text class ='info'>"
                +data.result.location+ "</text></p><p><text><b>Email: </b></text><text class ='info'>"
                +data.result.email+ "</text></p><p><text><b>Technical Skills Results: </b></text><text class ='info'>"
                +data.result.technical_skills+"% </text></p><p><text>"
                +data.result.biodescription+"</text></p></div><div class='social-icons1'><a href='http://"
                +data.result.twitter+"'class='btn btn-round btn-clear btn-twitter'><i class='fa fa-twitter'></i></a><a href='http://"
                +data.result.facebook+"' class='btn btn-round btn-clear btn-facebook'><i class='fa fa-facebook'></i></a><a href="
                +data.result.instagram+"' class='btn btn-round btn-clear btn-instagram'><i class='fa fa-instagram'></i></a><a href="
                +data.result.linkedin+"' class='btn btn-round btn-clear btn-linkedin'><i class='fa fa-linkedin-square'></i></a><a href="
                +data.result.google+" class='btn btn-round btn-clear btn-google'><i class='fa fa-google-plus'></i></a></div></div><div class='row' id = 'second_row'><div class='col-md-6' id = 'experience'><div class='container-fluid' id ='images'><div class='row'><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].one+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].two+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].one+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].four+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].five+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].six+"'></div></div></div></div></div><div class='col-md-6' id ='video_content'><iframe width='560' height='315'; src= 'https://www.youtube.com/embed/Mo_vRjtkgSI' frameborder='0' allowfullscreen></iframe></div></div><section id='page-education' class='page-education'><div class='container'><header class='section-header'><h2 class='section-title'><span>Education</span></h2><div class='spacer'></div></header>";
                  $('#modalBodyCandidate').append(html);

         for(i = 0; i < data.result.education.length; i++){
            var html2 =  "<div class='bs-callout bs-callout-danger' id ='"
                  +data.result.education[i]._id+"'><h4>"
                  +data.result.education[i].degree+"</h4><p><strong>"
                  +data.result.education[i].school+ "</strong> -  "
                  +data.result.education[i].start+" - "
                  +data.result.education[i].end+"</p><p>"
                  +data.result.education[i].location+"</p><p>"
                  +data.result.education[i].description+"</p></div></div></section>";
                  $('#modalBodyCandidate2').append(html2);
              }
              var experience_heading = "<section id='page-education' class='page-education'><div class='container'><header class='section-header'><h2 class='section-title'><span>Experience</span></h2><div class='spacer'></div></header>";
              $('#modalBodyCandidate3').append(experience_heading);
          for(i = 0; i < data.result.experience.length; i++){
            var html4 ="<div class='bs-callout bs-callout-danger' id ="
                +data.result.experience[i]._id+"><h4>"
                +data.result.experience[i].title+"</h4><p><strong>"
                +data.result.experience[i].company+"</strong> - "
                +data.result.experience[i].start+" - "
                +data.result.experience[i].end+"</p><p>"
                +data.result.experience[i].location+"</p><p>"
                +data.result.experience[i].description+"</p></div></div></div></div></section></div></div>";
                $('#modalBodyCandidate4').append(html4);
          }
      }
    });
    });
    });




    $("#search_button").click(function() {
      var position =  $('#selected').text(); // get dropdown input
      var location =  $('#selected2').text(); // get dropdown input
      $( "#search_results" ).empty(); // empty the container before rendering new content
      $('#search_results').css({"display":"none"}); // show the container

     $.ajax({
        url: "/search", // url of database call
        type: "POST",
        dataType: "json",
        data: {
            position: position, // pass input data
            location:location
        },
        success: function (data) {

        if (data.results.length > 0){ // if data returned
        //  $( "#search_results" ).empty(); // empty container

          //change visibility and show results section
          // fade out 'no results' message if already shown using a transition
          $('#no_results').css('visibility','hidden').hide().fadeOut('slow');
          $('#search_results').css({"display":"inline-block"});

    // loop through results from database
     for(i = 0; i < data.results.length; i++){
       //add data to variable
      var html ="<div class='col-md-12'><div class='bs-callout bs-callout-danger' id ="+data.results[i].position._id+"><img class='img' id ='thumbnail_image' src ='"+data.results[i].profile_image_link+
      "'/></img><h4 id ='h4'><a href = '#' class ='viewCompany' id ="+data.results[i]._id+">"+data.results[i].companyname+
      "</a></h4><h3 id ='secondary_title'>" +data.results[i].position.title+
      "</h3><p id ='location'>" +data.results[i].position.location+
      "<p><strong>Start:</strong> <text id ='start'>" +data.results[i].position.start+
      "</text> / <strong>Term: </strong> <text id ='term'>"+data.results[i].position.term+
      "</text> months</p><p id ='description'>"
      +data.results[i].position.description+
      "</p><button data-toggle='modal' data-target='#confirmAppliedModal' class ='btn btn-default apply' id="
      +data.results[i].position._id+ " href='#'>Apply</button>";

      $('#search_results').append(html); // render data on page

        }
        $('body').animate({ // add a scroll effect to navigate to search results
          scrollTop: $("#search_results").offset().top
        }, 'slow');
        }
        else{
           // if no results are found, hide search results section
           // Show no results message if search returns nothing
          $('#no_results').css('visibility','visible').show().fadeIn('slow');
        }
          }
        });
        });



      $(function() {
        $("#search_results").on("click","#rank_button", function(){
          var array =[];
          $('div',$('div.col-md-12')).each(function() {
            //console.log($(this).attr('id'));
              array.push($(this).attr('id'));

            });
              console.log(array);


          $.ajax({
             url: "/rankPositions",
             type: "POST",
             dataType: "json",
             data: {
                array:JSON.stringify(array)
             },
             success: function (data) {
                console.log(data);
              //  $('#search_results').fadeOut(400);

                for(i = 0; i < data.results.length; i++){

                 var html ="<div class='col-md-12'><div class='bs-callout bs-callout-danger' id ="+data.results[i].position._id+"><img class='img' id ='thumbnail_image' src ='"+data.results[i].profile_image_link+
                 "'/></img><h4 id ='h4'><a href = '#' class ='viewCompany' id ="+data.results[i]._id+">"+data.results[i].companyname+
                 "</a></h4><h4 id ='h4'>" +data.results[i].position.title+
                 "</h4><p id ='location'>" +data.results[i].position.location+
                 "<p><strong>Start:</strong> <text id ='start'>" +data.results[i].position.start+
                 "</text> / <strong>Term: </strong> <text id ='term'>"+data.results[i].position.term+
                 "</text> months</p><p id ='description'>"
                 +data.results[i].position.description+
                 "</p><a data-toggle='modal' data-target='#confirmAppliedModal' id ='apply' data-id="+data.results[i].position._id+
                 '+'+data.results[i].profile_image_link+
                 '+'+data.results[i].companyname+
                 '+'+data.results[i]._id+
                 '+'+data.results[i].position.title+
                 '+'+data.results[i].position.location+
                 '+'+data.results[i].position.term+
                 '+'+data.results[i].position.start+
                 '+'+data.results[i].position.description+" href='#'>Apply</a>";
                 $('#search_results').append(html);

             }
           }

        });
        });
        });



      $(function() {
        $("#search_results").on("click",".viewCompany", function(){
          var _id = $(this).attr('id');
          console.log(_id);
           $('#employer_profile_modal').modal('show');
            // $( "#modalBodyCandidate" ).empty();

           $.ajax({
              url: "/getUser",
              type: "POST",
              dataType: "json",
              data: {
                  _id: _id
              },
              success: function (data) {
                console.log(data);
            $('#modalBodyEmployer').empty();
            $('#modalBodyEmployer2').empty();
                var html = "<div class='jumbotron' id ='candidate_header'><div class='row' id='myrow1'><div class='col-md-4' ><img class='img' src = '"+data.result.profile_image_link+
                "' id ='profile_image' /></div><div class='col-md-8' id ='profile_info_section'><p id ='heading'>"+data.result.companyname+"</p><p><span><b>Location: </b></span><text class ='info'>"
                +data.result.location+ "</text></p><p><text><b>Employees: </b></text><text class ='info'>"
                +data.result.employees+ "</text></p><p><text><b>Email: </b></text><text class ='info'>"
                +data.result.email+ "</text></p><p><text>"
                +data.result.biodescription+"</text></p></div><div class='social-icons1'><a href='http://"
                +data.result.twitter+"'class='btn btn-round btn-clear btn-twitter'><i class='fa fa-twitter'></i></a><a href='http://"
                +data.result.facebook+"' class='btn btn-round btn-clear btn-facebook'><i class='fa fa-facebook'></i></a><a href="
                +data.result.instagram+"' class='btn btn-round btn-clear btn-instagram'><i class='fa fa-instagram'></i></a><a href="
                +data.result.linkedin+"' class='btn btn-round btn-clear btn-linkedin'><i class='fa fa-linkedin-square'></i></a><a href="
                +data.result.google+" class='btn btn-round btn-clear btn-google'><i class='fa fa-google-plus'></i></a></div></div><div class='row' id = 'second_row'><div class='col-md-6' id = 'experience'><div class='container-fluid' id ='images'><div class='row'><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].one+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].two+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].one+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].four+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].five+"'></div></div><div class='col-xs-4 col-sm-5cols'><div class='thumbnail'><img src='"
                +data.result.images[0].six+"'></div></div></div></div></div><div class='col-md-6' id ='video_content'><iframe width='560' height='315'; src= 'https://www.youtube.com/embed/Mo_vRjtkgSI' frameborder='0' allowfullscreen></iframe></div></div><section id='page-education' class='page-education'><div class='container'><header class='section-header'><h2 class='section-title'><span>Positions</span></h2><div class='spacer'></div></header>";
                  $('#modalBodyEmployer').append(html);

          for(i = 0; i < data.result.position.length; i++){
            var html2 =  "<div class='bs-callout bs-callout-danger' id ='"
                  +data.result.position[i]._id+"'><h4 id ='h4'>"
                  +data.result.position[i].title+"</h4><p id ='location'>"
                  +data.result.position[i].location+"</p><p><strong>Start:</strong> <text id ='start'>"
                  +data.result.position[i].start+"</text> / <strong>Term: </strong> <text id ='term'>"
                  +data.result.position[i].term+"</text> months</p>"
                  +data.result.position[i].description+"</p></div></div></section>";
                  $('#modalBodyEmployer2').append(html2);
              }

          }
        });
        });

});


    $(function() {
      $("#search_results").on("click",".apply", function(){
          var id = $(this).attr('id');
        //  console.log(id);
          // empty the container so the position is not rendered more than once in the modal
          $( "#appliedModalBody" ).empty();
          $( "#appliedModalFooter" ).empty();

          $.ajax({
             url: "/getPositionById",
             type: "POST",
             dataType: "json",
             data: {
                 _id: id,

             },
             success: function (data) {

                //$('#positionApplied').modal('show');
                //$('#confirmAppliedModal').modal('hide');
                var html ="<div class='col-md-12'><div class='bs-callout bs-callout-danger' id ="+data.results[0]._id+"><img class='img' id ='thumbnail_image' src ='"+data.results[0].profile_image_link+
                "'/></img><h4 id ='h4'>"+data.results[0].companyname+
                "</h4><h4 id ='h4'>"+data.results[0].position.title+
                "</h4><p id ='location'>" +data.results[0].position.location+
                "<p><strong>Start:</strong> <text id ='start'>"+data.results[0].position.start+
                "</text> / <strong>Term: </strong> <text id ='term'>"+data.results[0].position.term+
                "</text> months</p><p id ='description'>"
                +data.results[0].position.description+
                "</p>";

                var buttons = "<button type='button' id ='confirmApplyButton' class="+data.results[0]._id+"+"+data.results[0].position._id+">Yes</button><button type='button' class ='confirmApplyButton' data-dismiss='modal'>No</button>";

                $( "#appliedModalBody" ).append(html);
                $( "#appliedModalFooter" ).append(buttons);

                 }

               })
             });
  $(".modal-content").on("click","#confirmApplyButton", function(){
    //  $("#confirmApplyButton").click(function() {
        var id = $(this).attr('class');
        var array = id.split('+');
        console.log(array);
        $.ajax({
           url: "/apply",
           type: "POST",
           dataType: "json",
           data: {
               company_id: array[0],
               position_id:array[1]
           },
           success: function (data) {
             console.log(data);

              $('#positionApplied').modal('show');
              $('#confirmAppliedModal').modal('hide');

               }
             });
             });
      });
    });
// });
//});
