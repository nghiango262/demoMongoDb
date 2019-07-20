var http = require('http');


//connect nodejs to mongo db
const assert = require('assert');
const MongoDao = require('./mongodao');

const url = 'mongodb://nghia:Nghia123456@ds064649.mlab.com:64649/testt';

const dbName = 'testt';

const collectionName = "users";

var doc = {"firstName":"User 10","lastName":"hdssd","username":"chunhan"};

var mongoDao;

const createColls = function(collectionN) {
	mongoDao.createCollection(collectionN, () => console.log('Tạo collection thành công!'));
}

const readFn = function() {
	mongoDao.readCollection(collectionName).toArray(function(err, docs) {
		console.log(docs.length + " documents available in collection "+ collectionName + " \n");
		console.log( docs);
		//insertFn();
	});
}

const insertFn = function() {
	//insert and then inserted record will be read
	mongoDao.insertDocument(collectionName, doc, () => console.log('Insert doc thành công!'));
}

const updateFn = function() {
	var updateDoc = {"$set": {"username": "adsun"}};
	mongoDao.updateDocument(collectionName, doc, updateDoc, () => console.log('Update doc thành công!'));
}

const deleteFn = function() {
	mongoDao.deleteDocument(collectionName, doc, () => console.log('Xóa doc thành công!'));
}

const endProgram = function() {
	process.exit(0);
}

async function main() {
	mongoDao = await new MongoDao(url, dbName);
	createColls("caiquan");
	//readFn();
}

main();