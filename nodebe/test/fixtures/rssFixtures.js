// var Post = require('../../server/models/post')
// const mongoose = require('mongoose');

// const rssFixtures = [
//     {
//       title: 'Hungary rewards highly cited scientists with bonus grants',
//       description: 'Some top researchers prosper in Hungary as country ' +
//         'tries to improve its international standing in ' +
//         'science.',
//       link: 'http://feeds.nature.com/~r/news/rss/most_recent/~3/WAZzL98w8vg/551425a',
//       pubDate: 'Tue Nov 21 2017 08:00:00 GMT+0800 (Singapore Standard Time)',
//       media: 'NO_MEDIA_LINK',
//       src: 'NATURE'
//     },
//     {
//       title: 'Black academics soon to outnumber white researchers in South Africa',
//       description: 'Legacy of apartheid means academia has remained largely white.',
//       link: 'http://feeds.nature.com/~r/news/rss/most_recent/~3/V8F0SMwI-MI/nature.2017.23030',
//       pubDate: 'Tue Nov 21 2017 08:00:00 GMT+0800 (Singapore Standard Time)',
//       media: 'NO_MEDIA_LINK',
//       src: 'NATURE'

//     },
//     {
//       title: 'AI-controlled brain implants for mood disorders tested in people',
//       description: 'Researchers funded by the US military are ' +
//         'developing appliances to record neural activity and ' +
//         'automatically stimulate the brain to treat mental ' +
//         'illness.',
//       link: 'http://feeds.nature.com/~r/news/rss/most_recent/~3/dS0ttJOvTEs/nature.2017.23031',
//       pubDate: 'Wed Nov 22 2017 08:00:00 GMT+0800 (Singapore Standard Time)',
//       media: 'NO_MEDIA_LINK',
//       src: 'NATURE'
//     }
//   ] 

// function load(){
//     // Save the entire feed into mongo
//     // TODO: might have problems with unclean descriptions
//     for (var j = 0; j < rssFixtures.length; j++){
//       var feed = rssFixtures[j];
//       const post = new Post({
//         _id: mongoose.Types.ObjectId(),
//         title: feed.title,
//         description: feed.description,
//         media: feed.media,
//         link: feed.link,
//         pubDate: feed.pubDate,
//         src: feed.src,
//         author: feed.author
//       });
//       post.save()    
//       .then((newPost) => {
//         console.log("fixture loaded!");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     }
//   }
  

// module.exports = load;