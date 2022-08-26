import { Button, Card, Grid, Text } from "@mantine/core"
import { useEthers, Goerli, BSCTestnet } from "@usedapp/core"
import { useState } from "react"
import { FloorCreationModal } from "../FloorCreationModal"
import { FloorItem } from "../../../hooks/Floors/Floors"


export type InfinityTowerProps = {
    floors: FloorItem[]
}

export const InfinityTower = ({ floors }: InfinityTowerProps) => {
    const [FloorCreationOpened, setFloorCreationOpened] = useState(false)
    const { account, chainId } = useEthers()
    return (<>
        <Grid>
            {floors?.map((floor, index) => (
                <Grid.Col span={4} key={index}>
                    <Card shadow="sm" sx={{ height: "100%" }}>
                        <Text>#{index}</Text>
                        <Text>{floor.ownerName}</Text>
                        <Text>{floor.message}</Text>
                        <Text>{floor.link}</Text>
                        <Text color={floor.color}>{floor.color}</Text>
                        <Text color={floor.windowsTint}>{floor.windowsTint}</Text>
                    </Card>
                </Grid.Col>
            ))}
        </Grid>
        <Button onClick={() => setFloorCreationOpened(true)}
            variant="light"
            radius="x1"
            disabled={!account || chainId !== BSCTestnet.chainId}
            sx={{
                position: "fixed",
                bottom: 42,
                right: 42
            }}>
            Mint a new floor
        </Button>
        <FloorCreationModal
            opened={FloorCreationOpened}
            onClose={() => setFloorCreationOpened(false)} />

    </>)
}