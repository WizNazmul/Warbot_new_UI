import { useState, useEffect, useMemo } from 'react'
import Contract from 'web3-eth-contract'
import SSVault from '../build/contracts/SSVault.json'
import useWeb3 from './useWeb3'
import moment from 'moment'

const useVault = () => {
  const web3 = useWeb3()
  const [contract, setContract] = useState({})

  useEffect(() => {
    Contract.setProvider(web3.givenProvider)
  }, [])

  const getVault = async(address) => {
    const contract = new Contract(SSVault.abi, address)
    setContract(contract)
    const pensioner = await contract.methods.pensioner().call()
    const depositamount = await contract.methods.depositamount().call()
    const depositTimeValueAmount = await contract.methods.depositTimeValueAmount().call()
    const emergencyWithdrawalAmount = await contract.methods.emergencyWithdrawalAmount().call()
    const lastUpdate = await contract.methods.lastUpdate().call()

    const reflectBalance = await contract.methods.reflectBalance().call()
    const timeAtDeposit = await contract.methods.timeAtDeposit().call()
    const timeAtExpiration = await contract.methods.timeAtExpiration().call()
    const timeLeft = await contract.methods.timeLeft().call()
    const timeLockUnits = await contract.methods.timeLockUnits().call()
    const totalTaxCollected = await contract.methods.totalTaxCollected().call()

    return {
      pensioner,
      depositamount: web3.utils.fromWei(depositamount, 'gwei'),
      depositTimeValueAmount: web3.utils.fromWei(depositTimeValueAmount, 'gwei'),
      emergencyWithdrawalAmount: web3.utils.fromWei(emergencyWithdrawalAmount, 'gwei'),
      lastUpdate: moment.unix(lastUpdate).format('MM/DD/YYYY HH:mm'),
      reflectBalance,
      timeAtDeposit: moment.unix(timeAtDeposit).format('MM/DD/YYYY HH:mm'),
      timeAtExpiration: moment.unix(timeAtExpiration).format('MM/DD/YYYY HH:mm'),
      timeLeft: moment().add(timeLeft, 'seconds').diff(moment(), 'days') + ' days',
      timeLockUnits,
      totalTaxCollected
    }
  }

  return [getVault]
}

export default useVault