import { useState } from 'react'
import MyButton from '../../../components/Button'
import { ethers } from 'ethers'

/**
 *
 * Step 4: Use user's private key for execute transaction
 */
const Step4 = ({
  ezWalletData,
  userPrivateKey = ''
}) => {
  const [errorExecuteTx, setError] = useState(false)
  const [signature, setSignature] = useState('')
  const { userAddress } = ezWalletData
  const message = 'Hello EZ Wallet'

  const handleSignTransaction = async () => {
    try {
      const signer = new ethers.Wallet(userPrivateKey)

      const signature = await signer.signMessage(message)
      if (signature) {
        setSignature(signature)
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 4: To execute a transaction on the blockchain, use the user's private key to create a Web3 wallet then execute eth_signMessage</span>
        <span className='font-bold'>ステップ4: ブロックチェーン上でトランザクションを実行するため、ユーザーの秘密鍵を使用してWeb3ウォレットを作成し、eth_signMessageを実行</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label='Execute "eth_signMessage" Method'
          disabled={!userPrivateKey}
          onClick={handleSignTransaction} />
      </div>

      <div className='mt-4'>
        <span className='font-[500]'>Result</span>
        {
          errorExecuteTx
            ? <span className='text-red-500'>Error!</span>
            : signature
              ? (
                <pre className='flex flex-col text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
                  <span>Address: {userAddress}</span>
                  <span>Message: {message}</span>
                  <span>Signature Hash: {signature}</span>
                </pre>
              ) : (
                <pre className='flex flex-col text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto w-auto rounded-sm'>
                  -
                </pre>
              )
        }
      </div>

      {
        signature && (
          <div className='flex mt-5'>
            <div className='flex flex-col items-center p-4 mt-1 bg-green-100 overflow-x-auto w-auto rounded-md text-green-500'>
              <div className='flex flex-row'>
                <img src='/party-popper.png' width={'20px'} />
                <img src='/party-popper.png' width={'20px'} />
                <span className='font-bold'>You have completed the EZ Wallet Implementation</span>
                <img src='/party-popper.png' width={'20px'} />
                <img src='/party-popper.png' width={'20px'} />
              </div>
              <div>
                You can verify the signature by yourself at this page: <a className='text-blue-500' href='https://etherscan.io/verifiedSignatures#' target='_blank' rel='noreferrer'>https://etherscan.io/verifiedSignatures#</a>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Step4
