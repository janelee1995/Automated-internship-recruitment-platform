var app = module.parent.exports.app;
var User = require('../models/user.js');
var Locations = require('../models/locations.js');
var Positions = require('../models/positions.js');
var Preferences = require('../models/preferences.js');
//var PositionApplied = require('../models/user.js').PositionApplied;
var PythonShell = require('python-shell');
var findInFiles = require('find-in-files');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('python_result.txt');
var permission = require('permission');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
mongoose.set('debug', true);
var myParser = require("body-parser");
app.use(myParser.urlencoded({extended : true}));

var notAuthorized = {
    flashType: 'error',
    message: 'You do not have access to this page',
    redirect: 'http://localhost:3009/'
};

app.set('candidate', {
    role: 'candidate',
    notAuthorized: notAuthorized
   });
/*app.set('employer', {
    role: 'employer',
    notAuthenticated: {
      flashType: 'error',
      message: 'You do not have access to this page',
      redirect: 'login'
  }
  });
*/
app.set('employer', {
    role: 'employer',
    notAuthorized: notAuthorized
    });

    app.post('/findCandidateMatching', function(req, res){
      var fs = require("fs");

      var index = req.body._id;


        var positionID = 826782;
        var candidateID;
        var temparray =[];
        var array =[];
          fs.readFile("python_result.txt", 'utf8', function(err, data) {

              var arrLines = data.split("\n");

          var re = new RegExp('^.*' + index + '.*$', 'm');

          var found = re.exec(data);

          if (found){

             candidateID = found[0].substr(found[0].indexOf(",") - 6);
              console.log("candidateID");
              console.log(candidateID);
              positionID = candidateID.slice(0, -2);

            }
  console.log("positionID");
  console.log(positionID);
  var newPosition = positionID;
    console.log(newPosition);
  User.aggregate(
        {$unwind : "$position"},
        {$match:{"position.index_number": +newPosition }}).exec(function (err, results) {
          res.send({results:results});
          });
      });

    });
    app.post('/findPositionMatching', function(req, res){
      var fs = require("fs");


    /* findInFiles.find("826782", '.', 'python_result.txt$')
          .then(function(results) {
              for (var result in results) {
                  var res = results[result];
                  console.log(
                      'found "' + res.matches[0] + '" ' + res.count
                      + ' times in "' + result + '"'
                  );
              }
          });
*/
/*var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var async = require("async");
var fs = require("fs");
var urls = ["python_result.txt"];
xhrDoc= new XMLHttpRequest();
xhrDoc.open('GET', urls[0] , async)
if (xhrDoc.overrideMimeType)
xhrDoc.overrideMimeType('text/plain; charset=x-user-defined')
xhrDoc.onreadystatechange =function()
{
if (this.readyState == 4)
{
if (this.status == 200)
{
var data= this.response; //Here is a string of the text data
console.log("data= "+data);
}


}
}
xhrDoc.send() //sending the request

*/

var nodeArray=[];


//  fs.readFile("python_result.txt", 'utf8', function(err, data) {
  //  console.log(data);
/*  var strRawContents = data.replace(/\r/g, '');
  var arrLines = data.split("\n");
  //var final = JSON.parse(arrLines);
  arrLines.forEach(function (line) {
    nodeArray.push(line);

  });
    console.log("here " +nodeArray);$in

});
*/

var index = req.body._id;
console.log(index);


  var candidateID;
  var temparray =[];
  var array =[];
    fs.readFile("python_result.txt", 'utf8', function(err, data) {
        console.log(data);
        var arrLines = data.split("\n");
  /*      nodeArray.push(arrLines);
        //array.push(nodeArray);
        console.log(arrLines);
        var index_number = arrLines.map(function(element) { return element.index_number })
        User.update({"position.$.index_number" : { "$in" : ids }}{
        "push":{
          // I'm stuck here
        }
      }
        // .exec(function (err, results) {
          console.log(index_number);
*/
    var re = new RegExp('^.*' + index + '.*$', 'm');
    var found = re.exec(data);
    //console.log("found");
    //console.log(found);

    if (found){
      //var matches = found.match(/\S+(?=,)/g);
    //  var aWord = found.split(',')[0].split(' ').pop();
    //var streetaddress= addy.split(',', 1)[0];
       candidateID = found[0].substr(found[0].indexOf(",") + 1);
        console.log("candidateID");
        console.log(candidateID);
      }
      User.findOne({
              'index_number': candidateID
          })

            .exec(
              function(err, results) {
                  console.log(results);
                res.send({results:results});
              })

});

});


    //});

    app.post('/getPositions', function(req, res){
      //user_id = req.user._id
    //  var mongoose = require('mongoose');
        //   console.log(req.user._id);
           //var candidate = mongoose.Types.ObjectId(req.user._id); // applied _id
           //var position = mongoose.Types.ObjectId("58d153e97e3317291fd99001"); // applied candidate_id
           /*User.findOne({
                   '_id': req.user._id
               })
                 .populate('position', 'username name surname')
                 .exec(
                   function(err, company) {
                     if (err) res.status(500).send(err);

                     res.json(company.users);
                   });*/
           User.aggregate(
                 {$unwind : "$position"},
                // '_id': { $in: [
                 {$match:{role: "employer"}}).exec(function (err, results) {
                //   console.log(results);                // if (result){
                   res.send({results:results});
                  //    }
                   });

            //  });
              });


        app.post('/deleteall', function(req, res){
          User.findOne({_id: req.user._id}, 'positionsApplied', function(err, user){
        if (err) return handleError(err);
        user.positionsApplied = user.positionsApplied.map(e => e.position_id);
        PositionApplied.remove({position_id: {$in: user.positionsApplied}}, function(){

        });
      }
  );
      });


        app.post('/checkPreferences', function(req, res){
        //  var array = (req.body.arrayOfPositionIndexes);
        var array =[901,931];

        User.aggregate( { $unwind : "$position" },
        { $match: { "position.pos_index_number": {
          $in: array }
        }}
            , function(err, results){
                  res.send({results:results});
                      console.log(results);

              })


      });
    /*  User.aggregate( { $unwind : "$position" },
      { $match: { "position._id": {
        $in: ids }
      }
      }
      , function(err, results){
*/



  app.post('/loadPosition', function (req, res) {
    var position_id = req.body.position_id;

    User.aggregate(
          {$unwind : "$position"},
          {$match:{'position._id': position_id}}).exec(function (err, results) {

        res.send({ results: results });
        console.log(results);
    });
  });
  app.post('/update_position', function (req, res) {
  //_id = '58ca9fd6588205e9c8f09431';
  /*title = req.body.title;
  location = req.body.location;
  term = req.body.term;
  start = req.body.start;
  desciption = req.body.desciption;
  console.log(title);
  console.log(term);
  console.log(start);*/
  //location = req.body.location;
  //exp = req.body.exp;

/*  User.findOne({'_id':"58ca9fd6588205e9c8f09431"}).exec(function (err, result) {
      console.log(result);
    res.send({ results: result });*/
 /*User.update({'_id': req.user._id,"position._id":"58d3fa69c1f7283868be16f3" },
                 {$set: {
                  'position.$.title': 'hello',
                  'position.$.description': 'two updated'

                  /*  'position.location':location,
                    'position.start':start,
                    'position.term':term,
                    'position.description':description
                  }}),  function (err,result) {
                    var resu = result.slice(-1).pop();
                    console.log(resu);
                        res.send({result:result.position[result.slice(-1).pop()]._id})

                      }
                    });*/

console.log(req.body);
var _id = req.body._id;
var title = req.body.title;
var location = req.body.location;
var term = req.body.term;
var start = req.body.start;
var description = req.body.description;
var teamwork_value = req.body.teamwork_value;
var communication_value = req.body.communication_value;
var initiative_value = req.body.initiative_value;
var technical_skills_value = req.body.technical_skills_value;


User.update(
        { _id: req.user._id , "position._id":_id },
        { $set:{
          'position.$.title': title,
          'position.$.location': location,
          'position.$.term': term,
          'position.$.start': start,
          'position.$.description': description,
          'position.$.teamwork_value': teamwork_value,
          'position.$.communication_value': communication_value,
          'position.$.initiative_value': initiative_value,
          'position.$.technical_skills_value': technical_skills_value } },
        { upsert: true },
        function(err,result){
          res.send({result:result})
        });
      });


  app.post('/insertPositionIndex', function(req, res){
    var array = JSON.parse(req.body.array);
    console.log(array);

  /*      User.update(
          { "_id": req.user._id},
            {
            "$push":
                {
                 "positionsApplied":{
                    $each: array[0]
                 }
                }
              }).exec(function (err, result) {
               console.log(result);
               res.json({ results: result });
          });*/
          var preferences = new Preferences({
              role:"candidate",
              //identity_id: req.user._id,
              index_number: req.user.index_number,
            //  pos_index_number: temparray[0].pos_index_number
              preference:array[0]

        //      conditions: req.body.conditions,
          //    colors: req.body.colors
    });
      preferences.save( function(error, results){
      console.log(results);
      });

    });
    app.post('/save_preference', function(req, res){
      var array = JSON.parse(req.body.array);
      var temparray =[];
      var testarray =[];
      //var temparray1 =[];
      temparray.push(array);
      console.log(temparray);
      //var identity_id = array[0].position_id;
      var index_number = array[0].index_number;
      var pos_index_number = array[0].pos_index_number;
      console.log(index_number);
      console.log(pos_index_number);
      var preferences = new Preferences({
          role:"employer",
          index_number: pos_index_number,
          //index_number: index_number,
          preference: temparray[0]

});
testarray.push(index_number);
testarray.push(temparray[0]);

var PythonShell = require('python-shell');
var pyshell = new PythonShell('python-test.py');

/*var dataset = JSON.stringify(testarray);


var options = {
  mode: 'text',
  pythonOptions: ['-u'],
  args: [dataset]
};

PythonShell.run('python-test.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
*/

  preferences.save( function(error, results){
  console.log(results);
  console.log(testarray);
  res.json(testarray);
});
            });
            app.post('/rankcandidates', function(req, res){
              var array = JSON.parse(req.body.array);
              var teamwork_value = req.body.teamwork_value;
            //  console.log(teamwork_value);
              var communication_value = req.body.communication_value;
              var initiative_value = req.body.initiative_value;
              var technical_skills_value = req.body.technical_skills_value;
               var ids = array[0].map(function(element) { return element._id })
               User.find({"_id" : { "$in" : ids }})
                .exec(function (err, results) {
                  console.log(results);
                     res.json({results:results,teamwork_value:teamwork_value,communication_value:communication_value,initiative_value:initiative_value,technical_skills_value:technical_skills_value});
                 });
                    });


              app.post('/getMultipleUsersAndRank', function(req, res) {
                var array = JSON.parse(req.body.array);
                console.log(array);
                var index_number = array[0][0].index_number;
                var pos_index_number = array[0][0].pos_index_number;
                var teamwork_value = array[0][0].teamwork_value;
                var communication_value =  array[0][0].communication_value;
                var initiative_value =  array[0][0].initiative_value;
                var technical_skills_value =  array[0][0].technical_skills_value;
                var position_id =  array[0][0].position_id;
              //  console.log(position_id);
                var ids = array[0].map(function(element) { return element._id })
                User.find({"_id" : { "$in" : ids }})
                 .exec(function (err, results) {
                      res.json({results:results,index_number:index_number,teamwork_value:teamwork_value,communication_value:communication_value,initiative_value:initiative_value,technical_skills_value:technical_skills_value,position_id:position_id,pos_index_number:pos_index_number});
                  });
              });

    /*app.post('/save_preference', function(req, res){
      var array = JSON.parse(req.body.array);
      var temparray =[];
      //var temparray1 =[];
      temparray.push(array);
      console.log(temparray);
      position_id = array[0].position_id;

          preference.save({"position_id":"58ca9fd6588205e9c8f01431","position._id":"58d6b7e11e793c9a506ffe7f"},
          {
          "$push":
              {
               "position.$.preference":{
                "candidate_id":"ddsd",
                "weightedScore":41,
                "position_id":"Ddsd",
                "candidate_index_number":4,

             }
           }
          }).exec(function (err, result) {
        console.log(result);
        res.json({results:result});
      });
    });*/
        /*  User.update(
            { "_id": req.user._id},
              {
              "$push":
                  {
                   "positionsApplied":{

                    $each: array[0]
                  // }
                   }
                  }

          }
          ).exec(function (err, result) {
                 console.log(result);
                 res.json({ results: result });
            });*/
        //  }
//      });

  /*  app.post('/rankcandidates', function(req, res){
    var array = JSON.parse(req.body.array);
    var ids = array[0].map(function(element) { return element._id })
    User.find({"_id" : { "$in" : ids }})
     .exec(function (err, results) {
          res.json(results);
      });
});*/



  app.post('/updateCandidateProfile', function(req, res){
//    user_id = req.user._id;
console.log(req.body);
    User.update(
            { _id: req.user._id},
            { "$set":{
              'name': req.body.name,
              'location': req.body.location,
              'email': req.body.email,
              'biodescription': req.body.biodescription,
              'twitter': req.body.twitter,
              'facebook': req.body.facebook,
              'instagram': req.body.instagram,
              'linkedin': req.body.linkedin,
              'google': req.body.google,
              'technical_skills':req.body.technical_skills,
              'profile_image_link': req.body.profile_image_link,
              'video_url': req.body.video_url,
              'imageOne': req.body.imageOne,
              'imageTwo': req.body.imageTwo,
              'imageThree': req.body.imageThree,
              'imageFour': req.body.imageFour,
              'imageFive': req.body.imageFive,
              'imageSix': req.body.imageSix} },
            { upsert: true },
            function(err,result){
              res.send({result:result})
            });
    });

    app.post('/updateEmployerProfile', function(req, res){
  //    user_id = req.user._id;
  console.log(req.body);
      User.update(
              { _id: req.user._id},
              { "$set":{
                'name': req.body.name,
                'location': req.body.location,
                'employees': req.body.employees,
                'email': req.body.email,
                'biodescription': req.body.biodescription,
                'twitter': req.body.twitter,
                'facebook': req.body.facebook,
                'instagram': req.body.instagram,
                'linkedin': req.body.linkedin,
                'google': req.body.google,
                'profile_image_link': req.body.profile_image_link,
                'video_url': req.body.video_url,
                'imageOne': req.body.imageOne,
                'imageTwo': req.body.imageTwo,
                'imageThree': req.body.imageThree,
                'imageFour': req.body.imageFour,
                'imageFive': req.body.imageFive,
                'imageSix': req.body.imageSix
                } },
              { upsert: true },
              function(err,result){
                res.send({result:result})
              });
      });




app.post('/search', function (req, res) {
  /*position = req.body.position;
  location = req.body.location;
  console.log(position);*/
  var position = new RegExp(req.body.position, 'i');
  var location = new RegExp(req.body.location, 'i');

  User.aggregate(
        {$unwind : "$position"},
        {$match:{'position.title': position,'position.location':location}}).exec(function (err, result) {

      res.send({ results: result });
  });

//});
});



app.post('/updateEducation', function (req, res) {
  var _id = req.body._id;


  User.update(
          { _id: req.user._id , "education._id":_id },
          { "$set":{
            'education.$.degree': req.body.newDegree,
            'education.$.school': req.body.newSchool,
            'education.$.location': req.body.newLocation,
            'education.$.start': req.body.newStart,
            'education.$.end': req.body.newEnd,
            'education.$.description': req.body.newDescription} },
          { upsert: true },
          function(err,result){
            res.send({result:result})
          });
        });

app.post('/updateExperience', function (req, res) {
var _id = req.body._id;

console.log(req.body.newLocation);
console.log(req.body.newCompany);
console.log(req.body.newStart);
console.log(req.body.NewEnd);
console.log(req.body.newDescription);
User.update(
        { _id: req.user._id , "experience._id":_id},
        { "$set":{
          'experience.$.title': req.body.newTitle,
          'experience.$.location': req.body.newLocation,
          'experience.$.company': req.body.newCompany,
          'experience.$.start': req.body.newStart,
          'experience.$.end': req.body.newEnd,
          'experience.$.description': req.body.newDescription } },
        { upsert: true },
        function(err,result){
          res.send({result:result})
        });
      });


//});
//});

app.post('/delete_experience', function (req, res) {
  _id = req.body._id;
  userID = req.user._id;
  console.log(userID);


  User.update({'_id': userID },
                  {$pull: { experience : { _id : _id }}},
                  function (err,result) {
                    console.log(result);
                      res.send({result:result,theID:_id})
                  });
});
app.post('/delete_education', function (req, res) {
  _id = req.body._id;
  userID = req.user._id;
  console.log(userID);


  User.update({'_id': userID },
                  {$pull: { education : { _id :  _id }}},
                  function (err,result) {
                    console.log(result);
                      res.send({result:result,theID:_id})
                  });
});
app.post('/delete_position', function (req, res) {
  _id = req.body._id;
  userID = req.user._id;

  User.update({'_id': userID },
                  {$pull: { position : { _id :  _id }}},
                  function (err,result) {
                    console.log(result);
                    console.log("_id");
                    console.log(_id);
                      res.send({result:result,theID:_id})
                  });
});


app.post('/addPosition', function(req, res) {


  var user = req.user._id;
  console.log(user);
  var _id = mongoose.Types.ObjectId();

  var index_number = Math.floor(100000 + Math.random() * 900000);
  //var pos_index_number = 271894;

  /*User.count({index_number: index_number}, function (err, count){
      if(count>0){
            console.log("no");
      }
      else{
          console.log("okay");
      }
  });*/
  /*User.find(
      { username: req.params.username, 'position.index_number': index_number },
      function (err, count) {
        if (!err) exist = true;
      }
    );*/

//  User.find({"index_number": {$exists: true, $ne: null}}).count();
  User.findByIdAndUpdate(user,
    {$push:
    {"position":{
        _id:_id,
        title:req.body.title,
        location:req.body.location,
        start:req.body.positionStart,
        term:req.body.term,
        teamwork_value:req.body.teamwork_value,
        communication_value:req.body.communication_value,
        initiative_value:req.body.initiative_value,
        technical_skills_value:req.body.technical_skills_value,
        description:req.body.description,
        index_number: index_number,
        date: new Date()}}
  }).exec(function (err, result) {
  console.log(_id);
  res.send({result:result,_id:_id,index_number:index_number});
});
});

app.post('/addEducation', function(req, res) {

  console.log(req.body);
  user = req.user._id;
  var _id = mongoose.Types.ObjectId();

  User.findByIdAndUpdate(user,
    {$push:
    {"education":{
        _id:_id,
        school:req.body.school,
        degree:req.body.degree,
        location:req.body.location,
        start:req.body.start,
        end:req.body.end,
        term:req.body.term,
        description:req.body.description,
        date: new Date()}}
  }).exec(function (err, result) {

  res.send({results:result,new_id:_id});
    console.log(_id);
});
});


app.post('/addExperience', function(req, res) {


  user = req.user._id;
  var _id = mongoose.Types.ObjectId();

  User.findByIdAndUpdate(user,
    {$push:
    {"experience":{
        _id:_id,
        title:req.body.title,
        company:req.body.company,
        location:req.body.location,
        start:req.body.start,
        end:req.body.end,
        description:req.body.description
      }}
  }).exec(function (err, result) {

  res.send({results:result,new_id:_id});
    console.log(_id);
});
});

app.post('/getAllPreferences', function(req, res) {

  Preferences.find({"role":"employer"}).exec(function (err, results) {
    var PythonShell = require('python-shell');
    var pyshell = new PythonShell('python-test.py');
  /*  var applicants = [
      {"position":0, "ranking":[3,5,4,2,1,0]},{"position":1, "ranking":[2,3,1,0,4,5]}
    ];*/
    var dataset = JSON.stringify(results);


    var options = {
      mode: 'text',
      pythonOptions: ['-u'],
      args: [dataset]
    };

    PythonShell.run('python-test.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });
  res.send({results:results});
  //   }
  });
  });


app.post('/getUser', function(req, res) {

  User.findById({_id:req.body._id}).exec(function (err, result) {
    if (result){
  res.send({result:result});
     }
  });
  });

  app.post('/testAlgorithm', function(req, res) {
    var PythonShell = require('python-shell');
    var pyshell = new PythonShell('matching.py');



    PythonShell.run('matching.py', function (err, results) {



      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });

/** THIS ON WORKS FOR 1 ARG
// sends a message to the Python script via stdin
pyshell.send('test','test2',dataset);

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});
*/


    /**

    //var dataset = JSON.stringify([(0, [3,5,4,2,1,0]), (1, [2,3,1,0,4,5])]);
    console.log("Dataset: " + dataset);
       var spawn = require('child_process').spawn,
         py    = spawn('python', ['python-test.py']),
         data = dataset,
         dataString = '';

     py.stdout.on('data', function(data){
       dataString += data.toString();
     });
     py.stdout.on('end', function(){
       console.log('Sum of numbers=',data);
       pyshell.send(dataString);
     });
     py.stdin.write(JSON.stringify(data));
     py.stdin.end();
     */
});

app.post('/rankPositions', function(req, res) {
  /*var PythonShell = require('python-shell');
  //var pyshell = new PythonShell('python-test.py');

  var pyshell = new PythonShell('python-test.py', { mode: 'json '});
  pyshell.send({ command: "do_stuff", args: [1, 2, 3] });
  pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(message);
  });*/
  var array = req.body;
  //console.log(array);

/*  var spawn = require('child_process').spawn,
  py    = spawn('python', ['python-test.py']),
  data = array

  py.stdout.on('data', function(data){
  data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',data);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();
*/
//58c2871414cd3d209abf5fc0", "58c2871414cd3d209abf4fc0", "58c2871414cd3d209abf4fc1
//var ids =['58c2871414cd3d209abf4fc0','58c2871414cd3d209abf5fc0'];
var ids =[mongoose.Types.ObjectId('58c2871414cd3d209abf4fc0'), mongoose.Types.ObjectId('58c2871414cd3d209abf4fc1'), mongoose.Types.ObjectId('58c2871414cd3d209abf5fc0')];
var ids1 =[];
User.aggregate( { $unwind : "$position" },
{ $match: { "position._id": {
  $in: ids }
}
}
, function(err, results){
//  console.log(results);
  results.sort((a, b) => {
console.log(a.position._id + " " + b.position._id);
    return ids.indexOf(mongoose.Types.ObjectId(a.position._id)) - ids.indexOf(mongoose.Types.ObjectId(b.position._id));

})

//

     res.send({results:results});
});

});
  /*var spawn = require('child_process').spawn,
  py    = spawn('python', ['python-test.py']),
  data = [1,2,3,4,5,6,7,8,9],
  dataString = '';

  py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();
});*/


/**********/
/*PythonShell.run('python-test.py', function (err) {
  if (err) throw err;
  console.log('finished');
});
var myPythonScriptPath = 'python-test.py';

// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell('python-test.py');

//pyshell.send(JSON.stringify([1,2,3,4,5]));

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err){
        throw err;
    };

    console.log('finished');
});

*/


/*var sys   = require('sys'),
    spawn = require('child_process').spawn,
    dummy  = spawn('python', ['test.py']);

dummy.stdout.on('data', function(data) {
    sys.print(data.toString());
});*/



app.get('/candidate_profile',require('permission')(['candidate']), function(req, res){
  //res.render('candidate_profile');
//  var spawn = require('child_process').spawn,
  //    ls    = spawn('python',['python-test.py']);

    User.find({'_id':  req.user._id}).exec(function(err, docs){

      /*  ls.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
            var data1 = data;
*/
        res.render('candidate', { title: 'Profile', user: docs, layout:'candidate',user_id:req.user._id});
      });
});

app.get('/employer_profile/',require('permission')(['employer']), function(req, res){
  var locationPromise = Locations.find({});
  var positionPromise = Positions.find({});
  var userPromise = User.find({'_id': mongoose.Types.ObjectId(req.user._id)});
//  User.find({'_id':  req.user._id}).exec(function(err, docs){
  Promise.all([locationPromise, userPromise, positionPromise]).then(
      docs => {
          let locationsDocs = docs[0];
          let userDocs = docs[1];
          let positionDocs = docs[2];

    res.render('employer', {
            title: 'Employer',
            user_info: docs[1],
            locations:docs[0],
            positions:docs[2],
            user: req.user,
            layout:'employer'
          });
        }
      );
    });

app.get('/post_position', function(req, res){
        res.render('post_position', { title: 'post'});
});
app.post('/getAllInSubdocument', function(req, res){
  User.find(req.user._id,
        {$unwind : "$positionsApplied"}).remove().exec(function (err, result) {
          console.log(result);
          res.send({results:result});

        });

});

app.post('/applied', function(req, res){
       console.log(req.user._id);
       var candidate = mongoose.Types.ObjectId(req.user._id); // applied _id

            User.aggregate(
                  {$unwind : "$position"},
                  {$unwind : "$position.applied"},
                  {$match:{'position.applied.candidate_id': candidate}}).exec(function (err, result) {
                    console.log(result);
                    res.send({results:result}); // send results back to Ajax callS

                  });
          });
app.post('/getPositionById', function(req, res){
//user_id = req.user._id
//  var mongoose = require('mongoose');
//  console.log(req.user._id);
  //   var position = mongoose.Types.ObjectId(req.user._id); // applied _id
     //var position = mongoose.Types.ObjectId("58d153e97e3317291fd99001"); // applied candidate_id
console.log(mongoose.Types.ObjectId(req.body._id));
    User.aggregate(
          {$unwind : "$position"},
        //  {$unwind : "$position.applied"},
          {$match:{'position._id': mongoose.Types.ObjectId(req.body._id)}}).exec(function (err, results) {
            console.log(results);
            res.send({results:results});

          });
  });
  app.post('/apply',function (req,res){

    console.log(req.user);
    User.update({_id:mongoose.Types.ObjectId(req.body.company_id),"position._id":mongoose.Types.ObjectId(req.body.position_id)},
     {$push:
       {"position.$.applied":
        {
          candidate_id:req.user._id,
          name:req.user.name,
          index_number:req.user.index_number,
          profile_image:req.user.profile_image_link,
          location:req.user.location,
          email:req.user.email,
          teamwork:req.user.survey[0].teamwork,
          initiative:req.user.survey[0].initiative,
          communication:req.user.survey[0].communication,
          technical_skills:req.user.technical_skills

       }
     }
    }).exec(function (err, result) {
  console.log(result);
  res.send({result:result});
});
});
  app.post('/addImages',function (req,res){
    console.log(req.body);
    User.update(
            { _id: req.user._id},
            { "$set":{
              "images":{
              'one': req.body.imageOne,
             'two': req.body.imageTwo,
              'three': req.body.imageThree,
              'four': req.body.imageFour,
              'five': req.body.imageFive,
              'six': req.body.imageSix
            },
            },
            },

            { upsert: true },
            function(err,result){
              res.send({result:result})
            });
    });


    /*  {$push:
      {"position._id": position_id},
      {"applied":{candidate_id: mongoose.Types.ObjectId("58d153e97e3317291fd99001")}}),
      },
*/


  /*User.update(
          { _id: req.user._id , "position._id":position_id },
          { "$set":{
            'applied.$.candidate_id': _id
          }

        },

          { upsert: true },
          function(err,result){
            res.send({result:result})
          });
        });*/

  //  });





  app.post('/applied_candidates', function(req, res){
    //user_id = req.user._id
  //  var mongoose = require('mongoose');
         var _id =mongoose.Types.ObjectId(req.body._id);
         //var company = mongoose.Types.ObjectId(req.user._id); // applied _id
         console.log(_id);
         //var position = mongoose.Types.ObjectId("58d153e97e3317291fd99001"); // applied candidate_id

              User.aggregate(
                    {$unwind : "$position"},
                    {$unwind : "$position.applied"},
                    {$match:{'position._id': mongoose.Types.ObjectId(req.body._id)}
                  }).exec(function (err, results) {
                    //  console.log(results);
                      res.send({results:results});

                    });

                  /*  User.findById({_id:req.body._id}).exec(function (err, result) {
                      if (result){
                    res.send({result:result});
                       }
                    });*/
            });




/*app.get('/applied', require('permission')(['candidate']),function(req, res){
  User.aggregate(
      //  {$unwind : "$applied"},
        {$unwind :{ path: "$position.applied"}},
        {$match:{'applied.candidate_id': req.user._id,}}).exec(function (err, result) {
          console.log(result);
        });
        res.render('applied', {
          results: result,
          title: 'Applied Positions',
          layout:'candidate'});
//});
});*/


app.get('/home',require('permission')(['candidate']), function(req, res){
  var locationPromise = Locations.find({});
  var positionPromise = Positions.find({});

  Promise.all([locationPromise, positionPromise]).then(
      docs => {
          let locationsDocs = docs[0];
          let positionsDocs = docs[1];

  res.render('home', {
          title: 'Search',
          locations: locationsDocs,
          positions: positionsDocs,
          layout:'candidate'
        });
  }
);
});

app.get('/candidate_survey', function(req, res){
        res.render('candidate_survey',{layout:'login'});
});
app.post('/submit_survey', function(req, res,next){
  user =req.user._id;
  //console.log(user);

  var collectValues=[];
  var surveyValues =[];

var Q1a=req.body.radio_group1;
var Q2a=req.body.radio_group2;
var Q3a=req.body.radio_group3;
var Q4a=req.body.radio_group4;
var Q5a=req.body.radio_group5;
var Q6a=req.body.radio_group6;
var Q7a=req.body.radio_group7;
var Q8a=req.body.radio_group8;
var Q9a=req.body.radio_group9;
var Q10a=req.body.radio_group10;
var Q11a=req.body.radio_group11;
var Q12a=req.body.radio_group12;
var Q13a=req.body.radio_group13;
var Q14a=req.body.radio_group14;
var Q15a=req.body.radio_group15;

//collect all responses
collectValues.push(Q1a,Q2a,Q3a,Q4a,Q5a,Q6a,Q7a,Q8a,Q9a,Q10a,Q11a,Q12a,Q13a,Q14a,Q15a);
//console.log(collectValues);

// Assign value for each response
for(var i=0;i<collectValues.length;i++){
if(collectValues[i] =="not_at_all"){
  surveyValues.push(0);
}
else if(collectValues[i] =="rarely"){
  surveyValues.push(1);
}
else if(collectValues[i] =="sometimes"){
  surveyValues.push(2);
}
else if(collectValues[i] =="often"){
  surveyValues.push(3);
}
else if(collectValues[i] =="very_often"){
  surveyValues.push(4);
}
}
//console.log(surveyValues);



// map each response to an array prototype
Array.prototype.first = function () {
    return this[0];
};
Array.prototype.second = function () {
    return this[1];
  };
Array.prototype.third = function () {
    return this[2];
  };
Array.prototype.fourth = function () {
    return this[3];
  };
Array.prototype.fifth = function () {
    return this[4];
};
Array.prototype.sixth = function () {
    return this[5];
  };
Array.prototype.seventh = function () {
    return this[6];
  };
Array.prototype.eigth = function () {
    return this[7];
  };
Array.prototype.ninth = function () {
    return this[8];
};
Array.prototype.tenth = function () {
    return this[9];
  };
Array.prototype.eleventh = function () {
    return this[10];
  };
Array.prototype.twelfth = function () {
    return this[11];
  };
Array.prototype.thirteenth  = function () {
    return this[12];
};
Array.prototype.fourteenth = function () {
    return this[13];
  };
Array.prototype.fifteenth = function () {
    return this[14];
  };

var communication = [];
communication.push(
  surveyValues.second(),
  surveyValues.fourth(),
  surveyValues.seventh(),
  surveyValues.eigth(),
  surveyValues.ninth(),
  surveyValues.tenth(),
  surveyValues.eleventh(),
  surveyValues.twelfth(),
  surveyValues.fourteenth());
console.log("Communication values = " +communication);
var totalCommunication = 0;


for (var i = 0; i < communication.length; i++)
{
    totalCommunication += communication[i];
}
var finalCommunicationValue = Math.round(totalCommunication/36 *100);
console.log("Final communication result = "+finalCommunicationValue);



var teamwork = [];
teamwork.push(
surveyValues.second(),
surveyValues.fifth(),
surveyValues.sixth(),
surveyValues.seventh(),
surveyValues.ninth(),
surveyValues.eleventh(),
surveyValues.twelfth(),
surveyValues.fourteenth(),
surveyValues.fifteenth());
console.log("Teamwork values = " +teamwork);
var totalTeamwork = 0;


for (var i = 0; i < teamwork.length; i++)
{
    totalTeamwork += teamwork[i];
}
var finalTeamworkValue = Math.round(totalTeamwork/36 *100);
console.log("Final teamwork result = "+finalTeamworkValue);

var initiative = [];
initiative.push(
surveyValues.first(),
surveyValues.third(),
surveyValues.fourth(),
surveyValues.seventh(),
surveyValues.tenth(),
surveyValues.eleventh(),
surveyValues.thirteenth(),
surveyValues.fourteenth(),
surveyValues.fifteenth());
console.log("Teamwork values =" +initiative);
var totalInitiative = 0;


for (var i = 0; i < initiative.length; i++)
{
    totalInitiative += initiative[i];
}
var finalInitiativeValue = Math.round(totalInitiative/36 *100);
console.log("Final initiative result = "+finalInitiativeValue);





User.findByIdAndUpdate(user,{$push:{"survey":{
  teamwork:finalTeamworkValue,
  communication:finalCommunicationValue,
  initiative:finalInitiativeValue

}}}).exec(function (err, result) {
    res.redirect('home');
  });
});
