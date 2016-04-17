'use strict';

class LiveChat {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/GleSYS/API/wiki/functions_livechat#livechatclosesession
    closeSession (data) {
        return this.request.post('/livechat/closesession', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_livechat#livechatgetmessages
    getMessages (data) {
        return this.request.post('/livechat/getmessages', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_livechat#livechatnewsession
    newSession (data) {
        return this.request.post('/livechat/newsession', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_livechat#livechatpostmessage
    postMessage (data) {
        return this.request.post('/livechat/postmessage', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_livechat#livechatsessioninfo
    sessionInfo (data) {
        return this.request.post('/livechat/sessioninfo', data);
    }

    // https://github.com/GleSYS/API/wiki/functions_livechat#livechatstatus
    status () {
        return this.request.get('/livechat/status');
    }
}

module.exports = LiveChat;
