/*@replace = import Store from 'electron-store'*/const Store = require('electron-store')
// 导入密钥
import { storeKey } from "../key"


// export default new Store( {encryptionKey:storeKey } ) // 加密
export default new Store
