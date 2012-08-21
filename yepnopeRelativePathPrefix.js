/// <reference path="modernizr.js" />
function getRelPath() {
    /// <summary>
    /// Returns the relative path
    /// </summary>
    /// <returns type="string">Relative path</returns>
    var path = ''; for (var i = 0; i < document.location.pathname.split('/').length - 2; i++) path += '../'; return path;
}

(function(yepnope){
    /// <summary>
    /// Corrects Pathing issues
    /// </summary>
    /// <param name="yepnope"></param>
    yepnope.addPrefix('mysite', function(resourceObj) { 
        resourceObj.url = getRelPath() + resourceObj.url; 
        return resourceObj;
    }); 
})(this.yepnope);




/// <example>
/// Corrects Pathing issues
/// Modernizr.load([{load: 'SBN!/Scripts/bootstrap/bootstrap.min.js'}]);
/// </example>
