
import { useFilePicker } from 'use-file-picker'
import cryptoUtils from '../../../utils/crypto'
import MyButton from '../../../components/Button'

/**
 *
 * Step 1: Get ezwallet file content
 */
const Step1 = ({
  ezWalletData,
  setEzWalletData
}) => {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: '.json',
    multiple: false,
    limitFilesConfig: { max: 1 },
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {
      handleFilesSuccessfulySelected(filesContent)
    }
  })

  const handleFilesSuccessfulySelected = (filesContent) => {
    const fileContent = filesContent?.[0]?.content || ''

    const ezWalletDataFormated = cryptoUtils.getFormatEzWalletData(fileContent)
    setEzWalletData(ezWalletDataFormated)
  }

  return (
    <div className='w-full flex flex-col mt-10'>
      <div className='flex flex-col'>
        <span className='font-bold'>Step 1: Read the content of EZ Wallet connection json file</span>
        <span className='font-bold'>ステップ1: EZ Wallet 接続 json ファイルの内容を読み取る</span>
      </div>

      <div className='mt-2'>
        <MyButton
          label={'Select "ezwallet-file"'}
          onClick={openFileSelector} />
        <span className='text-sm italic'>/public/ezwallet-file-sample.json</span>
      </div>

      <div className='mt-2'>
        <span className='font-[500]'>ezwallet Data</span>
        <pre className='text-[12px] p-1 mt-1 bg-zinc-100 overflow-x-auto rounded-sm'>
          {
            ezWalletData
              ? JSON.stringify(ezWalletData, null, 2)
              : (
                ezWalletData === false ? (
                  <span className='text-red-500'>Incorrect ezwallet file format!</span>
                ) : '-'
              )
          }
        </pre>
      </div>
    </div>
  )
}

export default Step1
