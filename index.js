
const Mtn = {
	utils: {
	  createNamespace: function(namespace) {},
	  isNullOrUndefined: function(o) {}
	},
	ns: function(namespace) {
	  var me = window;
	  var arrNs = namespace.split(".");
	  var lastObj = me;
	  for (var i = 0; i < arrNs.length; i++) {
		var ns = arrNs[i];
		if (typeof lastObj[ns] === "undefined") lastObj[ns] = {};
		lastObj = lastObj[ns];
	  }
	},
	getUrl: function() {
	  return Mtn.SERVER_URL;
	},
	isNullOrUndefined: function() {
	  if (typeof o === "undefined") return true;
	  if (o === null) return true;
	  return false;
	},
	isEmpty: function(o) {
	  return typeof o !== "string" || o.length === 0;
	},
	id: function(el, matchDate) {
	  if (Mtn.isNullOrUndefined(el)) el = "id";
	  var replaceMatch = "xxxxxxxx-xxxx-4xxx-yxxx-";
	  if (matchDate) {
		var dateVal = new Date().getTime() + "";
		replaceMatch += dateVal.slice(dateVal.length - 12);
	  } else {
		replaceMatch += "xxxxxxxxxxxx";
	  }
	  var id = replaceMatch.replace(/[xy]/g, function(c) {
		var r = (Math.random() * 16) | 0,
		  v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	  });
	  var lel = Mtn.isEmpty(el) ? "" : el + "-";
	  lel += id;
	  if (Mtn.isNullOrUndefined(document.getElementById(lel))) return lel;
	  else return Mtn.utils.createId(el);
	},  
	getType: function(obj) {
	  var class2type = {};
	  var toString = class2type.toString;
	  if (obj == null) {
		return obj + "";
	  }
	  // Support: Android < 4.0, iOS < 6 (functionish RegExp)
	  return typeof obj === "object" || typeof obj === "function"
		? class2type[toString.call(obj)] || "object"
		: typeof obj;
	},
	isFunction: function(obj) {
	  return Mtn.getType(obj) === "function";
	},
	reset: function(obj) {
	  for (var name in obj) {
		if (Mtn.isFunction(obj[name])) continue;
		this[name] = "";
	  }
	},
	trim: function(text) {
	  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	  return text == null ? "" : (text + "").replace(rtrim, "");
	},
	removeAt: function(array, pos) {
	  if (pos < 0 || pos >= array.length) return array;
	  var nArr = [];
	  for (var i = pos + 1; i < array.length; i++) {
		nArr.push(array[i]);
	  }
	  return nArr;
	},
	lambda: function(query) {
	  if(process.)
	  if (Mtn.isEmpty(query)) return new Function("return true;");
	  if (query.indexOf("=>") < 0) return new Function(query);
  
	  var arr = query.split("=>");
	  var qualifier = Mtn.trim(arr[0]);
	  var body = Mtn.removeAt(arr, 0);
	  body = body.join("=>");
	  var code = "return " + body + ";";
	  var fn = new Function(qualifier, code);
	  return fn;
	},
	whereMtn: function(array, query) {
	  var fn = this.lambda(query);
	  var nArr = [];
	  for (var i = 0; i < array.length; i++) {
		if (fn(array[i])) {
		  nArr.push(array[i]);
		}
	  }
	  return nArr;
	},
	firstMtn: function(array, query) {
	  var fn = this.lambda(query);
	  for (var i = 0; i < array.length; i++) {
		if (fn(array[i])) {
		  return array[i];
		}
	  }
	  return null;
	},
	clearAllTimeouts: function() {
	  // only to get the highest timeout id
	  var latestTimeoutId = setTimeout(";");
	  for (var i = 0; i < latestTimeoutId; i++) {
		clearTimeout(i);
	  }
	},
	clone: function(baseObj, o) {
	  function c(o) {
		for (var i in baseObj) {
		  this[i] = baseObj[i];
		}
		for (var j in o) {
		  this[j] = o[j];
		}
	  }
	  return new c(o);
	}
  };

module.exports = Mtn;
// TODO: Remove this for the next major release
module.exports.default = Mtn;