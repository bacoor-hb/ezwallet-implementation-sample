# EZ Wallet Implementation Sample

## How to implement EZ Wallet in 4 steps
  ```bash
  Step 1: Read the content of EZ Wallet connection json file
  ステップ1: EZ Wallet 接続 json ファイルの内容を読み取る

  Step 2: Get the encrypt key of a user, based on the user's address and EZ Wallet API key
  ステップ2: ユーザーのアドレスとEZ Wallet APIキーに基づいて、ユーザーの暗号化キーを取得する

  Step 3: Get the private key of the user by decrypting "userData", based on the user's encrypted key
  ステップ3: ユーザーの暗号化キーに基づいて、"userData"を復号化してユーザーの秘密鍵を取得する

  Step 4: To execute a transaction on the blockchain, use the user's private key to create a Web3 wallet then execute eth_signMessage
  ステップ4: ブロックチェーン上でトランザクションを実行するため、ユーザーの秘密鍵を使用してWeb3ウォレットを作成し、eth_signMessageを実行する
  ```


## Environment Setup

### Information Using In This Sample

- **Sample ezwallet json file using at `Step 1` _(`/public/ezwallet-file-sample.json`)_**
  ```bash
  {
    "userUrl":"https://ezwallet.keyring.app/demo/my-page/0x9380B41754634056277a763ed9e4d9AFe2007041",
    "userAddress":"0x9380B41754634056277a763ed9e4d9AFe2007041",
    "userData":"U2FsdGVkX18U5403dqbMop0iEOzsfX0H/UVfK2oYWq5Iwf4BkERg35hXZICPQd370oFxuYwmyxK2yTk7KGFE9oD6YOyWXXKu4zJ7DboT7uDjIMeqA56IzcEqC9wFsn0o"
  }
  ```

- **Sample environment using at `Step 2` _(`/env.local`)_**
  ```bash
  NEXT_PUBLIC_EZWALLET_API=https://api-airdropband.keyring.app/service/v1
  NEXT_PUBLIC_EZWALLET_API_KEY=pRPaMF07ERrMXqjBTyglpyMkT5eLKcB3
  ```


### Running the app in development
Required [Node.js](https://nodejs.org) **version >= 12.22.0**

- Install npm packages
  ```bash
  yarn
  ```

- Start app with your custom port
  ```bash
  yarn dev --port 3003
  ```
  
- Open http://localhost:3003 with your browser to see the result.

