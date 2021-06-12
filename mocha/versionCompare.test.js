
const compare = require("./versionCompare")
const assert = require("assert")

describe("版本比较",function(){
    before(function(){});
    // it 定义一个测试用例
    it ("1.10 版本 大于 1.10.5吗？ ",function(){
        assert.equal(compare('1.10','1.10.5'))
    }),
    after(function(){})
})
