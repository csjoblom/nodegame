//same code in server and client
(function(exports) {

    message = {
        id: "1",

        REGISTRATION_REQUEST: {
            message: {
                name: "REGISTRATION_REQUEST",
                username: null,
                passwordhash: null
            },
            new: function() {
                return JSON.parse(JSON.stringify(this.message));
            }
        },

        REGISTRATION_RESPONSE: {
            message: {
                name: "REGISTRATION_RESPONSE",
                status: null //OK/NOK(could be, 1/0, true/false, suc/fail,etc.)
            },
            new: function() {
                return JSON.parse(JSON.stringify(this.message));
            }
        },

        LOGIN_REQUEST: {
            message: {
                name: "LOGIN_REQUEST",
                username: null,
                passwordhash: null
            },
            new: function() {
                return JSON.parse(JSON.stringify(this.message));
            }
        }
    };

    exports.message = message;

})(typeof exports === 'undefined' ? this.messages = {} : exports);