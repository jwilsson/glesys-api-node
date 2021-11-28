# Changelog
## 6.3.0 (2021-11-28)
* Added new `GleSYSAPI.Domain.export()` method.
* Added new `GleSYSAPI.Server.reset()` method.
* Tests are run on Node 17.
* Updated dev dependencies.

## 6.2.0 (2021-07-08)
* Added new `GleSYSAPI.Project.edit()` method.

## 6.1.0 (2021-05-08)
* Renamed `LoadBalancer.addToBlacklist()` to `LoadBalancer.addToBlocklist()`.
* Renamed `LoadBalancer.removeFromBlacklist()` to `LoadBalancer.removeFromBlocklist()`.
* Tests are run on Node 16.

## 6.0.0 (2021-03-27)
* **Breaking** Dropped support for Node < 14.15.0.
* **Breaking** Complete rewrite to use ES Modules.
* **Breaking** Updated `got` to `11.x`.
* **Breaking** Removed `GleSYSAPI.server.addISO()` method no longer in GleSYS API.
* Removed unused `data` argument from `GleSYSAPI.project.delete()`.

## 5.3.0 (2021-02-12)
* Added `data` argument to `GleSYSAPI.Email.overview()`.

## 5.2.0 (2020-12-18)
* Added new `ObjectStorage` methods (thanks [@hejhansson](https://github.com/hejhansson)):
    * `GleSYSAPI.objectStorage.createCredential()`
    * `GleSYSAPI.objectStorage.createInstance()`
    * `GleSYSAPI.objectStorage.deleteCredential()`
    * `GleSYSAPI.objectStorage.deleteInstance()`
    * `GleSYSAPI.objectStorage.editInstance()`
    * `GleSYSAPI.objectStorage.estimatedCost()`
    * `GleSYSAPI.objectStorage.instanceDetails()`
    * `GleSYSAPI.objectStorage.listInstances()`
* Added new `Server` methods:
    * `GleSYSAPI.server.createFromBackup()`
    * `GleSYSAPI.server.listBackups()`
    * `GleSYSAPI.server.previewCloudConfig()`
* Refactored tests to use Jest.
* Updated dev dependencies.

## 5.1.0 (2020-02-10)
* Added new `GleSYSAPI.server.estimatedCost()` method.
* Updated dev dependencies.

## 5.0.1 (2019-12-02)
* Fixed lint errors.

## 5.0.0 (2019-12-02)
* Dropped support for Node < 10.
* Updated `got` to `10.x`.
* Removed the following methods removed from the GleSYS API:
    * `GleSYSAPI.account.changePassword()`
    * `GleSYSAPI.changelog.api()`
    * `GleSYSAPI.changelog.controlPanel()`
    * `GleSYSAPI.contactPerson.add()`
    * `GleSYSAPI.contactPerson.delete()`
    * `GleSYSAPI.contactPerson.edit()`
    * `GleSYSAPI.contactPerson.list()`
    * `GleSYSAPI.customer.contactInfo()`
    * `GleSYSAPI.domain.allowedArguments()`
    * `GleSYSAPI.invoice.allowedArguments()`
    * `GleSYSAPI.invoice.paymentHistory()`
    * `GleSYSAPI.invoice.settings()`
    * `GleSYSAPI.liveChat.closeSession()`
    * `GleSYSAPI.liveChat.getMessages()`
    * `GleSYSAPI.liveChat.newSession()`
    * `GleSYSAPI.liveChat.postMessage()`
    * `GleSYSAPI.liveChat.sessionInfo()`
    * `GleSYSAPI.liveChat.status()`
    * `GleSYSAPI.paymentCard.edit()`

## 4.1.2 (2019-12-02)
* Restored `POST` from `GET` where applicable.

## 4.1.1 (2019-10-05)
* Fixed an small issue when merging request options.

## 4.1.0 (2019-10-03)
* Added new endpoint methods.
* Switched `POST` to `GET` where applicable.
* Updated inline doc links.

## 4.0.1 (2019-08-03)
* Replaced deprecated `url.resolve()` calls with `new URL()`.
* Tests are run on Node 12.
* Updated dev dependencies.

## 4.0.0 (2019-03-12)
* Support for Node < 8 has been dropped.
* Updated `got` to `9.x`.
* Tests are run on Node 10 and 11.
* Updated dev dependencies.

## 3.0.0 (2018-03-02)
* Support for Node < 6 has been dropped.
* Updated `got` to `8.x`.
* Tests are run on Node 9.
* Updated dev dependencies.
* Sped up Travis builds.

## 2.2.2 (2017-06-17)
* Increased test coverage.

## 2.2.1 (2017-06-17)
* Safer building of API URLs.
* Replaced `istanbul` with `nyc`
* Updated `got` to `7.x`.
* Updated dev dependencies.
* Tests are run on Node 8.

## 2.2.0 (2016-11-27)
* Supported Node versions are now specified in the `engines` field.
* Tests are run on Node 7.

## 2.1.1 (2016-09-27)
* `Buffer.from()` is now used when available.

## 2.1.0 (2016-05-21)
* The `npm` package now only includes the relevant files.

## 2.0.0 (2016-04-28)
* Support for Node < 4 has been dropped.
* Rewrote the whole library to ES2015.
* Replaced `invoice.payByCard()` with `paymentCard.payInvoices()`.
* Replaced JSHint and JSCS with ESLint.
* Tests are run on Node 6.

## 1.0.1 (2015-09-11)
* Fixed an issue in `sshKey.list()` where the correct HTTP method weren't used.

## 1.0.0 (2015-09-10)
* Initial release.
