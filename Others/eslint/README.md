# eslint

## eslint错误级别
````````````````````
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}

````````````````````
"semi" 和 "quotes" 是 ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一：

* "off" or 0 - 关闭规则
* "warn" or 1 - 将规则视为一个警告（不会影响退出码）
* "error" or 2 - 将规则视为一个错误 (退出码为1)

## eslint 配置项
````````````````````
{
	// 以当前目录为根目录，不再向上查找 .eslintrc.js
	"root": true,
	// 使用哪个解析器
	"parser": "babel-eslint",
	// 为了让eslint在处理非es5特性的时候能正常工作
	"parserOptions": {
        "sourceType": 'module',
        "ecmaFeatures": {
            "jsx": true
        }
    },
    // 指定脚本的运行环境, 预定义某个环境中所包含的全局变量
    "env": {
    	"browser": true,
    	"node": true,
    	...
    },
    //  脚本在执行期间访问的额外的全局变量: true-允许被重写, false-不允许被重写
    "globals": {
    	"var1": true,
    	"var2: false
    },
    // 使用第三方插件
    "plugins": [
    	"html",
    	"vue"
    ],
    // 从基础配置中继承已启用的规则
    "extends": "eslint:recommended",
    // 同一个目录下的文件需要有不同的配置
    "overrides": [
    	{
    		"files": [],
	    	"excludedFiles": [],
	    	"rules: {}
    	}
    ]
}
````````````````````
.eslintignore：忽略检查某些文件