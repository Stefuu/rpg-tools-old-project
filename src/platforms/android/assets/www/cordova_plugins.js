cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.es3.cordova.plugins.showwhenlocked/www/showwhenlocked.js",
        "id": "com.es3.cordova.plugins.showwhenlocked.device",
        "clobbers": [
            "cordova.plugins.showwhenlocked"
        ]
    },
    {
        "file": "plugins/cordova.plugin.Brightness/www/brightness.js",
        "id": "cordova.plugin.Brightness.Brightness",
        "clobbers": [
            "cordova.plugins.brightness"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.insomnia/www/Insomnia.js",
        "id": "nl.x-services.plugins.insomnia.Insomnia",
        "clobbers": [
            "window.plugins.insomnia"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.socialsharing/www/SocialSharing.js",
        "id": "nl.x-services.plugins.socialsharing.SocialSharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.es3.cordova.plugins.showwhenlocked": "0.0.1",
    "cordova.plugin.Brightness": "0.1.0",
    "nl.x-services.plugins.insomnia": "4.0.1",
    "nl.x-services.plugins.socialsharing": "4.3.19",
    "org.apache.cordova.globalization": "0.3.4"
}
// BOTTOM OF METADATA
});