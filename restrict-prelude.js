function detailedtypeof(v) {
    var t = typeof v;
    return t !== "object" ? t :
        v === null ? "null" :
        Array.isArray(v) ? "object (Array)" :
        v instanceof Number ? "object (Number)" :
        v instanceof String ? "object (String)" :
        v instanceof Boolean ? "object (Boolean)" :
        v instanceof Date ? "object (Date)" :
        "object";
}
function __throw_typeerror(from, var_args) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    var typeofs = args.map(detailedtypeof).join(" and ");
    var e = new Error("restrict mode ".concat(from, " called with ", typeofs));
    print(e.stack);
    throw e;
}
function __assert_numbers(x, y, opname) {
    var xtype = typeof x;
    var ytype = typeof y;
    if (xtype === "number" && xtype === ytype) {
        return; // ok
    }
    __throw_typeerror(opname, x, y);
}

function __eq(x, y) {
    var eq_strict = (x === y);
    var eq_loose = /*loose*/(x == y);
    if (eq_strict === eq_loose) {
        return eq_strict;
    }
    __throw_typeerror("__eq", x, y);
}
function __ne(x, y) {
    var ne_strict = (x !== y);
    var ne_loose = /*loose*/(x != y);
    if (ne_strict === ne_loose) {
        return ne_strict;
    }
    __throw_typeerror("__ne", x, y);
}
function __lt(x, y) {
    var xtype = typeof x;
    var ytype = typeof y;

    if (xtype === ytype) {
        if ((xtype === "string" || xtype === "number")) {
            return /*loose*/(x < y);
        }
    }
    __throw_typeerror("__lt", x, y);
}
function __gt(x, y) {
    var xtype = typeof x;
    var ytype = typeof y;

    if (xtype === ytype) {
        if ((xtype === "string" || xtype === "number")) {
            return /*loose*/(x > y);
        }
    }
    __throw_typeerror("__gt", x, y);
}
function __le(x, y) {
    var xtype = typeof x;
    var ytype = typeof y;

    if (xtype === ytype) {
        if ((xtype === "string" || xtype === "number")) {
            return /*loose*/(x <= y);
        }
    }
    __throw_typeerror("__le", x, y);
}
function __ge(x, y) {
    var xtype = typeof x;
    var ytype = typeof y;

    if (xtype === ytype) {
        if ((xtype === "string" || xtype === "number")) {
            return /*loose*/(x >= y);
        }
    }
    __throw_typeerror("__ge", x, y);
}

function __neg(v) {
    var vtype = typeof v;
    if (vtype === "number") {
        return /*loose*/(-v);
    }
    __throw_typeerror("__neg", v);
}

function __add(x, y) {
    var xtype = typeof x;
    var ytype = typeof y;
    if (xtype === ytype) {
        if (xtype === "string") {
            return String.prototype.concat.call(x, y);
        }
        if (xtype === "number") {
            return /*loose*/(x + y);
        }
    }
    __throw_typeerror("__add", x, y);
}
function __sub(x, y) {
    __assert_numbers(x, y, "__sub");
    return /*loose*/(x - y);
}
function __mul(x, y) {
    __assert_numbers(x, y, "__mul");
    return /*loose*/(x * y);
}
function __div(x, y) {
    __assert_numbers(x, y, "__div");
    return /*loose*/(x / y);
}
function __mod(x, y) {
    __assert_numbers(x, y, "__mod");
    return /*loose*/(x % y);
}
function __bitand(x, y) {
    __assert_numbers(x, y, "__bitand");
    return /*loose*/(x & y);
}
function __bitor(x, y) {
    __assert_numbers(x, y, "__bitor");
    return /*loose*/(x | y);
}
function __bitxor(x, y) {
    __assert_numbers(x, y, "__bitxor");
    return /*loose*/(x ^ y);
}
function __bitasl(x, y) {
    __assert_numbers(x, y, "__bitasl");
    return /*loose*/(x << y);
}
function __bitasr(x, y) {
    __assert_numbers(x, y, "__bitasr");
    return /*loose*/(x >> y);
}
function __bitlsr(x, y) {
    __assert_numbers(x, y, "__bitlsr");
    return /*loose*/(x >>> y);
}
function __bitnot(v) {
    var vtype = typeof v;
    if (vtype === "number") {
        return /*loose*/(~v);
    }
    __throw_typeerror("__bitnot", v);
}
function __inc(v) {
    var vtype = typeof v;
    if (vtype === "number") {
        return /*loose*/(v + 1);
    }
    __throw_typeerror("__inc", v);
}
function __dec(v) {
    var vtype = typeof v;
    if (vtype === "number") {
        return /*loose*/(v - 1);
    }
    __throw_typeerror("__dec", v);
}
function __arg0(x) {
    return x;
}
function __op_set(fn, base, name, v) {
    return base[name] = fn(base[name], v);
}
function __prefinc(base, name) {
    return base[name] = __inc(base[name]);
}
function __postinc(base, name) {
    var tmp = base[name];
    base[name] = __inc(tmp);
    return tmp;
}
function __prefdec(base, name) {
    return base[name] = __dec(base[name]);
}
function __postdec(base, name) {
    var tmp = base[name];
    base[name] = __dec(tmp);
    return tmp;
}
