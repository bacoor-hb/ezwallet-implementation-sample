import { ethers } from 'ethers'
import crypto from 'crypto-js'


export const isObject = (data) => {
  return data && typeof data === 'object'
}

const jsonStr2Obj = (strObj) => {
  try {
    if (isObject(strObj)) {
      return strObj
    }
    return JSON.parse(strObj)
  } catch (e) {
    return false
  }
}

export default class cryptoUtils {

  static decryptData = (encryptedData, encryptKey) => {
    try {
      return crypto.AES.decrypt(encryptedData.toString(), encryptKey).toString(crypto.enc.Utf8)
    } catch (error) {
      return false
    }
  }

  static isValidEzWalletFormat = (ezWalletData) => {
    const fileContentObj = jsonStr2Obj(ezWalletData)

    const isValidFormatFile = (
      !!fileContentObj?.userUrl &&
      !!fileContentObj?.userAddress &&
      !!fileContentObj?.userData
    )


    return isValidFormatFile
  }

  static getFormatEzWalletData = (ezwalletFileContent) => {
    if (cryptoUtils.isValidEzWalletFormat(ezwalletFileContent)) {
      const ezWalletData = jsonStr2Obj(ezwalletFileContent)
      // {
      //   userUrl: '',
      //   userAddress: '',
      //   userData: ''
      // }
      return ezWalletData
    } else {
      return false
    }
  }
}

