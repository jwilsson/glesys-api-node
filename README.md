# glesys-api

[![npm](https://img.shields.io/npm/v/glesys-api.svg)](https://www.npmjs.com/package/glesys-api)
![build](https://github.com/jwilsson/glesys-api-node/workflows/build/badge.svg)
[![Coverage Status](https://coveralls.io/repos/jwilsson/glesys-api-node/badge.svg?branch=main)](https://coveralls.io/github/jwilsson/glesys-api-node?branch=main)

A Node.js wrapper for the GleSYS API.

## Installation
*Note: Node 14.15.0 (LTS) or later is required.*

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
* [`GleSYSAPI.account.info()`](https://github.com/GleSYS/API/wiki/API-Documentation#accountinfo)

### api
* [`GleSYSAPI.api.listFunctions()`](https://github.com/GleSYS/API/wiki/API-Documentation#apilistfunctions)
* [`GleSYSAPI.api.maintenance()`](https://github.com/GleSYS/API/wiki/API-Documentation#apimaintenance)
* [`GleSYSAPI.api.serviceInfo()`](https://github.com/GleSYS/API/wiki/API-Documentation#apiserviceinfo)

### archive
* [`GleSYSAPI.archive.allowedArguments()`](https://github.com/GleSYS/API/wiki/API-Documentation#archiveallowedarguments)
* [`GleSYSAPI.archive.changeDescription()`](https://github.com/GleSYS/API/wiki/API-Documentation#archivechangedescription)
* [`GleSYSAPI.archive.changePassword()`](https://github.com/GleSYS/API/wiki/API-Documentation#archivechangepassword)
* [`GleSYSAPI.archive.create()`](https://github.com/GleSYS/API/wiki/API-Documentation#archivecreate)
* [`GleSYSAPI.archive.delete()`](https://github.com/GleSYS/API/wiki/API-Documentation#archivedelete)
* [`GleSYSAPI.archive.details()`](https://github.com/GleSYS/API/wiki/API-Documentation#archivedetails)
* [`GleSYSAPI.archive.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#archivelist)
* [`GleSYSAPI.archive.resize()`](https://github.com/GleSYS/API/wiki/API-Documentation#archiveresize)

### country
* [`GleSYSAPI.country.list()`](https://github.com/glesys/API/wiki/API-Documentation#countrylist)

### customer
* [`GleSYSAPI.customer.createProject()`](https://github.com/glesys/API/wiki/API-Documentation#customercreateproject)
* [`GleSYSAPI.customer.editCollaborator()`](https://github.com/glesys/API/wiki/API-Documentation#customereditcollaborator)
* [`GleSYSAPI.customer.listCollaborators()`](https://github.com/glesys/API/wiki/API-Documentation#customerlistcollaborators)
* [`GleSYSAPI.customer.listProjects()`](https://github.com/glesys/API/wiki/API-Documentation#customerlistprojects)
* [`GleSYSAPI.customer.removeCollaborator()`](https://github.com/glesys/API/wiki/API-Documentation#customerremovecollaborator)
* [`GleSYSAPI.customer.settings()`](https://github.com/glesys/API/wiki/API-Documentation#customersettings)

### domain
* [`GleSYSAPI.domain.add()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainadd)
* [`GleSYSAPI.domain.addRecord()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainaddrecord)
* [`GleSYSAPI.domain.available()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainavailable)
* [`GleSYSAPI.domain.changeNameServers()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainchangenameservers)
* [`GleSYSAPI.domain.delete()`](https://github.com/GleSYS/API/wiki/API-Documentation#domaindelete)
* [`GleSYSAPI.domain.deleteRecord()`](https://github.com/GleSYS/API/wiki/API-Documentation#domaindeleterecord)
* [`GleSYSAPI.domain.details()`](https://github.com/GleSYS/API/wiki/API-Documentation#domaindetails)
* [`GleSYSAPI.domain.edit()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainedit)
* [`GleSYSAPI.domain.export()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainexport)
* [`GleSYSAPI.domain.legacyWebHosting()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainlegacywebhosting)
* [`GleSYSAPI.domain.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainlist)
* [`GleSYSAPI.domain.listRecords()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainlistrecords)
* [`GleSYSAPI.domain.priceList()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainpricelist)
* [`GleSYSAPI.domain.register()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainregister)
* [`GleSYSAPI.domain.renew()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainrenew)
* [`GleSYSAPI.domain.setAutoRenew()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainsetautorenew)
* [`GleSYSAPI.domain.transfer()`](https://github.com/GleSYS/API/wiki/API-Documentation#domaintransfer)
* [`GleSYSAPI.domain.updateRecord()`](https://github.com/GleSYS/API/wiki/API-Documentation#domainupdaterecord)

### email
* [`GleSYSAPI.email.costs()`](https://github.com/GleSYS/API/wiki/API-Documentation#emailcosts)
* [`GleSYSAPI.email.createAccount()`](https://github.com/GleSYS/API/wiki/API-Documentation#emailcreateaccount)
* [`GleSYSAPI.email.createAlias()`](https://github.com/GleSYS/API/wiki/API-Documentation#emailcreatealias)
* [`GleSYSAPI.email.delete()`](https://github.com/GleSYS/API/wiki/API-Documentation#emaildelete)
* [`GleSYSAPI.email.editAccount()`](https://github.com/GleSYS/API/wiki/API-Documentation#emaileditaccount)
* [`GleSYSAPI.email.editAlias()`](https://github.com/GleSYS/API/wiki/API-Documentation#emaileditalias)
* [`GleSYSAPI.email.globalQuota()`](https://github.com/GleSYS/API/wiki/API-Documentation#emailglobalquota)
* [`GleSYSAPI.email.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#emaillist)
* [`GleSYSAPI.email.overview()`](https://github.com/GleSYS/API/wiki/API-Documentation#emailoverview)
* [`GleSYSAPI.email.quota()`](https://github.com/GleSYS/API/wiki/API-Documentation#emailquota)

### fileStorage
* [`GleSYSAPI.fileStorage.createVolume()`](https://github.com/glesys/API/wiki/API-Documentation#filestoragecreatevolume)
* [`GleSYSAPI.fileStorage.editVolume()`](https://github.com/glesys/API/wiki/API-Documentation#filestorageeditvolume)
* [`GleSYSAPI.fileStorage.deleteVolume()`](https://github.com/glesys/API/wiki/API-Documentation#filestoragedeletevolume)
* [`GleSYSAPI.fileStorage.listPlans()`](https://github.com/glesys/API/wiki/API-Documentation#filestoragelistplans)
* [`GleSYSAPI.fileStorage.listVolumes()`](https://github.com/glesys/API/wiki/API-Documentation#filestoragelistvolumes)
* [`GleSYSAPI.fileStorage.resourceUsage()`](https://github.com/glesys/API/wiki/API-Documentation#filestorageresourceusage)
* [`GleSYSAPI.fileStorage.volumeDetails()`](https://github.com/glesys/API/wiki/API-Documentation#filestoragevolumedetails)

### invoice
* [`GleSYSAPI.invoice.billingPeriod()`](https://github.com/GleSYS/API/wiki/API-Documentation#invoicebillingperiod)
* [`GleSYSAPI.invoice.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#invoicelist)
* [`GleSYSAPI.invoice.next()`](https://github.com/GleSYS/API/wiki/API-Documentation#invoicenext)
* [`GleSYSAPI.invoice.payByPaypal()`](https://github.com/GleSYS/API/wiki/API-Documentation#invoicepaybypaypal)

### ip
* [`GleSYSAPI.ip.add()`](https://github.com/GleSYS/API/wiki/API-Documentation#ipadd)
* [`GleSYSAPI.ip.details()`](https://github.com/GleSYS/API/wiki/API-Documentation#ipdetails)
* [`GleSYSAPI.ip.listFree()`](https://github.com/GleSYS/API/wiki/API-Documentation#iplistfree)
* [`GleSYSAPI.ip.listOwn()`](https://github.com/GleSYS/API/wiki/API-Documentation#iplistown)
* [`GleSYSAPI.ip.release()`](https://github.com/GleSYS/API/wiki/API-Documentation#iprelease)
* [`GleSYSAPI.ip.remove()`](https://github.com/GleSYS/API/wiki/API-Documentation#ipremove)
* [`GleSYSAPI.ip.resetPTR()`](https://github.com/GleSYS/API/wiki/API-Documentation#ipresetptr)
* [`GleSYSAPI.ip.setPTR()`](https://github.com/GleSYS/API/wiki/API-Documentation#ipsetptr)
* [`GleSYSAPI.ip.take()`](https://github.com/GleSYS/API/wiki/API-Documentation#iptake)

### loadBalancer
* [`GleSYSAPI.loadBalancer.addBackEnd()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalanceraddbackend)
* [`GleSYSAPI.loadBalancer.addCertificate()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalanceraddcertificate)
* [`GleSYSAPI.loadBalancer.addFrontEnd()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalanceraddfrontend)
* [`GleSYSAPI.loadBalancer.addTarget()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalanceraddtarget)
* [`GleSYSAPI.loadBalancer.addToBlocklist()`](https://github.com/glesys/API/wiki/API-Documentation#loadbalanceraddtoblocklist)
* [`GleSYSAPI.loadBalancer.create()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancercreate)
* [`GleSYSAPI.loadBalancer.destroy()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerdestroy)
* [`GleSYSAPI.loadBalancer.details()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerdetails)
* [`GleSYSAPI.loadBalancer.disableTarget()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerdisabletarget)
* [`GleSYSAPI.loadBalancer.edit()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalanceredit)
* [`GleSYSAPI.loadBalancer.editBackEnd()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancereditbackend)
* [`GleSYSAPI.loadBalancer.editFrontEnd()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancereditfrontend)
* [`GleSYSAPI.loadBalancer.editTarget()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalanceredittarget)
* [`GleSYSAPI.loadBalancer.enableTarget()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerenabletarget)
* [`GleSYSAPI.loadBalancer.errors()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancererrors)
* [`GleSYSAPI.loadBalancer.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerlist)
* [`GleSYSAPI.loadBalancer.listCertificate()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerlistcertificate)
* [`GleSYSAPI.loadBalancer.removeBackEnd()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerremovebackend)
* [`GleSYSAPI.loadBalancer.removeCertificate()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerremovecertificate)
* [`GleSYSAPI.loadBalancer.removeFromBlocklist()`](https://github.com/glesys/API/wiki/API-Documentation#loadbalancerremovefromblocklist)
* [`GleSYSAPI.loadBalancer.removeFrontEnd()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerremovefrontend)
* [`GleSYSAPI.loadBalancer.removeTarget()`](https://github.com/GleSYS/API/wiki/API-Documentation#loadbalancerremovetarget)

### network
* [`GleSYSAPI.network.create()`](https://github.com/glesys/API/wiki/API-Documentation#networkcreate)
* [`GleSYSAPI.network.delete()`](https://github.com/glesys/API/wiki/API-Documentation#networkdelete)
* [`GleSYSAPI.network.details()`](https://github.com/glesys/API/wiki/API-Documentation#networkdetails)
* [`GleSYSAPI.network.edit()`](https://github.com/glesys/API/wiki/API-Documentation#networkedit)
* [`GleSYSAPI.network.list()`](https://github.com/glesys/API/wiki/API-Documentation#networklist)

### networkAdapter
* [`GleSYSAPI.networkAdapter.create()`](https://github.com/glesys/API/wiki/API-Documentation#networkadaptercreate)
* [`GleSYSAPI.networkAdapter.delete()`](https://github.com/glesys/API/wiki/API-Documentation#networkadapterdelete)
* [`GleSYSAPI.networkAdapter.details()`](https://github.com/glesys/API/wiki/API-Documentation#networkadapterdetails)
* [`GleSYSAPI.networkAdapter.edit()`](https://github.com/glesys/API/wiki/API-Documentation#networkadapteredit)

### objectStorage
* [`GleSYSAPI.objectStorage.createCredential()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragecreatecredential)
* [`GleSYSAPI.objectStorage.createInstance()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragecreateinstance)
* [`GleSYSAPI.objectStorage.deleteCredential()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragedeletecredential)
* [`GleSYSAPI.objectStorage.deleteInstance()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragedeleteinstance)
* [`GleSYSAPI.objectStorage.editInstance()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstorageeditinstance)
* [`GleSYSAPI.objectStorage.estimatedCost()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstorageestimatedcost)
* [`GleSYSAPI.objectStorage.instanceDetails()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstorageinstancedetails)
* [`GleSYSAPI.objectStorage.listInstances()`](https://github.com/GleSYS/API/wiki/API-Documentation#objectstoragelistinstances)

### paymentCard
* [`GleSYSAPI.paymentCard.add()`](https://github.com/GleSYS/API/wiki/API-Documentation#paymentcardadd)

### project
* [`GleSYSAPI.project.edit()`](https://github.com/glesys/API/wiki/API-Documentation#projectedit)
* [`GleSYSAPI.project.delete()`](https://github.com/glesys/API/wiki/API-Documentation#projectdelete)
* [`GleSYSAPI.project.rename()`](https://github.com/glesys/API/wiki/API-Documentation#projectrename)

### server
* [`GleSYSAPI.server.allowedArguments()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverallowedarguments)
* [`GleSYSAPI.server.backup()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverbackup)
* [`GleSYSAPI.server.clone()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverclone)
* [`GleSYSAPI.server.console()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverconsole)
* [`GleSYSAPI.server.costs()`](https://github.com/GleSYS/API/wiki/API-Documentation#servercosts)
* [`GleSYSAPI.server.create()`](https://github.com/GleSYS/API/wiki/API-Documentation#servercreate)
* [`GleSYSAPI.server.createFromBackup()`](https://github.com/GleSYS/API/wiki/API-Documentation#servercreatefrombackup)
* [`GleSYSAPI.server.destroy()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverdestroy)
* [`GleSYSAPI.server.details()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverdetails)
* [`GleSYSAPI.server.edit()`](https://github.com/GleSYS/API/wiki/API-Documentation#serveredit)
* [`GleSYSAPI.server.estimatedCost()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverestimatedcost)
* [`GleSYSAPI.server.limits()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverlimits)
* [`GleSYSAPI.server.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverlist)
* [`GleSYSAPI.server.listBackups()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverlistbackups)
* [`GleSYSAPI.server.listISO()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverlistiso)
* [`GleSYSAPI.server.mountISO()`](https://github.com/GleSYS/API/wiki/API-Documentation#servermountiso)
* [`GleSYSAPI.server.networkAdapters()`](https://github.com/glesys/API/wiki/API-Documentation#servernetworkadapters)
* [`GleSYSAPI.server.previewCloudConfig()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverpreviewcloudconfig)
* [`GleSYSAPI.server.reboot()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverreboot)
* [`GleSYSAPI.server.reset()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverreset)
* [`GleSYSAPI.server.resetLimit()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverresetlimit)
* [`GleSYSAPI.server.resetPassword()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverresetpassword)
* [`GleSYSAPI.server.resourceUsage()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverresourceusage)
* [`GleSYSAPI.server.start()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverstart)
* [`GleSYSAPI.server.status()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverstatus)
* [`GleSYSAPI.server.stop()`](https://github.com/GleSYS/API/wiki/API-Documentation#serverstop)
* [`GleSYSAPI.server.templates()`](https://github.com/GleSYS/API/wiki/API-Documentation#servertemplates)

### sshKey
* [`GleSYSAPI.sshKey.add()`](https://github.com/GleSYS/API/wiki/API-Documentation#sshkeyadd)
* [`GleSYSAPI.sshKey.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#sshkeylist)
* [`GleSYSAPI.sshKey.remove()`](https://github.com/GleSYS/API/wiki/API-Documentation#sshkeyremove)

### transaction
* [`GleSYSAPI.transaction.acknowledge()`](https://github.com/GleSYS/API/wiki/API-Documentation#transactionacknowledge)
* [`GleSYSAPI.transaction.cancel()`](https://github.com/GleSYS/API/wiki/API-Documentation#transactioncancel)
* [`GleSYSAPI.transaction.list()`](https://github.com/GleSYS/API/wiki/API-Documentation#transactionlist)
* [`GleSYSAPI.transaction.start()`](https://github.com/GleSYS/API/wiki/API-Documentation#transactionstart)

### user
* [`GleSYSAPI.user.changePassword()`](https://github.com/GleSYS/API/wiki/API-Documentation#userchangepassword)
* [`GleSYSAPI.user.confirm()`](https://github.com/GleSYS/API/wiki/API-Documentation#userconfirm)
* [`GleSYSAPI.user.createOrganization()`](https://github.com/glesys/API/wiki/API-Documentation#usercreateorganization)
* [`GleSYSAPI.user.details()`](https://github.com/GleSYS/API/wiki/API-Documentation#userdetails)
* [`GleSYSAPI.user.disableTwoFactor()`](https://github.com/GleSYS/API/wiki/API-Documentation#userdisabletwofactor)
* [`GleSYSAPI.user.edit()`](https://github.com/GleSYS/API/wiki/API-Documentation#useredit)
* [`GleSYSAPI.user.enableTwoFactor()`](https://github.com/GleSYS/API/wiki/API-Documentation#userenabletwofactor)
* [`GleSYSAPI.user.listOrganizations()`](https://github.com/glesys/API/wiki/API-Documentation#userlistorganizations)
* [`GleSYSAPI.user.login()`](https://github.com/GleSYS/API/wiki/API-Documentation#userlogin)
* [`GleSYSAPI.user.logout()`](https://github.com/GleSYS/API/wiki/API-Documentation#userlogout)
* [`GleSYSAPI.user.searchData()`](https://github.com/GleSYS/API/wiki/API-Documentation#usersearchdata)
* [`GleSYSAPI.user.signUp()`](https://github.com/GleSYS/API/wiki/API-Documentation#usersignup)

### vpn
* [`GleSYSAPI.vpn.createUser()`](https://github.com/GleSYS/API/wiki/API-Documentation#vpncreateuser)
* [`GleSYSAPI.vpn.deleteUser()`](https://github.com/GleSYS/API/wiki/API-Documentation#vpndeleteuser)
* [`GleSYSAPI.vpn.editUser()`](https://github.com/GleSYS/API/wiki/API-Documentation#vpnedituser)
* [`GleSYSAPI.vpn.listUsers()`](https://github.com/GleSYS/API/wiki/API-Documentation#vpnlistusers)

For more information about the GleSYS API, available arguments etc., please see the [GleSYS API documentation](https://github.com/glesys/API/wiki/API-Documentation).
