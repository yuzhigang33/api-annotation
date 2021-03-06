/*!
 * api-annotation: example/controllers/test.js
 * Authors  : fish <zhengxinlin@gmail.com> (https://github.com/fishbar)
 * Create   : 2015-11-23 18:16:42
 * CopyRight 2015 (c) Fish And Other Contributors
 */
/**
 * api描述信息可以写在这里
 * @api {get} /test
 * @name  GroupName.apiName
 * @desc
 *   这里也可以写描述信息， 最前面的描述信息会追加到这段后面
 *
 * @query
 *   user {string} 用户名
 *   email {string} Email账号
 *
 * @success
 *   {code: '0', data: {user: 'xxx', email: 'xxx'}}
 *
 * @error
 *   {code: 'ERROR', message: 'something wrong!'}
 *
 */
/**
 * @api {get} /testAlias
 * @desc
 *   一个方法可以绑定多个路由，只要在方法前面出现多个api注释段
 */
exports.test = function () {

};

exports.
