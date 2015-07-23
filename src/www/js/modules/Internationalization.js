var defaultLanguage = require('./../languages/languages.json');

module.exports = {
  movelDeCabeceira : function(){
  	require('./../languages/pt-BR.json');
  	require('./../languages/en-US.json');
  },
  chooseLanguage : function(){
    var i = 0;
    for(i; i < defaultLanguage.languages.length; i++){
      if(navigator.language == defaultLanguage.languages[i]){
        return require('./../languages/'+ navigator.language +'.json');
      }
    }
    return require('./../languages/en-US.json');;
  }
}
