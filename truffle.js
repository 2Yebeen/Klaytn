// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLINIT = '20000000'
const URL = 'http://api.babab.klaytn.net:8651'
const PRIVATE_KEY = '0x3b12341234c39230920492xf04029ce423950f298838020c0098ad92938d'

module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLINIT,
            gasPrice: null,
        }
    },
}