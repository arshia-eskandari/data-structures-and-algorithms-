class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const hash = this._hash(key);
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);
        return this.data;
    }

    get(key) {
        const hash = this._hash(key);
        const dataAddressBucket = this.data[hash];
        const bucketLen = dataAddressBucket.length;
        // console.log(dataAddressBucket)
        if (bucketLen) {
            for (let i = 0; i < bucketLen; i++) {
                if (dataAddressBucket[i][0] === key)
                    return dataAddressBucket[i][1];
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
console.log(myHashTable.keys());
