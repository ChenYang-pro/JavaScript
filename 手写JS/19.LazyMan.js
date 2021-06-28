// function 类中， this.属性名 = function  给实例对象添加属性方法  类名.属性名 给类添加静态方法
// class 属性名=function() 给实例对象添加属性方法  static 属性名 给类添加静态方法
function LazyMan_(name) {
    let _this = this
    _this.name = name
    _this.tasks = []
    const task = () => {
        console.log(`Hi, This is ${_this.name}`)
        _this.next()
    }
    _this.tasks.push(task)
    setTimeout(() => {
        _this.next()
    }, 0);
    _this.next = function () {
        const task = _this.tasks.shift()
        task && task()
    }
    _this.sleep = function (time) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`)
                _this.next()
            }, time * 1000);
        }
        _this.tasks.push(task)
        return _this
    }
    _this.sleepFirst = function(time) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`)
                _this.next()
            }, time * 1000);
        }
        _this.tasks.unshift(task)
        return _this
    }
    _this.eat = function(name) {
        const task = () => {
            console.log(`Eat ${name}`)
            _this.next()
        }
        _this.tasks.push(task)
        return _this
    }
}

function LazyMan(name) {
    return new LazyMan_(name)
}

LazyMan("Hank")
LazyMan("Hank").eat("breakfast").sleep(2).eat("lunch").sleep(4).eat("dinner")


