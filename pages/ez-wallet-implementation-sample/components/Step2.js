import { useState } from 'react'
import MyButton from '../../../components/Button'

/**
 *
 * Step 2: Get user's encrypt key from api
 */
const Step2 = ({
  ezWalletData,
  userEncryptKey = '',
  setUserEncryptKey
}) => {
  const { userAddress } = ezWalletData || {}

  const [loading, setLoading] = useState(false)
  const [errorGetKey, setError] = useState(false)

  const handleGetEncryptKey = async () => {
    try {
      setLoading(true)

      const apiGetKeyPath = `${process.env.NEXT_PUBLIC_EZWALLET_API}/get-key`
      const params = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'x-api-key': process.env.NEXT_PUBLIC_EZWALLET_API_KEY,
        }
      }
      const userEncryptInfo = await fetch(apiGetKeyPath, params)

      setLoading(false)
      setUserEncryptKey(userEncryptInfo?.data?.encryptKey)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 2: Get the encrypt key of a user, based on the user's address and EZ Wallet API key</span>
        <span className='font-bold'>ステップ2: ユーザーのアドレスとEZ Wallet APIキーに基づいて、ユーザーの暗号化キーを取得する</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label='Get Encrypt Key'
          disabled={!userAddress}
          onClick={handleGetEncryptKey} />
      </div>

      <div className='mt-4'>
        <span className='font-[500]'>User's Encrypt Key</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
          {
            loading
              ? <span>Loading...</span>
              : errorGetKey
                ? <span className='text-red-500'>Network error, please try again later!</span>
                : userEncryptKey || '-'
          }
        </pre>
      </div>

    </div>
  )
}

export default Step2
