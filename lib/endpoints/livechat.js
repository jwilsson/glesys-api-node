'use strict';

class LiveChat {
    constructor (request) {
        this.request = request;
    }

    // https://github.com/glesys/API/wiki/API-Documentation#livechatclosesession
    closeSession (data) {
        return this.request.post('/livechat/closesession', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#livechatgetmessages
    getMessages (data) {
        return this.request.post('/livechat/getmessages', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#livechatnewsession
    newSession (data) {
        return this.request.post('/livechat/newsession', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#livechatpostmessage
    postMessage (data) {
        return this.request.post('/livechat/postmessage', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#livechatsessioninfo
    sessionInfo (data) {
        return this.request.post('/livechat/sessioninfo', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#livechatstatus
    status () {
        return this.request.get('/livechat/status');
    }
}

module.exports = LiveChat;
