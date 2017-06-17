# Changelog
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
