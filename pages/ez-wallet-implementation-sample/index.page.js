import { useState } from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'

const EZWalletImplementationSample = () => {
  const [ezWalletData, setEzWalletData] = useState('')
  const [userEncryptKey, setUserEncryptKey] = useState('')
  const [userPrivateKey, setUserPrivateKey] = useState('')

  return (
    <div className='w-full flex-col justify-center pt-5 overflow-x-auto'>
      <p className='text font-bold text-3xl text-center'>EZ Wallet Implementation Sample</p>

      <div className='divide-y divide-dotted divide-slate-800'>

        {/* >> Step 1: Read ezwallet file content */}
        <Step1
          ezWalletData={ezWalletData}
          setEzWalletData={setEzWalletData} />

        {/* >> Step 2: Get user's encrypt key from api */}
        <Step2
          ezWalletData={ezWalletData}
          userEncryptKey={userEncryptKey}
          setUserEncryptKey={setUserEncryptKey} />

        {/* >> Step 3: Get user's private key by decrypt userData based on user's encrypt key */}
        <Step3
          ezWalletData={ezWalletData}
          userEncryptKey={userEncryptKey}
          userPrivateKey={userPrivateKey}
          setUserPrivateKey={setUserPrivateKey}
        />

        {/* >> Step 4: Use user's private key for execute transaction */}
        <Step4
          ezWalletData={ezWalletData}
          userPrivateKey={userPrivateKey}
        />
      </div>
    </div>
  )
}

export default EZWalletImplementationSample