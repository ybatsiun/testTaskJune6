const EventEmitter = require('events');



let isDbLocked = false;

class DbLockNotifier extends EventEmitter { };
const dbLockNotifier = new DbLockNotifier();

exports.dbLockNotifier = dbLockNotifier;
exports.unlockDb = () => {
    isDbLocked = false;
    dbLockNotifier.emit('dbUnlocked');
}

exports.lockDb = () => {
    isDbLocked = true;
}
exports.isDbLocked = isDbLocked;