webpackJsonp([1], {
    "8K0J": function (t, e) {
    }, NHnr: function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n = a("7+uW"), o = a("zL8q"), l = a.n(o), i = (a("tvR6"), {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {attrs: {id: "app"}}, [a("el-menu", {
                    staticClass: "el-menu-demo",
                    attrs: {"default-active": t.activeIndex, mode: "horizontal"},
                    on: {select: t.handleSelect}
                }, [a("el-menu-item", {attrs: {index: "1"}}, [t._v("添加学生")]), t._v(" "), a("el-menu-item", {attrs: {index: "5"}}, [t._v("添加学生成绩")]), t._v(" "), a("el-menu-item", {attrs: {index: "2"}}, [t._v("展示所有学生的基本信息")]), t._v(" "), a("el-menu-item", {attrs: {index: "3"}}, [t._v("查看学生的个人成绩")]), t._v(" "), a("el-menu-item", {attrs: {index: "4"}}, [t._v("查看课程的所有学生成绩")])], 1), t._v(" "), a("router-view")], 1)
            }, staticRenderFns: []
        }), r = a("VU/8")({
            name: "App", data: function () {
                return {activeIndex: "1", activeIndex2: "1"}
            }, methods: {
                handleSelect: function (t) {
                    1 == t ? this.$router.push({path: "/HelloWorld"}) : 2 == t ? this.$router.push({path: "/showall"}) : 3 == t ? this.$router.push({path: "/showGrade"}) : 4 == t ? this.$router.push({path: "/showCourse"}) : 5 == t && this.$router.push({path: "/addGrade"})
                }
            }
        }, i, !1, null, null, null).exports, s = a("/ocq"), d = {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", [a("h3", [t._v("添加学生")]), t._v(" "), a("el-form", {
                    ref: "form",
                    attrs: {model: t.form, "label-width": "80px"}
                }, [a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "学号"}
                }, [a("el-input", {
                    model: {
                        value: t.form.id, callback: function (e) {
                            t.$set(t.form, "id", e)
                        }, expression: "form.id"
                    }
                })], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "姓名"}
                }, [a("el-input", {
                    model: {
                        value: t.form.name, callback: function (e) {
                            t.$set(t.form, "name", e)
                        }, expression: "form.name"
                    }
                })], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "年龄"}
                }, [a("el-input", {
                    model: {
                        value: t.form.age, callback: function (e) {
                            t.$set(t.form, "age", e)
                        }, expression: "form.age"
                    }
                })], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "住址"}
                }, [a("el-input", {
                    model: {
                        value: t.form.address, callback: function (e) {
                            t.$set(t.form, "address", e)
                        }, expression: "form.address"
                    }
                })], 1), t._v(" "), a("el-form-item", [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: t.onSubmit1}
                }, [t._v("立即添加")]), t._v(" "), a("el-button", [t._v("取消")])], 1)], 1)], 1)
            }, staticRenderFns: []
        }, u = a("VU/8")({
            name: "HelloWorld", data: function () {
                return {form: {id: "", name: "", age: "", address: ""}}
            }, methods: {
                onSubmit1: function () {
                    var t = this;
                    this.$http.post("http://localhost:8989/student/add", {
                        id: t.form.id,
                        name: t.form.name,
                        age: t.form.age,
                        address: t.form.address
                    }).then(function (e) {
                        var a = this;
                        1 == e.data ? (t.form = "", t.$alert("添加成功", "标题名称", {
                            confirmButtonText: "确定",
                            callback: function (t) {
                                a.$message({type: "info", message: "action: " + t})
                            }
                        })) : (t.form = "", t.$alert("添加失败", "标题名称", {
                            confirmButtonText: "确定", callback: function (t) {
                                a.$message({type: "info", message: "action: " + t})
                            }
                        }))
                    })
                }
            }
        }, d, !1, null, null, null).exports, m = {
            render: function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", [e("h3", [this._v("展示所有的学生信息")]), this._v(" "), e("el-table", {
                    staticStyle: {width: "100%"},
                    attrs: {data: this.tableData}
                }, [e("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "学生编号",
                        width: "180"
                    }
                }), this._v(" "), e("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "学生姓名",
                        width: "180"
                    }
                }), this._v(" "), e("el-table-column", {
                    attrs: {
                        prop: "age",
                        label: "学生年龄",
                        width: "180"
                    }
                }), this._v(" "), e("el-table-column", {
                    attrs: {
                        prop: "address",
                        label: "家庭地址",
                        width: "300"
                    }
                })], 1)], 1)
            }, staticRenderFns: []
        };
        var c = a("VU/8")({
            data: function () {
                return {
                    tableData: [{id: "", name: "", age: "", address: ""}, {
                        id: "",
                        name: "",
                        age: "",
                        address: ""
                    }, {id: "", name: "", age: "", address: ""}, {id: "", name: "", age: "", address: ""}]
                }
            }, mounted: function () {
                var t = this;
                this.$http.get("http://localhost:8989/student/findAll").then(function (e) {
                    t.tableData = e.data
                })
            }
        }, m, !1, function (t) {
            a("iafF")
        }, null, null).exports, h = {
            data: function () {
                return {
                    showall: !1,
                    options: [{id: "", name: ""}, {id: "", name: ""}, {id: "", name: ""}, {id: "", name: ""}, {
                        id: "",
                        name: ""
                    }],
                    tableData: [{name: "", pingshi: "", qizhong: "", shixi: "", qimo: "", zongping: ""}],
                    id: "",
                    show: !1
                }
            }, methods: {
                onSubmit2: function () {
                    console.log(this.id), this.show = !0, this.showall = !0;
                    var t = this;
                    t.$http.get("http://localhost:8989/student/findCourse?id=" + t.id).then(function (e) {
                        t.tableData = e.data
                    })
                }, shengxu: function () {
                    this.tableData.sort(function (t, e) {
                        return e.zongping - t.zongping
                    })
                }, jiangxu: function () {
                    this.tableData.sort(function (t, e) {
                        return t.zongping - e.zongping
                    })
                }
            }, mounted: function () {
                var t = this;
                t.$http.get("http://localhost:8989/student/findAll").then(function (e) {
                    t.options = e.data
                })
            }
        }, p = {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", [a("h3", [t._v("列出某个学生的所有成绩")]), t._v(" "), a("el-select", {
                    attrs: {placeholder: "请选择"},
                    model: {
                        value: t.id, callback: function (e) {
                            t.id = e
                        }, expression: "id"
                    }
                }, t._l(t.options, function (t) {
                    return a("el-option", {key: t.id, attrs: {label: t.name, value: t.id}})
                }), 1), t._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: t.onSubmit2}
                }, [t._v("确认")]), t._v(" "), a("el-row", [a("el-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], attrs: {type: "warning"}, on: {
                        click: function (e) {
                            return t.shengxu()
                        }
                    }
                }, [t._v("从高到低")]), t._v(" "), a("el-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], attrs: {type: "danger"}, on: {
                        click: function (e) {
                            return t.jiangxu()
                        }
                    }
                }, [t._v("从低到高")])], 1), t._v(" "), a("el-table", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }], staticStyle: {width: "100%"}, attrs: {data: t.tableData}
                }, [a("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "科目",
                        width: "180"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "pingshi",
                        label: "平时成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "qizhong",
                        label: "期中成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "shixi",
                        label: "实习成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "qimo",
                        label: "期末成绩"
                    }
                }), t._v(" "), a("el-table-column", {attrs: {prop: "zongping", label: "总评成绩"}})], 1)], 1)
            }, staticRenderFns: []
        };
        var v = a("VU/8")(h, p, !1, function (t) {
            a("qI3p")
        }, null, null).exports, f = {
            data: function () {
                return {
                    id: "",
                    idd: "",
                    number: "",
                    value: !0,
                    showall: !1,
                    show: !1,
                    ans: 0,
                    pingjun: 0,
                    options: [{id: "1", name: "数分"}, {id: "2", name: "高代"}, {id: "3", name: "解析几何"}, {
                        id: "4",
                        name: "大学英语"
                    }, {id: "5", name: "大学物理"}, {id: "6", name: "计算机基础"}, {id: "7", name: "大学体育"}, {
                        id: "8",
                        name: "数据库实训"
                    }],
                    optionss: [{idd: "1", name: "60分以下"}, {idd: "2", name: "60-70分之间"}, {
                        idd: "3",
                        name: "70-80分之间"
                    }, {idd: "4", name: "80-90分之间"}, {idd: "5", name: "90-100分之间"}],
                    tableData: [{name: "", pingshi: "", qizhong: "", shixi: "", qimo: "", zongping: ""}]
                }
            }, methods: {
                onSubmit2: function () {
                    console.log(this.id), this.showall = !0;
                    var t = this;
                    t.$http.get("http://localhost:8989/course/getGradeByCourseId?id=" + t.id).then(function (e) {
                        t.tableData = e.data;
                        for (var a = e.data.length, n = 0, o = 0; o < a; o++) n += Number(e.data[o].zongping);
                        t.pingjun = n / a, t.ans = n
                    })
                }, onSubmit3: function () {
                    console.log(this.idd);
                    var t = this;
                    t.$http.get("http://localhost:8989/course/getGradeByCourseByFenShuDuan?id=" + t.id + "&idd=" + t.idd).then(function (e) {
                        t.tableData = e.data;
                        for (var a = e.data.length, n = 0, o = 0; o < a; o++) n += Number(e.data[o].zongping);
                        t.ans = n, t.pingjun = n / a
                    }), this.show = !0
                }, shengxu: function () {
                    this.tableData.sort(function (t, e) {
                        return e.zongping - t.zongping
                    })
                }, jiangxu: function () {
                    this.tableData.sort(function (t, e) {
                        return t.zongping - e.zongping
                    })
                }
            }
        }, b = {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", [a("h3", [t._v("查看课程的所有学生成绩")]), t._v(" "), a("el-select", {
                    attrs: {placeholder: "请选择课程"},
                    model: {
                        value: t.id, callback: function (e) {
                            t.id = e
                        }, expression: "id"
                    }
                }, t._l(t.options, function (t) {
                    return a("el-option", {key: t.id, attrs: {label: t.name, value: t.id}})
                }), 1), t._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: t.onSubmit2}
                }, [t._v("确认")]), t._v(" "), a("br"), a("br"), t._v(" "), a("el-row", [a("el-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], attrs: {type: "warning"}, on: {
                        click: function (e) {
                            return t.shengxu()
                        }
                    }
                }, [t._v("从高到低")]), t._v(" "), a("el-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], attrs: {type: "danger"}, on: {
                        click: function (e) {
                            return t.jiangxu()
                        }
                    }
                }, [t._v("从低到高")])], 1), t._v(" "), a("br"), t._v(" "), a("el-table", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], staticStyle: {width: "100%"}, attrs: {data: t.tableData}
                }, [a("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "科目",
                        width: "180"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "pingshi",
                        label: "平时成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "qizhong",
                        label: "期中成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "shixi",
                        label: "实习成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "qimo",
                        label: "期末成绩"
                    }
                }), t._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "zongping",
                        label: "总评成绩"
                    }
                })], 1), t._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }]
                }, [a("el-tag", [t._v(" 所有学生的总评分为")]), a("el-tag", {attrs: {type: "danger"}}, [t._v(t._s(t.ans))]), t._v(" "), a("el-tag", [t._v(" 所有学生的平均总评分为")]), a("el-tag", {attrs: {type: "danger"}}, [t._v(t._s(t.pingjun))])], 1), t._v(" "), a("br"), t._v(" "), a("el-select", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], attrs: {placeholder: "请选择分数段"}, model: {
                        value: t.idd, callback: function (e) {
                            t.idd = e
                        }, expression: "idd"
                    }
                }, t._l(t.optionss, function (t) {
                    return a("el-option", {key: t.idd, attrs: {label: t.name, value: t.idd}})
                }), 1), t._v(" "), a("el-button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showall,
                        expression: "showall"
                    }], attrs: {type: "primary"}, on: {click: t.onSubmit3}
                }, [t._v("确认")]), t._v(" "), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                }, [a("el-tag", [t._v("该分数段的人数")]), t._v(" "), a("el-tag", {attrs: {type: "danger"}}, [t._v(t._s(t.tableData.length))]), t._v(" "), a("el-tag", [t._v("人")])], 1)], 1)
            }, staticRenderFns: []
        };
        var g = a("VU/8")(f, b, !1, function (t) {
            a("j6eR")
        }, null, null).exports, _ = {
            name: "addGrade", data: function () {
                return {form: {id: "", region: "", pingshi: "", qizhong: "", shixi: "", qimo: ""}}
            }, methods: {
                onSubmit: function () {
                    var t, e = this;
                    t = (Number(e.form.pingshi) + Number(e.form.qizhong) + Number(e.form.shixi) + Number(e.form.qimo)) / 4, e.$http.post("http://localhost:8989/grade/add", {
                        sid: e.form.id,
                        cid: e.form.region,
                        pingshi: e.form.pingshi,
                        qizhong: e.form.qizhong,
                        shixi: e.form.shixi,
                        qimo: e.form.qimo,
                        zongping: t
                    }).then(function (t) {
                        var a = this;
                        1 == t.data ? (e.form = "", e.$alert("添加成功", "标题名称", {
                            confirmButtonText: "确定",
                            callback: function (t) {
                                a.$message({type: "info", message: "action: " + t})
                            }
                        })) : (e.form = "", e.$alert("添加失败", "标题名称", {
                            confirmButtonText: "确定", callback: function (t) {
                                a.$message({type: "info", message: "action: " + t})
                            }
                        }))
                    })
                }
            }
        }, w = {
            render: function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", [a("h3", [t._v("添加学生成绩")]), t._v(" "), a("el-form", {
                    ref: "form",
                    attrs: {model: t.form, "label-width": "80px"}
                }, [a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "学号"}
                }, [a("el-input", {
                    model: {
                        value: t.form.id, callback: function (e) {
                            t.$set(t.form, "id", e)
                        }, expression: "form.id"
                    }
                })], 1), t._v(" "), a("el-form-item", {attrs: {label: "选择课程"}}, [a("el-select", {
                    attrs: {placeholder: "请选择添加的课程"},
                    model: {
                        value: t.form.region, callback: function (e) {
                            t.$set(t.form, "region", e)
                        }, expression: "form.region"
                    }
                }, [a("el-option", {attrs: {label: "高代", value: "2"}}), t._v(" "), a("el-option", {
                    attrs: {
                        label: "数分",
                        value: "1"
                    }
                }), t._v(" "), a("el-option", {
                    attrs: {
                        label: "解析几何",
                        value: "3"
                    }
                }), t._v(" "), a("el-option", {
                    attrs: {
                        label: "大学英语",
                        value: "4"
                    }
                }), t._v(" "), a("el-option", {
                    attrs: {
                        label: "大学物理",
                        value: "5"
                    }
                }), t._v(" "), a("el-option", {
                    attrs: {
                        label: "计算机基础",
                        value: "6"
                    }
                }), t._v(" "), a("el-option", {
                    attrs: {
                        label: "大学体育",
                        value: "7"
                    }
                }), t._v(" "), a("el-option", {
                    attrs: {
                        label: "数据库实训",
                        value: "8"
                    }
                })], 1)], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "平时成绩"}
                }, [a("el-input", {
                    model: {
                        value: t.form.pingshi, callback: function (e) {
                            t.$set(t.form, "pingshi", e)
                        }, expression: "form.pingshi"
                    }
                })], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "期中成绩"}
                }, [a("el-input", {
                    model: {
                        value: t.form.qizhong, callback: function (e) {
                            t.$set(t.form, "qizhong", e)
                        }, expression: "form.qizhong"
                    }
                })], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "实习成绩"}
                }, [a("el-input", {
                    model: {
                        value: t.form.shixi, callback: function (e) {
                            t.$set(t.form, "shixi", e)
                        }, expression: "form.shixi"
                    }
                })], 1), t._v(" "), a("el-form-item", {
                    staticStyle: {width: "300px"},
                    attrs: {label: "期末成绩"}
                }, [a("el-input", {
                    model: {
                        value: t.form.qimo, callback: function (e) {
                            t.$set(t.form, "qimo", e)
                        }, expression: "form.qimo"
                    }
                })], 1), t._v(" "), a("el-form-item", [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: t.onSubmit}
                }, [t._v("立即添加")]), t._v(" "), a("el-button", [t._v("取消")])], 1)], 1)], 1)
            }, staticRenderFns: []
        };
        var x = a("VU/8")(_, w, !1, function (t) {
            a("8K0J")
        }, null, null).exports, y = a("mtWM"), $ = a.n(y);
        n.default.prototype.$http = $.a, n.default.use(s.a);
        var k = new s.a({
            routes: [{path: "/", redirect: "/HelloWorld"}, {
                path: "/HelloWorld",
                name: "HelloWorld",
                component: u
            }, {path: "/showall", name: "showall", component: c}, {
                path: "/showGrade",
                name: "showGrade",
                component: v
            }, {path: "/showCourse", name: "showCourse", component: g}, {
                path: "/addGrade",
                name: "addGrade",
                component: x
            }]
        });
        n.default.config.productionTip = !1, n.default.use(l.a), new n.default({
            el: "#app",
            router: k,
            components: {App: r},
            template: "<App/>"
        })
    }, iafF: function (t, e) {
    }, j6eR: function (t, e) {
    }, qI3p: function (t, e) {
    }, tvR6: function (t, e) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.a65096828dba3a1dc2c2.js.map