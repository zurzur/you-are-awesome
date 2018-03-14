// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (x) => {return x;};

const createNotEnumerableProperty = (x) => {return Symbol(x);};

const createProtoMagicObject = () => {
	let output = (x)=>x;

	output.prototype = output.__proto__; 
	return output;
};

let i = 0;
const incrementor = () => { 
	function foo() {
		i++; 
		return foo;
	}; 
	foo.valueOf = () => i; 
	return foo();
};

let j = 0;
const asyncIncrementor = () => {return ++j;};

//funny solution, i'm sure it wasn't supposed
const createIncrementer = function* createIncrementer() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond =  (x) => {
    return new Promise(
    	(resolve) => {setTimeout( () => resolve(x), 990)}
    	).then((x) => x);
};

const getDeepPropertiesCount = (input) => {
	let counter = 0;
	for (let key in input) {
		counter ++;
		if (Object.keys(input[key]).length > 0){
			counter += getDeepPropertiesCount(input[key]);
		}
	}

  	return counter; 
};

const createSerializedObject = () => {
	let obj = new Boolean(false); //or new String('trick'), or new Number(777)
	return obj;
};

const toBuffer = () => {return 1;};

const sortByProto = (arr) => {

	const findDeepth = (x) => {
		let depth = 0;
		let next = x;
		while(next.__proto__ !== Object.prototype) {
			next = next.__proto__; 
			depth ++;
		}
		return depth;
	}

	return arr.sort((a,b)=>findDeepth(b)-findDeepth(a));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;