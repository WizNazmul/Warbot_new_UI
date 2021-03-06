import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Router from "next/router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import useMMACbalance from "../hooks/useMMACbalance";
import useMicroMachines from "../hooks/useMicroMachines";
import {
    Layout,
    Menu,
    Breadcrumb,
    Space,
    Button,
    Typography,
    Drawer,
    Input,
    Form,
    Alert,
    Spin,
} from "antd";
import { useWallet } from "use-wallet";
import useGlobal from "../hooks/useGlobal";

import useMicroMachineManufacturingPlant from "../hooks/useMicroMachineManufacturingPlant";
import useNANObalance from "../hooks/useNANObalance";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function PublicLayout({ children }) {
    const { balance } = useMMACbalance([]);
    const { nbalance } = useNANObalance([]);
    const [drawer, showDrawer] = useState(false);
    const [state, actions] = useGlobal([]);
    const { security, getFields, connected } =
        useMicroMachineManufacturingPlant(state.security);
    const [loading, setLoading] = useState(false);
    const wallet = useWallet();

    useEffect(() => {
        if (wallet.status == "connected" && state.hasSecurity == false) {
            showDrawer(true);
        }
    }, [wallet.status]);

    useEffect(() => {
        if (connected && state.hasSecurity) {
            getMicroMachineManufacturingPlant();
        }
    }, [connected, state.hasSecurity]);

    const getMicroMachineManufacturingPlant = async () => {
        setLoading(true);

        const info = await getFields();

        actions.setSecurityInfo(info);
        actions.setWelfare(info.microMachineAddress);
        setLoading(false);
    };

    const renderWallet = useCallback(() => {
        if (wallet.status == "connected" && wallet.account) {
            return (
                <div className="connect_btn">
                    <button onClick={() => wallet.connect()}>
                        <img src="/img/wallet.png" alt="" />
                        <Text
                            style={{ color: "white", fontFamily: "Teko_700" }}
                        >
                            {wallet.account.substr(0, 6)}....
                            {wallet.account.substr(39)}
                        </Text>
                        {/*  <Space>
                        <Button
                        type="danger"
                        size="small"
                        onClick={() => wallet.reset()}
                    >
                        Disconnect
                    </Button>
                    <Button
                        type="primary"
                        size="small"
                        onClick={() => showDrawer(true)}
                    >
                        Settings
                    </Button> 
                </Space>*/}
                    </button>
                </div>
            );
        }
        return (
            <div className="connect_btn">
                <button onClick={() => wallet.connect()}>
                    <img src="/img/wallet.png" alt="" />
                    Connect Wallet
                </button>
            </div>
        );
    }, [wallet]);

    function open() {
        document.getElementById("open_menu").style.display = "none";
        document.getElementById("close_menu").style.display = "block";
        document.getElementById("img_menu").style.display = "block";
    }

    function close() {
        document.getElementById("close_menu").style.display = "none";
        document.getElementById("open_menu").style.display = "block";
        document.getElementById("img_menu").style.display = "none";
    }

    // COMMAND CENTER: 0xe73C89DFA51E82e7895b0E9E9B8E9b1b4A91b2b6
    // BONUS: 0xEeCFE0b4c47cb5d61F180d721674a405A86FB53c
    // WELFARE ADDRESS: 0xbEDA6Df7a5bCA914915fb80D13c1b6b32dF8F8ab
    // SOCIAL SECURITY: 0x5d09f5E94f8f2cAb11DB1A7D1C71cdd80E7c0e69

    return (
        <Layout>
            <Drawer
                title="Test Settings"
                placement="right"
                closable={true}
                width={540}
                onClose={() => showDrawer(false)}
                visible={drawer}
            >
                <Spin spinning={loading}>
                    <Form.Item name="wallet" label="Your Wallet">
                        {wallet.status == "connected" && (
                            <Text copyable>{wallet.account}</Text>
                        )}
                    </Form.Item>

                    <Space style={{ marginBottom: 20 }} size="small">
                        <Button type="primary" onClick={actions.setMainnet}>
                            Mainnet
                        </Button>
                        <Button onClick={actions.setTestnet}>Testnet</Button>
                        <Text>
                            Current Network:{" "}
                            <strong>
                                {state.chain == "56" ? "Mainnet" : "Testnet"}
                            </strong>
                        </Text>
                    </Space>

                    <Form.Item
                        name="ss"
                        label="Micromachine Manufacturing Plant"
                    >
                        <Text copyable>
                            0xD2511C55246Bd9f697931C5e5CAfD64c30882B91
                        </Text>
                        <Input
                            name="social"
                            placeholder="MicroMachineManufacturingPlant"
                            allowClear
                            size="large"
                            value={state.security}
                            onChange={(e) =>
                                actions.setSecurity(e.target.value)
                            }
                        />
                    </Form.Item>

                    <Form.Item name="nanomachines" label="Nanomachines Address">
                        <Text copyable>
                            0x9E59667490263361F39774D4e31678340795Ac81
                        </Text>
                        <Input
                            name="command"
                            placeholder="Nanomachines Address"
                            allowClear
                            value={state.nanomachines}
                            size="large"
                            onChange={(e) => actions.setCenter(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item name="welfare" label="Micromachine Address">
                        <Text copyable>
                            0xc50Dcd6612eEE0A69822C2a0ABa2572ee65bD853
                        </Text>
                        <Input
                            name="command"
                            placeholder="MicroMachines Contract"
                            allowClear
                            value={state.welfare}
                            size="large"
                            onChange={(e) => actions.setWelfare(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item name="nanobnblp" label="Nano/BNB LP Address">
                        <Text copyable>
                            0xad7806487D47613ce9Ce9e78633058381Abd784C
                        </Text>
                        <Input
                            name="command"
                            placeholder="Nanomachines Staking"
                            allowClear
                            value={state.nanobnblp}
                            size="large"
                            onChange={(e) => actions.setBonus(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item name="masterchef" label="Masterchef">
                        <Text copyable>
                            0x9eB6DEA48F004FF1A20f0499C9099616C8038Bbb
                        </Text>
                        <Input
                            name="command"
                            placeholder="Masterchef"
                            allowClear
                            value={state.masterchef}
                            size="large"
                            onChange={(e) =>
                                actions.setMasterchef(e.target.value)
                            }
                        />
                    </Form.Item>

                    <Form.Item name="microbnblp" label="Micro/BNB LP Address">
                        <Text copyable>
                            0xd1E0Da81736d365C1Ce99ABd942e490cFD0D5DDB
                        </Text>
                        <Input
                            name="command"
                            placeholder="Micro LP Address"
                            allowClear
                            value={state.microbnblp}
                            size="large"
                            onChange={(e) => actions.setBonus(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item name="warbotstats" label="Warbot Stats">
                        <Text copyable>
                            0x9E94f7cF3fBa377dD3B2c6358aE62cCfE40Ed350
                        </Text>
                        <Input
                            name="command"
                            placeholder="Warbot Stats Address"
                            allowClear
                            value={state.warbotstats}
                            size="large"
                            onChange={(e) => actions.setBonus(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item name="nftcards" label="NFT Nano Cards">
                        <Text copyable>
                            0x2d9343900f2a4640054585dd70FB1e350c931B00
                        </Text>
                        <Input
                            name="command"
                            placeholder="Warbot Stats Address"
                            allowClear
                            value={state.nanonft}
                            size="large"
                            onChange={(e) => actions.setBonus(e.target.value)}
                        />
                    </Form.Item>

                    <div>
                        <Alert
                            description="Send tokens to this contract"
                            type="info"
                            showIcon
                        />
                        <Text copyable>
                            0xb5B8cD15Eac571F3d733e3F4ad01143D1548C6ce
                        </Text>
                    </div>
                </Spin>
            </Drawer>

            <Header
                style={{
                    position: "fixed",
                    zIndex: 1,
                    width: "100%",
                    paddingTop: "64px",
                    paddingBottom: "8px",
                    // display: "flex",
                    // flexDirection: "row",
                    // alignItems: "center",
                    backgroundImage: "url(/img/Cogs.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top left",
                }}
            >
                <section className="Navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="nav_menu_holder">
                                <button
                                    className="Nav_menu"
                                    id="open_menu"
                                    onClick={open}
                                >
                                    <img src="/img/list.png" alt="" />
                                </button>
                                <button
                                    className="Nav_menu nav_menu_extra"
                                    id="close_menu"
                                    onClick={close}
                                >
                                    <img src="/img/close_menu.png" alt="" />
                                </button>

                                <ul id="img_menu" className="img_menu">
                                    <a
                                        href="#"
                                        title="Home"
                                        onClick={() => Router.push("/")}
                                    >
                                        <li>
                                            <img src="/img/Home.png" alt="" />
                                        </li>
                                    </a>
                                    <a
                                        href="#"
                                        title="Combat Zone"
                                        onClick={() =>
                                            Router.push("/combatzone")
                                        }
                                    >
                                        <li>
                                            <img
                                                src="/img/CombatZone.png"
                                                alt=""
                                            />
                                        </li>
                                    </a>
                                    <a href="#" title="Manufacturing Center">
                                        <li>
                                            <img
                                                src="/img/NanoMachines.png"
                                                alt=""
                                            />
                                        </li>
                                    </a>
                                    <a
                                        href="#"
                                        title="Warbots"
                                        onClick={() => Router.push("/warbots")}
                                    >
                                        <li>
                                            <img
                                                src="/img/Warbots.png"
                                                alt=""
                                            />
                                        </li>
                                    </a>
                                    <a
                                        href="#"
                                        title="NanoMachines"
                                        onClick={() =>
                                            Router.push("/nanomachines")
                                        }
                                    >
                                        <li>
                                            <img src="/img/tank.png" alt="" />
                                        </li>
                                    </a>

                                    <a href="#" title="MarketPlace">
                                        <li>
                                            <img
                                                src="/img/Marketplace.png"
                                                alt=""
                                            />
                                        </li>
                                    </a>
                                    <a
                                        href="#"
                                        title="NMAC Sale"
                                        onClick={() => Router.push("/nanosale")}
                                    >
                                        <li>
                                            <img
                                                src="/img/NanoNFTs.png"
                                                alt=""
                                            />
                                        </li>
                                    </a>
                                    <a href="#" title="Location">
                                        <li>
                                            <img src="/img/globe.png" alt="" />
                                        </li>
                                    </a>
                                    <a
                                        href="#"
                                        title="Bridge"
                                        onClick={() => Router.push("/bridge")}
                                    >
                                        <li>
                                            <img src="/img/Bridge.png" alt="" />
                                        </li>
                                    </a>
                                </ul>
                            </div>

                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    WARBOTS
                                    <p className="m-0">The future is here</p>
                                </a>
                                <div className="nav_details">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-wrap">
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">
                                                <img
                                                    src="/img/Manufacturing_center.png"
                                                    alt=""
                                                />
                                                {balance}
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link " href="#">
                                                <img
                                                    src="/img/NanoMachines.png"
                                                    alt=""
                                                />
                                                {nbalance * 0.000000001}
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link " href="#">
                                                <img
                                                    src="/img/gem.png"
                                                    alt=""
                                                />
                                                157
                                            </a>
                                        </li>

                                        {/* <li
                                            className="nav-item"
                                            onClick={() => wallet.connect()}
                                            // onClick={connect_wallet}
                                        >
                                            <a className="nav-link " href="#">
                                                <img
                                                    src="/img/wallet.png"
                                                    alt=""
                                                />

                                               
                                                {addr}
                                            </a>
                                        </li> */}
                                        {renderWallet()}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>

                {/* <Title
                    style={{ color: "white", marginBottom: 0, marginRight: 30 }}
                    level={3}
                >
                    MMAC WARBOTS
                </Title>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="2" onClick={() => Router.push("/")}>
                        WarBot Manufacturing Center
                    </Menu.Item>

                    <Menu.Item
                        key="4"
                        onClick={() => Router.push("/nanomachines")}
                    >
                        Nanomachines
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => Router.push("/warbots")}>
                        Warbots
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        onClick={() => Router.push("/nanonftcardsauctions")}
                    >
                        NANO NFTS
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        onClick={() => Router.push("/combatzone")}
                    >
                        Combat Zone
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => Router.push("/nanosale")}>
                        Nano Sale
                    </Menu.Item>
                </Menu>
                <div style={{ flex: 1 }} />
                {renderWallet()} */}
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: `0 50px`,
                    marginTop: 189,
                    minHeight: `100vh`,
                }}
            >
                {wallet.status != "connected" && (
                    <Alert
                        message="Connect Wallet"
                        description="Please connect your wallet"
                        type="error"
                        showIcon
                        closable
                        style={{ marginTop: 20 }}
                    />
                )}

                {children}
            </Content>
            <Footer style={{ textAlign: "center" }}>
                All Rights Reserved 2021
            </Footer>
        </Layout>
    );
}
