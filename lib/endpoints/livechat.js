'use strict';

var LiveChat = function (request) {
    this.request = request;
};

// https://github.com/GleSYS/API/wiki/functions_livechat#livechatclosesession
LiveChat.prototype.closeSession = function (data) {
    return this.request.post('/livechat/closesession', data);
};

// https://github.com/GleSYS/API/wiki/functions_livechat#livechatgetmessages
LiveChat.prototype.getMessages = function (data) {
    return this.request.post('/livechat/getmessages', data);
};

// https://github.com/GleSYS/API/wiki/functions_livechat#livechatnewsession
LiveChat.prototype.newSession = function (data) {
    return this.request.post('/livechat/newsession', data);
};

// https://github.com/GleSYS/API/wiki/functions_livechat#livechatpostmessage
LiveChat.prototype.postMessage = function (data) {
    return this.request.post('/livechat/postmessage', data);
};

// https://github.com/GleSYS/API/wiki/functions_livechat#livechatsessioninfo
LiveChat.prototype.sessionInfo = function (data) {
    return this.request.post('/livechat/sessioninfo', data);
};

// https://github.com/GleSYS/API/wiki/functions_livechat#livechatstatus
LiveChat.prototype.status = function () {
    return this.request.get('/livechat/status');
};

module.exports = LiveChat;
