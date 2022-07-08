const fs = require('fs')
const AddtionGame = artifacts.require('./AddtionGame.sol')

module.exports = function (deployer) {
  deployer.deploy(AddtionGame)
    .then(() => {
        if (AddtionGame._json) {
            fs.writeFile('deployedABI', JSON.stringify(AddtionGame._json.abi),
                (err) => {
                    if (err) throw err;
                    console.log("ABI 성공");
                }
            )
            fs.writeFile('deployedAddress', AddtionGame.address,
                (err) => {
                    if(err) throw err;
                    console.log('주소 입력 성공');
                }
            )
        }
    })
}
