import { useState } from 'react'
import MyButton from '../../../components/Button'
import cryptoUtils from '../../../utils/crypto'

/**
 *
 * Step 3: Get user's private key by decrypt userData based on user's encrypt key
 */
const Step3 = ({
  ezWalletData,
  userEncryptKey,
  userPrivateKey,
  setUserPrivateKey
}) => {
  const [errorGetPrivateKey, setError] = useState(false)
  const { userData } = ezWalletData || {}

  const handleDecryptDataForGetPrivateKey = () => {
    const userPrivateKey = cryptoUtils.decryptData(userData, userEncryptKey)
    if (!userPrivateKey) {
      setError(true)
    } else {
      setUserPrivateKey(userPrivateKey)
    }
  }

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 3: Get the private key of the user by decrypting "userData", based on the user's encrypted key</span>
        <span className='font-bold'>ステップ3: ユーザーの暗号化キーに基づいて、"userData"を復号化してユーザーの秘密鍵を取得する</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label='Get Private Key'
          disabled={!userEncryptKey}
          onClick={handleDecryptDataForGetPrivateKey} />
      </div>

      <div className='mt-4'>
        <span className='font-[500]'>User's Private Key</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
          {
            errorGetPrivateKey
              ? <span className='text-red-500'>Incorrect user's encrypt key</span>
              : userPrivateKey || '-'
          }
        </pre>
      </div>
    </div>
  )
}

export default Step3
