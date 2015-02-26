var defaultLanguage = require('./../language/default.json');

module.exports = {
  string: function(setStrings){
    if(navigator.globalization){
      navigator.globalization.getPreferredLanguage(
        function (language){
          var url = './js/language/' + language.value +  '.json';
          var req = new XMLHttpRequest();
          req.open('GET', url, false);
          req.send();
          if(req.status == 200){
            setStrings(JSON.parse(req.response));
          }
          else{
            setStrings(defaultLanguage);
          }
        }.bind(setStrings)
      );
    }
    else{
      setStrings(defaultLanguage);
    }
  },
  datePattern: function(setDate){
    if(navigator.globalization){
      navigator.globalization.dateToString(
        new Date,
        function(date){
          setDate(date.value);
        }.bind(setDate),
        function(){
          setDate(new Date().toFormat('MM/DD/YYYY HH24:MI'));
        }.bind(setDate))
    }
    else{
      setDate(new Date().toFormat('MM/DD/YYYY HH24:MI'));
    }
  }
}
