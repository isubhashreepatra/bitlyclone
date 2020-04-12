import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';


Meteor.startup(() => {
  Meteor.publish('links', function () {
    return Links.find({});
  });
});

//Executed when someone clicks shortened url
function onRoute(req, res, next) {
  //take the token out and match the link with the collections
  const link = Links.findOne({ token: req.params.token });
  //If match ---> open long URL
  //If not --> React App
  if (link) {
    Links.update(link, { $inc: { clicks: 1 }});
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    next();
  }

}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
