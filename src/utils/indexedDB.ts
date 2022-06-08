/* eslint-disable no-console */
export default class DB {
  private dbName: string
  constructor(dbName: string) {
    this.dbName = dbName
  }

  // 开启数据库
  openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 1)
    // 开启成功的回调
    request.onsuccess = (e) => {
      console.log('open db success')
      console.log(e)
    }

    // 开启失败的回调
    request.onerror = (e) => {
      console.log('open db error')
      console.log(e)
    }

    // 更新的回调
    request.onupgradeneeded = (e) => {
      console.log('upgrad db success')
      const { result }: any = e.target
      // 创建存储对象
      const store = result.createObjectStore(storeName, {
        autoIncrement: true,
        keyPath,
      })
      if (indexs) {
        // 创建索引
        indexs.forEach((item: string) => {
          store.createIndex(item, item, { unique: true })
        })
      }
      store.transaction.oncomplete = (e) => {
        console.log('create object store success')
        console.log(e)
      }
      console.log(e)
    }
  }
}
