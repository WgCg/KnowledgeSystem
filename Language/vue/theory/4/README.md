# vue this指向问题

## 周期函数、计算属性的getter&setter中的this

``````````````````````
let vm = new Vue({
	data: {},
	created () {
		console.log(this)
	},
	mounted: function () {
		console.log(this)
	},
	computed: {
		a: function () {
			console.log(this)
		},
		b: {
			get: function () {
				console.log(this)
			}
		}
	}
})
``````````````````````
周期函数中的this都是指向组件实例的，计算属性将被混入到Vue实例中（因此用this.a,this.b可以取到值）,所有getter和setter的this上下文自动绑地绑定为Vue实例

## 箭头函数中的this

``````````````````````
let vm = new Vue({
	data: {},
	created: (_vm) => {
		console.log(this)
		console.log(_vm)
	},
	mounted: () => {
		console.log(this)
	},
	computed: {
		a: (vm) => {
			console.log(vm)
			console.log(this)
		},
		b: {
			get: (vm) => {
				console.log(vm)
				console.log(this)
			}
		}
	}
})
``````````````````````
箭头函数中的this绑定的是距离当前作用域最近的非箭头函数的父级作用域，因此：

1. 周期函数中的所有this指向的都是构造Vue实例时传入的对象
2. 计算属性会被混入到Vue实例中，因此箭头函数的getter&setter中的this的表现与周期函数一致
3. 计算属性中使用箭头函数，可以将其实例作为第一个参数来访问，因此上面代码中的vm输出的都是当前组件实例，但是周期函数无法这么做

## 周期函数、计算属性中的定义的funtion中的this

``````````````````````
let vm = new Vue({
	data: {},
	created () {
		function a () {
			console.log(this)
		}
		a()
	},
	mounted: () => {
		function b () {
			console.log(this)
		}
		b()
	},
	computed: {
		a: function () {
			function c () {
				console.log(this)
			}
			c()
		},
		b: {
			get: () => {
				function d () {
					console.log(this)
				}
				d()
			},
			set: function () {
				function e () {
					console.log(this)
				}
				e()
			}
		}
	}
})
``````````````````````

1. 以上所有输出的this均为undefined
2. 如果把方法a，c，e使用箭头函数定义成某个对象的属性，则其this指向的为当前组件实例
3. 如果把b，d使用箭头函数定义成某个对象的属性，则其this指向的为构造Vue实例时传入的对象
4. 在浏览器环境下，定义的全局函数中的this以及在其内部定义的函数中的this指向的是window，对象属性函数中的this指向的是当前对象，但在其属性函数内部定义的函数中的this指向的也是window
5. 上述第4项描述的内部函数换成箭头函数，根据箭头函数绑定的作用域去理解就行了


