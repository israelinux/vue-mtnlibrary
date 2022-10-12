declare const Mtn: {
    utils: {
        createNamespace: (namespace: any) => any;
        isNullOrUndefined: (o: any) => any;
    };
    ns: (namespace: any) => void;
    getUrl: () => any;
    isNullOrUndefined: (o: any) => boolean;
    isEmpty: (o: any) => boolean;
    id: (el: any, matchDate: any, sep: any) => any;
    getType: (obj: any) => any;
    isFunction: (obj: any) => any;
    reset: (obj: any) => void;
    trim: (text: any) => string;
    removeAt: (array: any, pos: any) => any;
    lambda: (query: any) => Function;
    whereMtn: (array: any, query: any) => any[];
    eachMtn: (array: any, query: any, fnCall: any) => any[];
    eachInverseMtn: (array: any, query: any, fnCall: any) => any[];
    firstMtn: (array: any, query: any) => any;
    lastMtn: (array: any, query: any) => any;
    anyMtn: (array: any, query: any) => boolean;
    clearAllTimeouts: () => void;
    clone: (baseObj: any, o: any) => any;
};


export = Mtn;
