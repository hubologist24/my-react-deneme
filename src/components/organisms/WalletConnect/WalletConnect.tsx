import { Button, Group, Text } from "@mantine/core"
import { Goerli, useEthers, BSCTestnet } from "@usedapp/core"

export const WalletConnect = () => {
    const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } = useEthers()
    if (account) {
        if (chainId === BSCTestnet.chainId) {
            return (<Button onClick={deactivate}>Disconnect</Button>)
        }
        else {
            return (
                <Group position="right">
                    <Text color="red">wrong network</Text>
                    <Button onClick={() => switchNetwork(BSCTestnet.chainId)}>Switch Network</Button>
                </Group>
            )
        }
    } else {
        return (<Button onClick={activateBrowserWallet}>Connect To Metamask</Button>)
    }
}