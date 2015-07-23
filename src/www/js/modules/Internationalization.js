var defaultLanguage = require('./../languages/languages.json');

module.exports = {
  movelDeCabeceira : function(){
  	require('./../languages/pt-br.json');
  	require('./../languages/en-us.json');
  },
  chooseLanguage : function(){
    var i = 0;
    for(i; i < defaultLanguage.languages.length; i++){
      if(navigator.language.toLowerCase() == defaultLanguage.languages[i].toLowerCase()){
        return require('./../languages/'+ navigator.language.toLowerCase() +'.json');
      }
    }
    return require('./../languages/en-us.json');;
  }
}
