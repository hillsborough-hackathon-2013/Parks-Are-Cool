define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel", "dojo/_base/array","dojo/dom-class","dojo/Deferred" , "dojo/promise/all" , "dojo/i18n","esri/arcgis/utils","esri/tasks/geometry"],
    function(declare,lang, kernel, array, domClass, Deferred, all, jsapiBundle, utils, tasks){
        var App =  declare("utilities.App",null,{
            config: {},
            constructor: function(/*Object*/defaults, /*String?*/proxy){
                //specify class defaults 
                this.config.helperServices = defaults.helperServices || {};
                lang.mixin(this.config, defaults);
                
                this.config.proxy = proxy;
            },
            init: function(){
                var deferred = new Deferred();
                //Check url parameters for an application id( appid) or webmap id 
                 var urlObject = esri.urlToObject(document.location.href);
                 urlObject.query = urlObject.query || {};
                 lang.mixin(this.config,urlObject.query);
                
                //need to set the sharing url here so that when we query the applciation and organization the correct 
                //location is searched. 
                this.setDefaults();
                var orgDef = this.queryOrganization();
                orgDef.then(dojo.hitch(this, function(){
                  all([this.getlocalization(), this.queryApplication() ]).then(dojo.hitch(this,function(results){
                       deferred.resolve(this.config);
                  }));
                }));

                return deferred.promise;
            },
            getlocalization: function(){
              //Get the localization strings for the template and store in an i18n variable. Also determine if the 
              //application is in a right-to-left language like Arabic or Hebrew. 

                var deferred = new Deferred();

                this.config.i18n = {};
                //Bi-directional language support added to support right-to-left languages like Arabic and Hebrew
                //Note: The map must stay ltr
                this.config.i18n.isRightToLeft = false;
                array.some(["ar","he"], lang.hitch(this, function(l){
                  if(kernel.locale.indexOf(l) !== -1){
                      this.config.i18n.isRightToLeft = true;
                      return true;
                  }
                }));
                var dirNode = document.getElementsByTagName("html")[0];
                if(this.config.i18n.isRightToLeft){
                      dirNode.setAttribute("dir","rtl");
                      domClass.add( dirNode,"esriRtl");
                }else{
                  dirNode.setAttribute("dir","ltr");
                  domClass.add(dirNode,"esriLtr");
                }
                deferred.resolve(true);
                return deferred.promise;

            },
            setDefaults: function(){
              //Check to see if the app is hosted or a portal. In those cases set the sharing url and the proxy. Otherwise use
              //the sharing url set it to arcgis.com. We know app is hosted (or portal) if it has /apps/ in the url 
  

              //templates can be at /apps or /home/webmap/templates
              var appLocation = location.pathname.indexOf("/apps/");
              if(appLocation === -1){
                 appLocation = location.pathname.indexOf("/home/");
              }
    
              var appUrl = "";
              if(this.config.sharingurl){ //sharing url specified 
                appUrl = this.config.sharingurl;
              }
              else if(appLocation!== -1){ //hosted or portal 
                var instance = location.pathname.substr(0,appLocation);
                appUrl = location.protocol + "//" + location.host + instance;
                this.config.proxy =  location.protocol + '//' + location.host + instance +  "/sharing/proxy";
              }else{ //default to arcgis.com 
                appUrl = location.protocol + "//" +  "www.arcgis.com";
              }
      
              esri.arcgis.utils.arcgisUrl = appUrl + "/sharing/rest/content/items";
              this.appPath = appUrl;
      
              //Set the proxy. If the app is hosted use the default proxy. 
              if(this.config.proxy){
                esri.config.defaults.io.proxyUrl = this.config.proxy;
                esri.config.defaults.io.alwaysUseProxy = false;    
              }

              //setup any helper services (geometry, print, routing, geocoding)
              if(this.config.helperServices && this.config.helperServices.geometry && this.config.helperServices.geometry.url){
                esri.config.defaults.geometryService = new esri.tasks.GeometryService(this.config.helperServices.geometry.url);
              }
     
            },
             queryApplication : function(){
    
            //If there is an application id query arcgis.com using esri.arcgis.utils.getItem to get the item info. If the item info includes 
            //itemData.values then the app was configurable so overwrite the default values with the configured values. 
                var deferred = new Deferred();
                if(this.config.appid){
                   return utils.getItem(this.config.appid).then(lang.hitch(this,function(response){
                        lang.mixin(this.config, response.itemData.values);
                        //overwrite any values with url params 
                        var urlObject = esri.urlToObject(document.location.href);
                        urlObject.query = urlObject.query || {};
                        lang.mixin(this.config,urlObject.query);

                        return true;
                    }));
                }else{
                    deferred.resolve(true);
                }
                return deferred.promise;

     
            },

            queryOrganization: function(){
  
                var deferred = new Deferred();
              // esri.arcgis.utils.arcgisUrl = this.appUrl + "/sharing/rest/content/items";
               //Is this a hosted app or is it an app with an organization url set to query for info
                if(this.appPath){

                 var req = esri.request({
                    url: this.appPath + "/sharing/rest/portals/self",
                    content:{"f": "json"},
                    callbackParamName:"callback"
                 });
                 req.then(dojo.hitch(this, function(response){

                        this.config.self = response;
                        //look for helper services and if they exist set them
                        if(response.isPortal && response.portalMode === "single tenant"){
                          this.config.sharingurl = response.portalHostname;
                        }
                        lang.mixin(this.config.helperServices, response.helperServices);
                        this.setDefaults();
                        deferred.resolve(true); 
                 }));
                }else{
  
                  deferred.resolve(true);
   
                }
                return deferred.promise;
            }
           });
        return App;
    });

