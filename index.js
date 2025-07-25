/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 *
 *        佛曰:
 *                写字楼里写字间，写字间里程序员；
 *                程序人员写程序，又拿程序换酒钱。
 *                酒醒只在网上坐，酒醉还来网下眠；
 *                酒醉酒醒日复日，网上网下年复年。
 *                但愿老死电脑间，不愿鞠躬老板前；
 *                奔驰宝马贵者趣，公交自行程序员。
 *                别人笑我忒疯癫，我笑自己命太贱；
 *                不见满街漂亮妹，哪个归得程序员？
 */

import Version from "./components/Version.js"
import { Plugin_Name as AppName } from "#components"
import { loadApps, logSuccess } from "./lib/load/loadApps.js"
import { logger } from "#lib"

let apps, loadedFilesCount = 0, loadedFilesCounterr = 0

try {
  const {
    apps: loadedApps,
    loadedFilesCount: count,
    loadedFilesCounterr: counterr
  } = await loadApps({ AppsName: "apps" })

  apps = loadedApps
  loadedFilesCount = count
  loadedFilesCounterr = counterr
  logSuccess(
    `${AppName} v${Version.ver} 载入成功！`,
    `作者：${Version.author}`,
    `共加载了 ${loadedFilesCount} 个插件文件，${loadedFilesCounterr} 个失败`
  )
} catch (error) {
  logger.error(`${AppName}插件加载失败：`, error)
}

export { apps }
