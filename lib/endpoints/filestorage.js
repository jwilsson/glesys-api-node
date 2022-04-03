import Endpoint from '../endpoint.js';

class FileStorage extends Endpoint {
    // https://github.com/glesys/API/wiki/API-Documentation#filestoragecreatevolume
    createVolume(data) {
        return this.request.post('/filestorage/createvolume', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#filestorageeditvolume
    editVolume(data) {
        return this.request.post('/filestorage/editvolume', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#filestoragedeletevolume
    deleteVolume(data) {
        return this.request.post('/filestorage/deletevolume', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#filestoragelistplans
    listPlans(data) {
        return this.request.get('/filestorage/listplans', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#filestoragelistvolumes
    listVolumes() {
        return this.request.get('/filestorage/listvolumes');
    }

    // https://github.com/glesys/API/wiki/API-Documentation#filestorageresourceusage
    resourceUsage(data) {
        return this.request.get('/filestorage/resourceusage', data);
    }

    // https://github.com/glesys/API/wiki/API-Documentation#filestoragevolumedetails
    volumeDetails(data) {
        return this.request.get('/filestorage/volumedetails', data);
    }
}

export default FileStorage;
