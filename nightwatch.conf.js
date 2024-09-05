module.exports = {
    "src_folders" : ["tests/e2eTest"],

    "webdriver" : {
        "start_process": true,
        server_path: require('chromedriver').path,
        port: 9515
    },

    "test_settings" : {
        "default" : {
           launch_url: "http://localhost:3000",
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}