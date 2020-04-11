var http = require('http');
const port = 8000;
var user;
var password;
const dbHostURL = "mongodb://localhost:27017/";
const puppeteer = require('puppeteer');
const host = "localhost"
var options = {
    hostname : host ,
    port : port ,
}

    var server = http.createServer (options, function(request,response){

    response.writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
        {
            response.end("request not valid!")
        }
    else if(request.method == "POST")
        {
            var body = "";
        request.on("data", function (chunk) {
            body += chunk;
            body = JSON.parse(body);
            user = body['username'];
            password = body['password'];
            if(user != undefined && password != undefined){
                //need to callback to wait for grab
                //also need to check process leads to any other page than it should ie login fails page
                grab(function(a /* a is passed using callback */) {
                  if(a){
                    response.end("success");
                  } else {
                    response.end("request not valid!");
                  }
                });
            } else {
              response.end("request not valid!");
            }
        });
        } else {
            response.end("request not valid!");
        }
});

server.listen(port);
console.log("Server running on port " + port);


//////////

var grab = (async function main(callback) {
  var crypto = require('crypto');
  var recess = new Date('September 30, 2019');
  var semester = new Date();
  var sem;
  if(recess[0]<semester){
    sem = 1;
  } else {
    sem = 2;
  }
  const browser = await puppeteer.launch({headless: true})
  try{


  const page = await browser.newPage()
  await page.goto('https://sso.wis.ntu.edu.sg/webexe88/owa/sso_redirect.asp?t=1&app=https://wish.wis.ntu.edu.sg/pls/webexe/aus_stars_check.check_subject_web2')

  //await page.waitForSelector('input[type="text"]')
  console.log('Username page loaded');
  await page.type('input[type="text"]', user);
  await Promise.all([
            page.click('input[type="submit"]'),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
  console.log('password page loaded');

  await page.type('input[type="password"]', password);
  await Promise.all([
            page.click('input[type="submit"]'),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

if(sem == 2){
  await Promise.all([
            page.click('input[value="2019-2020 Semester 2"]'),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
} else {
  await Promise.all([
            page.click('input[value="2019-2020 Semester 1"]'),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);
}
  const alltds = await page.$$('td');
  var array = [["courseCode", "Title", "status", "classType", "day", "time", "venue", "remark"]];
  var setUp = [];
  var count = 0;
  var startcount = 15;
    for (const td of alltds){

      if(startcount == 0){
      if(await(await td.getProperty('textContent')).jsonValue() != ""){
        if(count != 2 && count != 3 && count != 4 && count != 5 && count != 6 && count != 8 && count != 10){
          //console.log(await(await td.getProperty('textContent')).jsonValue() + count)
          setUp.push(await(await td.getProperty('textContent')).jsonValue());
      }
    }
    }else {
        startcount=startcount-1;
      }

      count++;
      if(count>14){
        array.push(setUp);
        setUp = [];
        count = 0;
      }
    }
    //array.forEach((item) => {
      //console.log(item[0]+' '+item[1]+' '+item[2]+' '+item[3]+' '+item[4]+' '+item[5]+' '+item[6]+' '+item[7]);
    //});
 browser.close();
  var breakStart = new Date('November 18, 2019');
  var breakEnd = new Date('December 12, 2019');

    var mappings1 = [new Date('August 12, 2019'),
    new Date('August 19, 2019'),
    new Date('August 26, 2019'),
    new Date('September 2, 2019'),
    new Date('September 9, 2019'),
    new Date('September 16, 2019'),
    new Date('September 23, 2019'),
    new Date('October 7, 2019'),
    new Date('October 14, 2019'),
    new Date('October 21, 2019'),
    new Date('October 28, 2019'),
    new Date('November 4, 2019'),
    new Date('November 11, 2019')];

    var mappings2 = [new Date('January 13, 2020'),
  new Date('January 20, 2020'),
  new Date('January 27, 2020'),
  new Date('February 3, 2020'),
  new Date('February 10, 2020'),
  new Date('February 17, 2020'),
  new Date('February 24, 2020'),
  new Date('March 9, 2020'),
  new Date('March 16, 2020'),
  new Date('March 23, 2020'),
  new Date('March 30, 2020'),
  new Date('April 6, 2020'),
  new Date('April 13, 2020')];
  var map;
  if(sem == 2){
    map = mappings2;
  }else if (sem == 1) {
    map = mappings1;
  }
    var days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    var output = [];
    var current = ['', '', ''];
    await array.forEach((item) => {
      if(item.length == 8){
        current[0] = item[0];
        current[1] = item[1];
        current[2] = item[2];
      } else {
        //7 elements missing
        item.unshift(current[2]);
        item.unshift(current[1]);
        item.unshift(current[0]);
      }
      if (item[2].split(/\s/).join('') == 'REGISTERED'){

        var inn;
        var fdate;
        var startTime;
        var endTime;
        var index;
        var nogoTime = new Date(2005, 5, 5, 24,0, 0,0);
        startTime = item[5].substring(0, 5);
        endTime = item[5].substring(6, 10);
        index = days.indexOf(item[4].split(/\s/).join(''));
        if(item[7].includes('-')){

          var i = parseInt(item[7].substring(12, 13));
          var x = parseInt(item[7].substring(14, item[7].length));
          for (i; i<=x;i++){
            tdate = new Date(map[i-1]);
            tdate = new Date(tdate.setDate(tdate.getDate()+index));
              tdate.setHours(tdate.getHours() + 1);
            output.push([item[0].split(/\s/)[1], item[1].split(/\s/).join(' '), item[3].split(/\s/).join(''), item[6].split(/\s/).join(''), startTime.split(/\s/).join(''), endTime.split(/\s/).join(''), tdate.toDateString()]);

          }

        } else if (item[7].includes(',')) {//week regex format 2
          var weeks = item[7].substring(12, item[7].length).split(',');
          weeks.forEach((ite) => {
            inn = parseInt(ite)-1;
            fdate = new Date(map[inn]);
            fdate = new Date(fdate.setDate(fdate.getDate()+index));//+new Date(fdate.setDate( fdate.getDate() + index));//setDate(fdate.getDate()+days.indexOf(item[4]));
              fdate.setHours(fdate.getHours() + 1);
            output.push([item[0].split(/\s/)[1], item[1].split(/\s/).join(' '), item[3].split(/\s/).join(''), item[6].split(/\s/).join(''), startTime.split(/\s/).join(''), endTime.split(/\s/).join(''), fdate.toDateString()]);
          });
        }else {
          console.log('errr how')
          throw console.error();
        }
      }
    });

    //output.forEach((item) => {
      //console.log(item[0], item[1], item[2], item[3], item[4], item[5], item[6]);

    //});
    //await console.log(output.length);
    var md5sum = crypto.createHash('md5');
    var MongoClient = require('mongodb').MongoClient;
    var userID;
    var courseID;
    var myquery =  {username : user};
  await MongoClient.connect(dbHostURL, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TimetableDB");


  var newvalues = { $setOnInsert: { password : md5sum.update(password).digest('hex')}};
  dbo.collection("users").updateOne(myquery, newvalues, { upsert: true }, function(err, res) {
    if (err) throw err;
  });
  //need to remove all entries in connection that are for this user.
  //dbo.collection("timetable_events").deleteMany(myquery, function(err, obj) {
    //if (err) throw err;
  //});

    db.close();
  });

  await dbsort(MongoClient, myquery);
  await MongoClient.connect(dbHostURL, function(err, db) {
    var dbo = db.db("TimetableDB");
    output.forEach((item) => {
      //console.log(user, item[0], item[1], item[2], item[3], item[4], item[5], item[6]);
      myquery = {username : user, courseCode : item[0], courseName : item[1], type : item[2], location : item[3], startTime : item[4], endTime : item[5], date : item[6]};
      newvalues = {$setOnInsert: {username : user, courseCode : item[0], courseName : item[1], type : item[2], location : item[3], startTime : item[4], endTime : item[5], date : item[6]}};
      dbo.collection("timetable_events").updateOne(myquery, newvalues, { upsert: true }, function(err, res) {
        if (err) throw err;
      });
    });
    db.close();
    });
    callback(true);
  } catch(e){
    browser.close();
    callback(false);
  }
});

var dbsort = function(MongoClient, myquery){
  MongoClient.connect(dbHostURL, function(err, db) {
    var dbo = db.db("TimetableDB");
  dbo.collection("timetable_events").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
  });
    db.close();
  });
}




//async function callgrab() {
  //  var a = await grab(); // a is 5
//}
