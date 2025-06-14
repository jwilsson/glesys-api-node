# glesys-api

[![npm](https://img.shields.io/npm/v/glesys-api.svg)](https://www.npmjs.com/package/glesys-api)
![build](https://github.com/jwilsson/glesys-api-node/workflows/build/badge.svg)
[![Coverage Status](https://coveralls.io/repos/jwilsson/glesys-api-node/badge.svg?branch=main)](https://coveralls.io/github/jwilsson/glesys-api-node?branch=main)

A Node.js wrapper for the GleSYS API.

## Installation
*Note: 22.11.0 (LTS) or later is required.*

```bash
npm install glesys-api
```

## Usage
```js
import GleSYSAPI from 'glesys-api';

const glesys = new GleSYSAPI({
    apiKey: 'key',
    apiUser: 'user',
});

try {
    const { body } = await glesys.api.serviceInfo();

    console.log(body);
} catch (e) {
    console.error(e);
}

glesys.email.createAccount({
    emailaccount: 'example@example.com',
    password: 'password',
});
```

## Available methods
### account
* [`GleSYSAPI.account.info()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#accountinfo)

### api
* [`GleSYSAPI.api.listFunctions()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#apilistfunctions)
* [`GleSYSAPI.api.maintenance()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#apimaintenance)
* [`GleSYSAPI.api.serviceInfo()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#apiserviceinfo)

### archive
* [`GleSYSAPI.archive.allowedArguments()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archiveallowedarguments)
* [`GleSYSAPI.archive.changeDescription()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivechangedescription)
* [`GleSYSAPI.archive.changePassword()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivechangepassword)
* [`GleSYSAPI.archive.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivecreate)
* [`GleSYSAPI.archive.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivedelete)
* [`GleSYSAPI.archive.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivedetails)
* [`GleSYSAPI.archive.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archivelist)
* [`GleSYSAPI.archive.resize()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#archiveresize)

### country
* [`GleSYSAPI.country.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#countrylist)

### customer
* [`GleSYSAPI.customer.createProject()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#customercreateproject)
* [`GleSYSAPI.customer.editCollaborator()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#customereditcollaborator)
* [`GleSYSAPI.customer.listCollaborators()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#customerlistcollaborators)
* [`GleSYSAPI.customer.listProjects()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#customerlistprojects)
* [`GleSYSAPI.customer.removeCollaborator()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#customerremovecollaborator)
* [`GleSYSAPI.customer.settings()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#customersettings)

### domain
* [`GleSYSAPI.domain.add()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainadd)
* [`GleSYSAPI.domain.addRecord()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainaddrecord)
* [`GleSYSAPI.domain.allowedArguments()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainallowedarguments)
* [`GleSYSAPI.domain.available()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainavailable)
* [`GleSYSAPI.domain.changeNameServers()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainchangenameservers)
* [`GleSYSAPI.domain.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domaindelete)
* [`GleSYSAPI.domain.deleteRecord()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domaindeleterecord)
* [`GleSYSAPI.domain.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domaindetails)
* [`GleSYSAPI.domain.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainedit)
* [`GleSYSAPI.domain.enableDNSSEC()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainenablednssec)
* [`GleSYSAPI.domain.export()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainexport)
* [`GleSYSAPI.domain.generateAuthCode()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domaingenerateauthcode)
* [`GleSYSAPI.domain.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainlist)
* [`GleSYSAPI.domain.listRecords()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainlistrecords)
* [`GleSYSAPI.domain.priceList()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainpricelist)
* [`GleSYSAPI.domain.publishDNSKEY()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainpublishdnskey)
* [`GleSYSAPI.domain.register()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainregister)
* [`GleSYSAPI.domain.renew()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainrenew)
* [`GleSYSAPI.domain.setAutoRenew()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainsetautorenew)
* [`GleSYSAPI.domain.transfer()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domaintransfer)
* [`GleSYSAPI.domain.updateRecord()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainupdaterecord)
* [`GleSYSAPI.domain.unpublishDNSKEY()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#domainunpublishdnskey)

### email
* [`GleSYSAPI.email.costs()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailcosts)
* [`GleSYSAPI.email.createAccount()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailcreateaccount)
* [`GleSYSAPI.email.createAlias()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailcreatealias)
* [`GleSYSAPI.email.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaildelete)
* [`GleSYSAPI.email.editAccount()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaileditaccount)
* [`GleSYSAPI.email.editAlias()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaileditalias)
* [`GleSYSAPI.email.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emaillist)
* [`GleSYSAPI.email.overview()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailoverview)
* [`GleSYSAPI.email.quota()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailquota)
* [`GleSYSAPI.email.resetPassword()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#emailresetpassword)

### fileStorage
* [`GleSYSAPI.fileStorage.createVolume()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestoragecreatevolume)
* [`GleSYSAPI.fileStorage.deleteVolume()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestoragedeletevolume)
* [`GleSYSAPI.fileStorage.editVolume()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestorageeditvolume)
* [`GleSYSAPI.fileStorage.listPlans()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestoragelistplans)
* [`GleSYSAPI.fileStorage.listVolumes()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestoragelistvolumes)
* [`GleSYSAPI.fileStorage.resourceUsage()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestorageresourceusage)
* [`GleSYSAPI.fileStorage.volumeDetails()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#filestoragevolumedetails)

### invoice
* [`GleSYSAPI.invoice.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#invoicelist)
* [`GleSYSAPI.invoice.next()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#invoicenext)
* [`GleSYSAPI.invoice.payByPaypal()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#invoicepaybypaypal)

### ip
* [`GleSYSAPI.ip.add()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#ipadd)
* [`GleSYSAPI.ip.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#ipdetails)
* [`GleSYSAPI.ip.estimatedCost()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#ipestimatedcost)
* [`GleSYSAPI.ip.listFree()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#iplistfree)
* [`GleSYSAPI.ip.listOwn()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#iplistown)
* [`GleSYSAPI.ip.release()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#iprelease)
* [`GleSYSAPI.ip.remove()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#ipremove)
* [`GleSYSAPI.ip.resetPTR()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#ipresetptr)
* [`GleSYSAPI.ip.setPTR()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#ipsetptr)
* [`GleSYSAPI.ip.take()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#iptake)

### loadBalancer
* [`GleSYSAPI.loadBalancer.addBackEnd()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceraddbackend)
* [`GleSYSAPI.loadBalancer.addCertificate()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceraddcertificate)
* [`GleSYSAPI.loadBalancer.addFrontEnd()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceraddfrontend)
* [`GleSYSAPI.loadBalancer.addTarget()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceraddtarget)
* [`GleSYSAPI.loadBalancer.addToBlocklist()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceraddtoblocklist)
* [`GleSYSAPI.loadBalancer.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancercreate)
* [`GleSYSAPI.loadBalancer.destroy()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerdestroy)
* [`GleSYSAPI.loadBalancer.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerdetails)
* [`GleSYSAPI.loadBalancer.disableTarget()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerdisabletarget)
* [`GleSYSAPI.loadBalancer.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceredit)
* [`GleSYSAPI.loadBalancer.editBackEnd()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancereditbackend)
* [`GleSYSAPI.loadBalancer.editFrontEnd()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancereditfrontend)
* [`GleSYSAPI.loadBalancer.editTarget()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalanceredittarget)
* [`GleSYSAPI.loadBalancer.enableTarget()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerenabletarget)
* [`GleSYSAPI.loadBalancer.errors()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancererrors)
* [`GleSYSAPI.loadBalancer.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerlist)
* [`GleSYSAPI.loadBalancer.listCertificate()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerlistcertificate)
* [`GleSYSAPI.loadBalancer.removeBackEnd()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerremovebackend)
* [`GleSYSAPI.loadBalancer.removeCertificate()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerremovecertificate)
* [`GleSYSAPI.loadBalancer.removeFromBlocklist()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerremovefromblocklist)
* [`GleSYSAPI.loadBalancer.removeFrontEnd()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerremovefrontend)
* [`GleSYSAPI.loadBalancer.removeTarget()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#loadbalancerremovetarget)

### network
* [`GleSYSAPI.network.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkcreate)
* [`GleSYSAPI.network.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkdelete)
* [`GleSYSAPI.network.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkdetails)
* [`GleSYSAPI.network.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkedit)
* [`GleSYSAPI.network.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networklist)

### networkAdapter
* [`GleSYSAPI.networkAdapter.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadaptercreate)
* [`GleSYSAPI.networkAdapter.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadapterdelete)
* [`GleSYSAPI.networkAdapter.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadapterdetails)
* [`GleSYSAPI.networkAdapter.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkadapteredit)

### networkCircuit
* [`GleSYSAPI.networkCircuit.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkcircuitdetails)
* [`GleSYSAPI.networkCircuit.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#networkcircuitlist)

### objectStorage
* [`GleSYSAPI.objectStorage.createCredential()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstoragecreatecredential)
* [`GleSYSAPI.objectStorage.createInstance()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstoragecreateinstance)
* [`GleSYSAPI.objectStorage.deleteCredential()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstoragedeletecredential)
* [`GleSYSAPI.objectStorage.deleteInstance()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstoragedeleteinstance)
* [`GleSYSAPI.objectStorage.editInstance()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstorageeditinstance)
* [`GleSYSAPI.objectStorage.estimatedCost()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstorageestimatedcost)
* [`GleSYSAPI.objectStorage.instanceDetails()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstorageinstancedetails)
* [`GleSYSAPI.objectStorage.listInstances()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#objectstoragelistinstances)

### paymentCard
* [`GleSYSAPI.paymentCard.add()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#paymentcardadd)

### privateNetwork
* [`GleSYSAPI.privateNetwork.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkcreate)
* [`GleSYSAPI.privateNetwork.createSegment()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkcreatesegment)
* [`GleSYSAPI.privateNetwork.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkdelete)
* [`GleSYSAPI.privateNetwork.deleteSegment()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkdeletesegment)
* [`GleSYSAPI.privateNetwork.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkdetails)
* [`GleSYSAPI.privateNetwork.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkedit)
* [`GleSYSAPI.privateNetwork.editSegment()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkeditsegment)
* [`GleSYSAPI.privateNetwork.estimatedCost()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworkestimatedcost)
* [`GleSYSAPI.privateNetwork.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworklist)
* [`GleSYSAPI.privateNetwork.listSegments()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#privatenetworklistsegments)

### project
* [`GleSYSAPI.project.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#projectdelete)
* [`GleSYSAPI.project.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#projectedit)
* [`GleSYSAPI.project.rename()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#projectrename)

### server
* [`GleSYSAPI.server.allowedArguments()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverallowedarguments)
* [`GleSYSAPI.server.backup()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverbackup)
* [`GleSYSAPI.server.clone()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverclone)
* [`GleSYSAPI.server.console()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverconsole)
* [`GleSYSAPI.server.costs()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servercosts)
* [`GleSYSAPI.server.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servercreate)
* [`GleSYSAPI.server.createFromBackup()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servercreatefrombackup)
* [`GleSYSAPI.server.createManualBackup()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servercreatemanualbackup)
* [`GleSYSAPI.server.deleteManualBackup()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdeletemanualbackup)
* [`GleSYSAPI.server.destroy()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdestroy)
* [`GleSYSAPI.server.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdetails)
* [`GleSYSAPI.server.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serveredit)
* [`GleSYSAPI.server.estimatedBackupCost()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverestimatedbackupcost)
* [`GleSYSAPI.server.estimatedCost()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverestimatedcost)
* [`GleSYSAPI.server.limits()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverlimits)
* [`GleSYSAPI.server.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverlist)
* [`GleSYSAPI.server.listBackups()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverlistbackups)
* [`GleSYSAPI.server.listISO()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverlistiso)
* [`GleSYSAPI.server.mountISO()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servermountiso)
* [`GleSYSAPI.server.networkAdapters()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servernetworkadapters)
* [`GleSYSAPI.server.previewCloudConfig()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverpreviewcloudconfig)
* [`GleSYSAPI.server.reboot()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverreboot)
* [`GleSYSAPI.server.reset()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverreset)
* [`GleSYSAPI.server.resetLimit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverresetlimit)
* [`GleSYSAPI.server.resetPassword()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverresetpassword)
* [`GleSYSAPI.server.resourceUsage()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverresourceusage)
* [`GleSYSAPI.server.start()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverstart)
* [`GleSYSAPI.server.status()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverstatus)
* [`GleSYSAPI.server.stop()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverstop)
* [`GleSYSAPI.server.templates()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#servertemplates)

### serverDisk
* [`GleSYSAPI.serverDisk.create()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskcreate)
* [`GleSYSAPI.serverDisk.delete()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskdelete)
* [`GleSYSAPI.serverDisk.estimatedCost()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskestimatedcost)
* [`GleSYSAPI.serverDisk.limits()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdisklimits)
* [`GleSYSAPI.serverDisk.reconfigure()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskreconfigure)
* [`GleSYSAPI.serverDisk.updateName()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#serverdiskupdatename)

### sshKey
* [`GleSYSAPI.sshKey.add()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#sshkeyadd)
* [`GleSYSAPI.sshKey.list()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#sshkeylist)
* [`GleSYSAPI.sshKey.remove()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#sshkeyremove)

### user
* [`GleSYSAPI.user.changePassword()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userchangepassword)
* [`GleSYSAPI.user.confirm()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userconfirm)
* [`GleSYSAPI.user.createOrganization()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#usercreateorganization)
* [`GleSYSAPI.user.details()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userdetails)
* [`GleSYSAPI.user.disableTwoFactor()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userdisabletwofactor)
* [`GleSYSAPI.user.edit()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#useredit)
* [`GleSYSAPI.user.enableTwoFactor()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userenabletwofactor)
* [`GleSYSAPI.user.initiateSupportChallenge()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userinitiatesupportchallenge)
* [`GleSYSAPI.user.listOrganizations()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userlistorganizations)
* [`GleSYSAPI.user.login()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userlogin)
* [`GleSYSAPI.user.logout()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#userlogout)
* [`GleSYSAPI.user.searchData()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#usersearchdata)
* [`GleSYSAPI.user.signUp()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#usersignup)
* [`GleSYSAPI.user.supportChallenge()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#usersupportchallenge)

### vpn
* [`GleSYSAPI.vpn.createUser()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpncreateuser)
* [`GleSYSAPI.vpn.deleteUser()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpndeleteuser)
* [`GleSYSAPI.vpn.editUser()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpnedituser)
* [`GleSYSAPI.vpn.listUsers()`](https://github.com/GleSYS/API-docs/wiki/API-Documentation#vpnlistusers)

For more information about the GleSYS API, available arguments etc., please see the [GleSYS API documentation](https://github.com/GleSYS/API-docs/wiki/API-Documentation).
