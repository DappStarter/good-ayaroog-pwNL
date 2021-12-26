require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food bleak radar situate unknown grunt light army genre'; 
let testAccounts = [
"0x3c5423bf84243b38f2da8cc1d719ab1fc5b6c98627e5ce1c37b44512db9d251a",
"0x80e6d6dce06ff650ec17465ee30849e49c50a375acbafac4063bb112bbba16c4",
"0x9a2a863a086efe38eacd5a20b36c2b876509ef07211a9398b4008afffd09b833",
"0x98a87e98d9e6fa727a5868bf8613fe87cbde06183f148cca63f1b0e73015c948",
"0x909bd67f67a14b23217ded65906f02ab7ef903ef9655668b4c53228dffd8f6bd",
"0xc003e93585603e8e0886bfeb03d151b1b555bf653b76aec75c45fe276f8aa2d3",
"0xb9af9c3b399a76ca59e9ef295fd405b80b701bd81458440403ee905c8feb28b9",
"0xade35ef9671781e8d03343a9ce148658df74e5610dcd4d5189a1adb4ae4c7d09",
"0xe7633e1bc6faea585c63bc9e8ae023a7699991ff7ea827690f65ff24c37faf34",
"0xdc3e2686378feeded3eedf7bef39e536384088fbc917492502e67af9e45e54f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


