'use strict'

class Queue{

	constructor(){
		this._dataStore = {};
		this._oldestIndex = 1
		this._newestIndex = 1
	}
	enqueue(elem){
		this._dataStore[++this._newestIndex] = elem;
		//this._newestIndex++;
	}
	size(){
		return this._newestIndex-this._oldestIndex;
	}
	dequeue(){
		let oldestIndex = this._oldestIndex;
		let newestIndex = this._newestIndex;		
		if(oldestIndex !== newestIndex) {
			let deletedData = this._dataStore[oldestIndex];
			delete this._dataStore[oldestIndex];
			this._oldestIndex++;
			return deletedData;
		}

	}
	peek(){
		return this._dataStore[this._oldestIndex];
	}
	back(){
		return this._dataStore[this._newestIndex];	
	}
	isEmpty(){
			if(this._newestIndex-this._oldestIndex > 0){
				return false;
			}
			return true;
	}
	get(){
		return this._dataStore;
	}

}

module.exports = Queue