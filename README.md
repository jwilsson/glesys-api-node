# glesys-api

[![npm](https://img.shields.io/npm/v/glesys-api-node.svg)](https://www.npmjs.com/package/glesys-api-node)
[![Build Status](https://travis-ci.org/jwilsson/glesys-api-node.svg?branch=master)](https://travis-ci.org/jwilsson/glesys-api-node)
[![Coverage Status](https://coveralls.io/repos/jwilsson/glesys-api-node/badge.svg?branch=master&service=github)](https://coveralls.io/github/jwilsson/glesys-api-node?branch=master)

A Node.js wrapper for the GleSYS API.

## Installation
*Note: Node 4 or later is required.*

```bash
npm install glesys-api
```

## Usage
```js
const GleSYSAPI = require('glesys-api');

const glesys = new GleSYSAPI({
    apiKey: 'key',
    apiUser: 'user',
});

glesys.api.serviceInfo().then((res) => {
    console.log(res.body);
});

glesys.email.createAccount({
    emailaccount: 'example@example.com',
    password: 'password',
});
```

## Available methods
### account
* [`GleSYSAPI.account.changePassword()`](https://github.com/GleSYS/API/wiki/functions_account#accountchangepassword)
* [`GleSYSAPI.account.info()`](https://github.com/GleSYS/API/wiki/functions_account#accountinfo)

### api
* [`GleSYSAPI.api.listFunctions()`](https://github.com/GleSYS/API/wiki/functions_api#apilistfunctions)
* [`GleSYSAPI.api.maintenance()`](https://github.com/GleSYS/API/wiki/functions_api#apimaintenance)
* [`GleSYSAPI.api.serviceInfo()`](https://github.com/GleSYS/API/wiki/functions_api#apiserviceinfo)

### archive
* [`GleSYSAPI.archive.allowedArguments()`](https://github.com/GleSYS/API/wiki/functions_archive#archiveallowedarguments)
* [`GleSYSAPI.archive.changeDescription()`](https://github.com/GleSYS/API/wiki/functions_archive#archivechangedescription)
* [`GleSYSAPI.archive.changePassword()`](https://github.com/GleSYS/API/wiki/functions_archive#archivechangepassword)
* [`GleSYSAPI.archive.create()`](https://github.com/GleSYS/API/wiki/functions_archive#archivecreate)
* [`GleSYSAPI.archive.delete()`](https://github.com/GleSYS/API/wiki/functions_archive#archivedelete)
* [`GleSYSAPI.archive.details()`](https://github.com/GleSYS/API/wiki/functions_archive#archivedetails)
* [`GleSYSAPI.archive.list()`](https://github.com/GleSYS/API/wiki/functions_archive#archivelist)
* [`GleSYSAPI.archive.resize()`](https://github.com/GleSYS/API/wiki/functions_archive#archiveresize)

### changelog
* [`GleSYSAPI.changelog.api()`](https://github.com/GleSYS/API/wiki/functions_changelog#changelogapi)
* [`GleSYSAPI.changelog.controlPanel()`](https://github.com/GleSYS/API/wiki/functions_changelog#changelogcontrolpanel)

### contactPerson
* [`GleSYSAPI.contactPerson.add()`](https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonadd)
* [`GleSYSAPI.contactPerson.delete()`](https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersondelete)
* [`GleSYSAPI.contactPerson.edit()`](https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonedit)
* [`GleSYSAPI.contactPerson.list()`](https://github.com/GleSYS/API/wiki/functions_contactperson#contactpersonlist)

### customer
* [`GleSYSAPI.customer.contactInfo()`](https://github.com/GleSYS/API/wiki/functions_customer#customercontactinfo)

### domain
* [`GleSYSAPI.domain.add()`](https://github.com/GleSYS/API/wiki/functions_domain#domainadd)
* [`GleSYSAPI.domain.addRecord()`](https://github.com/GleSYS/API/wiki/functions_domain#domainaddrecord)
* [`GleSYSAPI.domain.allowedArguments()`](https://github.com/GleSYS/API/wiki/functions_domain#domainallowedarguments)
* [`GleSYSAPI.domain.available()`](https://github.com/GleSYS/API/wiki/functions_domain#domainavailable)
* [`GleSYSAPI.domain.changeNameServers()`](https://github.com/GleSYS/API/wiki/functions_domain#domainchangenameservers)
* [`GleSYSAPI.domain.delete()`](https://github.com/GleSYS/API/wiki/functions_domain#domaindelete)
* [`GleSYSAPI.domain.deleteRecord()`](https://github.com/GleSYS/API/wiki/functions_domain#domaindeleterecord)
* [`GleSYSAPI.domain.details()`](https://github.com/GleSYS/API/wiki/functions_domain#domaindetails)
* [`GleSYSAPI.domain.edit()`](https://github.com/GleSYS/API/wiki/functions_domain#domainedit)
* [`GleSYSAPI.domain.legacyWebHosting()`](https://github.com/GleSYS/API/wiki/functions_domain#domainlegacywebhosting)
* [`GleSYSAPI.domain.list()`](https://github.com/GleSYS/API/wiki/functions_domain#domainlist)
* [`GleSYSAPI.domain.listRecords()`](https://github.com/GleSYS/API/wiki/functions_domain#domainlistrecords)
* [`GleSYSAPI.domain.priceList()`](https://github.com/GleSYS/API/wiki/functions_domain#domainpricelist)
* [`GleSYSAPI.domain.register()`](https://github.com/GleSYS/API/wiki/functions_domain#domainregister)
* [`GleSYSAPI.domain.renew()`](https://github.com/GleSYS/API/wiki/functions_domain#domainrenew)
* [`GleSYSAPI.domain.setAutoRenew()`](https://github.com/GleSYS/API/wiki/functions_domain#domainsetautorenew)
* [`GleSYSAPI.domain.transfer()`](https://github.com/GleSYS/API/wiki/functions_domain#domaintransfer)
* [`GleSYSAPI.domain.updateRecord()`](https://github.com/GleSYS/API/wiki/functions_domain#domainupdaterecord)

### email
* [`GleSYSAPI.email.costs()`](https://github.com/GleSYS/API/wiki/functions_email#emailcosts)
* [`GleSYSAPI.email.createAccount()`](https://github.com/GleSYS/API/wiki/functions_email#emailcreateaccount)
* [`GleSYSAPI.email.createAlias()`](https://github.com/GleSYS/API/wiki/functions_email#emailcreatealias)
* [`GleSYSAPI.email.delete()`](https://github.com/GleSYS/API/wiki/functions_email#emaildelete)
* [`GleSYSAPI.email.editAccount()`](https://github.com/GleSYS/API/wiki/functions_email#emaileditaccount)
* [`GleSYSAPI.email.editAlias()`](https://github.com/GleSYS/API/wiki/functions_email#emaileditalias)
* [`GleSYSAPI.email.globalQuota()`](https://github.com/GleSYS/API/wiki/functions_email#emailglobalquota)
* [`GleSYSAPI.email.list()`](https://github.com/GleSYS/API/wiki/functions_email#emaillist)
* [`GleSYSAPI.email.overview()`](https://github.com/GleSYS/API/wiki/functions_email#emailoverview)
* [`GleSYSAPI.email.quota()`](https://github.com/GleSYS/API/wiki/functions_email#emailquota)

### invoice
* [`GleSYSAPI.invoice.allowedArguments()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoiceallowedarguments)
* [`GleSYSAPI.invoice.billingPeriod()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoicebillingperiod)
* [`GleSYSAPI.invoice.list()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoicelist)
* [`GleSYSAPI.invoice.next()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoicenext)
* [`GleSYSAPI.invoice.payByPaypal()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaybypaypal)
* [`GleSYSAPI.invoice.paymentHistory()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoicepaymenthistory)
* [`GleSYSAPI.invoice.settings()`](https://github.com/GleSYS/API/wiki/functions_invoice#invoicesettings)

### ip
* [`GleSYSAPI.ip.add()`](https://github.com/GleSYS/API/wiki/functions_ip#ipadd)
* [`GleSYSAPI.ip.details()`](https://github.com/GleSYS/API/wiki/functions_ip#ipdetails)
* [`GleSYSAPI.ip.listFree()`](https://github.com/GleSYS/API/wiki/functions_ip#iplistfree)
* [`GleSYSAPI.ip.listOwn()`](https://github.com/GleSYS/API/wiki/functions_ip#iplistown)
* [`GleSYSAPI.ip.release()`](https://github.com/GleSYS/API/wiki/functions_ip#iprelease)
* [`GleSYSAPI.ip.remove()`](https://github.com/GleSYS/API/wiki/functions_ip#ipremove)
* [`GleSYSAPI.ip.resetPTR()`](https://github.com/GleSYS/API/wiki/functions_ip#ipresetptr)
* [`GleSYSAPI.ip.setPTR()`](https://github.com/GleSYS/API/wiki/functions_ip#ipsetptr)
* [`GleSYSAPI.ip.take()`](https://github.com/GleSYS/API/wiki/functions_ip#iptake)

### liveChat
* [`GleSYSAPI.liveChat.closeSession()`](https://github.com/GleSYS/API/wiki/functions_livechat#livechatclosesession)
* [`GleSYSAPI.liveChat.getMessages()`](https://github.com/GleSYS/API/wiki/functions_livechat#livechatgetmessages)
* [`GleSYSAPI.liveChat.newSession()`](https://github.com/GleSYS/API/wiki/functions_livechat#livechatnewsession)
* [`GleSYSAPI.liveChat.postMessage()`](https://github.com/GleSYS/API/wiki/functions_livechat#livechatpostmessage)
* [`GleSYSAPI.liveChat.sessionInfo()`](https://github.com/GleSYS/API/wiki/functions_livechat#livechatsessioninfo)
* [`GleSYSAPI.liveChat.status()`](https://github.com/GleSYS/API/wiki/functions_livechat#livechatstatus)

### loadBalancer
* [`GleSYSAPI.loadBalancer.addBackEnd()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddbackend)
* [`GleSYSAPI.loadBalancer.addCertificate()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddcertificate)
* [`GleSYSAPI.loadBalancer.addFrontEnd()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddfrontend)
* [`GleSYSAPI.loadBalancer.addTarget()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceraddtarget)
* [`GleSYSAPI.loadBalancer.create()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancercreate)
* [`GleSYSAPI.loadBalancer.destroy()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdestroy)
* [`GleSYSAPI.loadBalancer.details()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdetails)
* [`GleSYSAPI.loadBalancer.disableTarget()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerdisabletarget)
* [`GleSYSAPI.loadBalancer.edit()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceredit)
* [`GleSYSAPI.loadBalancer.editBackEnd()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancereditbackend)
* [`GleSYSAPI.loadBalancer.editFrontEnd()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancereditfrontend)
* [`GleSYSAPI.loadBalancer.editTarget()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalanceredittarget)
* [`GleSYSAPI.loadBalancer.enableTarget()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerenabletarget)
* [`GleSYSAPI.loadBalancer.list()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerlist)
* [`GleSYSAPI.loadBalancer.listCertificate()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerlistcertificate)
* [`GleSYSAPI.loadBalancer.removeBackEnd()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovebackend)
* [`GleSYSAPI.loadBalancer.removeCertificate()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovecertificate)
* [`GleSYSAPI.loadBalancer.removeFrontEnd()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovefrontend)
* [`GleSYSAPI.loadBalancer.removeTarget()`](https://github.com/GleSYS/API/wiki/functions_loadbalancer#loadbalancerremovetarget)

### paymentCard
* [`GleSYSAPI.paymentCard.add()`](https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardadd)
* [`GleSYSAPI.paymentCard.delete()`](https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcarddelete)
* [`GleSYSAPI.paymentCard.edit()`](https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardedit)
* [`GleSYSAPI.paymentCard.list()`](https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardlist)
* [`GleSYSAPI.paymentCard.payInvoices()`](https://github.com/GleSYS/API/wiki/functions_paymentcard#paymentcardpayinvoices)

### server
* [`GleSYSAPI.server.addISO()`](https://github.com/GleSYS/API/wiki/functions_server#serveraddiso)
* [`GleSYSAPI.server.allowedArguments()`](https://github.com/GleSYS/API/wiki/functions_server#serverallowedarguments)
* [`GleSYSAPI.server.backup()`](https://github.com/GleSYS/API/wiki/functions_server#serverbackup)
* [`GleSYSAPI.server.clone()`](https://github.com/GleSYS/API/wiki/functions_server#serverclone)
* [`GleSYSAPI.server.console()`](https://github.com/GleSYS/API/wiki/functions_server#serverconsole)
* [`GleSYSAPI.server.costs()`](https://github.com/GleSYS/API/wiki/functions_server#servercosts)
* [`GleSYSAPI.server.create()`](https://github.com/GleSYS/API/wiki/functions_server#servercreate)
* [`GleSYSAPI.server.destroy()`](https://github.com/GleSYS/API/wiki/functions_server#serverdestroy)
* [`GleSYSAPI.server.details()`](https://github.com/GleSYS/API/wiki/functions_server#serverdetails)
* [`GleSYSAPI.server.edit()`](https://github.com/GleSYS/API/wiki/functions_server#serveredit)
* [`GleSYSAPI.server.limits()`](https://github.com/GleSYS/API/wiki/functions_server#serverlimits)
* [`GleSYSAPI.server.list()`](https://github.com/GleSYS/API/wiki/functions_server#serverlist)
* [`GleSYSAPI.server.listISO()`](https://github.com/GleSYS/API/wiki/functions_server#serverlistiso)
* [`GleSYSAPI.server.mountISO()`](https://github.com/GleSYS/API/wiki/functions_server#servermountiso)
* [`GleSYSAPI.server.reboot()`](https://github.com/GleSYS/API/wiki/functions_server#serverreboot)
* [`GleSYSAPI.server.resetLimit()`](https://github.com/GleSYS/API/wiki/functions_server#serverresetlimit)
* [`GleSYSAPI.server.resetPassword()`](https://github.com/GleSYS/API/wiki/functions_server#serverresetpassword)
* [`GleSYSAPI.server.resourceUsage()`](https://github.com/GleSYS/API/wiki/functions_server#serverresourceusage)
* [`GleSYSAPI.server.start()`](https://github.com/GleSYS/API/wiki/functions_server#serverstart)
* [`GleSYSAPI.server.status()`](https://github.com/GleSYS/API/wiki/functions_server#serverstatus)
* [`GleSYSAPI.server.stop()`](https://github.com/GleSYS/API/wiki/functions_server#serverstop)
* [`GleSYSAPI.server.templates()`](https://github.com/GleSYS/API/wiki/functions_server#servertemplates)

### sshKey
* [`GleSYSAPI.sshKey.add()`](https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeyadd)
* [`GleSYSAPI.sshKey.list()`](https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeylist)
* [`GleSYSAPI.sshKey.remove()`](https://github.com/GleSYS/API/wiki/functions_sshkey#sshkeyremove)

### transaction
* [`GleSYSAPI.transaction.acknowledge()`](https://github.com/GleSYS/API/wiki/functions_transaction#transactionacknowledge)
* [`GleSYSAPI.transaction.cancel()`](https://github.com/GleSYS/API/wiki/functions_transaction#transactioncancel)
* [`GleSYSAPI.transaction.list()`](https://github.com/GleSYS/API/wiki/functions_transaction#transactionlist)
* [`GleSYSAPI.transaction.start()`](https://github.com/GleSYS/API/wiki/functions_transaction#transactionstart)

### user
* [`GleSYSAPI.user.changePassword()`](https://github.com/GleSYS/API/wiki/functions_user#userchangepassword)
* [`GleSYSAPI.user.details()`](https://github.com/GleSYS/API/wiki/functions_user#userdetails)
* [`GleSYSAPI.user.disableTwoFactor()`](https://github.com/GleSYS/API/wiki/functions_user#userdisabletwofactor)
* [`GleSYSAPI.user.edit()`](https://github.com/GleSYS/API/wiki/functions_user#useredit)
* [`GleSYSAPI.user.enableTwoFactor()`](https://github.com/GleSYS/API/wiki/functions_user#userenabletwofactor)
* [`GleSYSAPI.user.login()`](https://github.com/GleSYS/API/wiki/functions_user#userlogin)
* [`GleSYSAPI.user.logout()`](https://github.com/GleSYS/API/wiki/functions_user#userlogout)

### vpn
* [`GleSYSAPI.vpn.createUser()`](https://github.com/GleSYS/API/wiki/functions_vpn#vpncreateuser)
* [`GleSYSAPI.vpn.deleteUser()`](https://github.com/GleSYS/API/wiki/functions_vpn#vpndeleteuser)
* [`GleSYSAPI.vpn.editUser()`](https://github.com/GleSYS/API/wiki/functions_vpn#vpnedituser)
* [`GleSYSAPI.vpn.listUsers()`](https://github.com/GleSYS/API/wiki/functions_vpn#vpnlistusers)

For more information about the GleSYS API, available arguments etc., please see the [GleSYS API documentation](https://github.com/GleSYS/API/wiki/Full-API-Documentation).
