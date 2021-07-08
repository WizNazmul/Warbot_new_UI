import { useEffect, useState } from 'react'
import { Typography, Space, Row, Col, Card, Slider, List, Spin, Collapse, Form, Button, Input, Tag, Statistic, notification } from 'antd'
const { Title, Text } = Typography
import { useWallet } from 'use-wallet'
import useWeb3 from '../hooks/useWeb3'
import useMicroMachineManufacturingPlant from '../hooks/useMicroMachineManufacturingPlant'
import useGlobal from '../hooks/useGlobal'
import useWarbots from '../hooks/useWarbots'
import moment from 'moment'



const WarbotInventory = ({ onComplete, address }) => {
  
  const wallet = useWallet()
  const [getVault, sendVaultTx] = useWarbots()
  const [state, actions] = useGlobal(['warbotmanufacturer', 'hasSecurity', 'vaultCount'])
  const { warbotmanufacturer, web3, connected } = useMicroMachineManufacturingPlant(state.warbotmanufacturer)
  const [deposits, setDeposits] = useState([])
  const [vaults, setVaults] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasVaults, setHasVaults] = useState(false)
  const [warbot1, setWarbot1] = useState(false)


  useEffect(() => {
    if (connected && state.hasWarbotmanufacturer) {
      getDeposits(false)
    }
  }, [connected, state.hasSecurity, state.vaultCount])

   

  const getDeposits = async() => {
    
	setLoading(true)
    
    //const deps = await warbotmanufacturer.getUserManufacturingPlants(wallet.account).call()
	//const totalDeps = await warbotmanufacturer.userManufacturingPlantCount(wallet.account).call()
	
	const userwarbots = await warbotmanufacturer.getUsersWarbots(wallet.account).call()
	const totalDeps = userwarbots.length
	console.dir(userwarbots)
	
    
    
	
	setDeposits(userwarbots)

    let vaults = {}
    for (let warbot of userwarbots) {
	   //const rawdata = await warbotmanufacturer.ManufacturingPlants(dep).call()
	   //const rawdata = await warbotmanufacturer.WarbotLevel(dep).call()
       const data = await getVault( warbot )


      vaults[warbot] = {
        
        address,
        ...data
      }

    }
	
    setVaults(vaults)
    setTotal(totalDeps)
    setHasVaults(true)
    setLoading(false)
  }
  
   const updateWarbotMain = async(e) => {
   try{
    setWarbot1 ( 15 )
   } catch (e) {}
  }
  
 

  const renderDeposit = (id, key) => {
    
	try{
	if (vaults[id].Level == 0) return null;
	}catch (e) {
        return null;
		}
	
	var warbotid = "Warbot Indentification Number:" + vaults[id].WarbotNumber
	var warbotlevel = "Warbot Level: " + vaults[id].Level
	return (
      <div key={`vault-${id}`}>
        <Collapse>
          <Collapse.Panel header={`${warbotid} -${warbotlevel}`}>
            <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
              <Col span={24}>
               <Space>
					<Button size="large" type="primary" >Upgrade</Button>
					<Button size="large" style={{ background: "red", borderColor: "yellow" }} >Send For Parts</Button>
					<Button size="large" style={{ background: "yellow", borderColor: "yellow" }} >Send To Warbot Dealership</Button>
					<Button size="large" type="danger" >Send To The Warzone</Button>
				</Space>  
                  
              </Col>
              <Col span={12}>
                <Statistic title="WarBot Identification Number " value={id} />
              </Col>

              {
                Object.keys(vaults[id]).map((name, key) => (
                  <Col
                    key={`${id}-${name}-${key}`}
                    span={vaults.[id]['WarbotNumber'].toString().startsWith('0x') ? 24 : 8}>
                    <Statistic
                      title={name.toUpperCase()}
                      value={vaults.[id][name]   }
                      precision={ name == "POOL WEIGHT" ? 9 : 0 }
                      style={{ marginBottom: 20 }}
                      />
                  </Col>
                ))
              }
            </Row>
          </Collapse.Panel>
        </Collapse>
      </div>
    )
  }


  return (
    <Spin spinning={loading}>
      <Card title="WarBot Inventory" extra={<Button onClick={getDeposits}>Refresh</Button>}>
        <Row style={{ marginBottom: 20 }}>
          <Col span={12}>
          
          </Col>
          <Col span={12}>
         
          </Col>
        </Row>
        { hasVaults && deposits.map(renderDeposit) }
      </Card>
    </Spin>
  )
}

export default WarbotInventory
