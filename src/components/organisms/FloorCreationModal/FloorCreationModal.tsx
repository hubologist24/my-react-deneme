import { Button, ColorInput, Group, Modal, Space, TextInput, Text } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useEffect } from "react"
import { useCreateFloor } from "../../../hooks/CreateFloor"
import { strToHexColor } from "../../../utils/ColorUtils"
export type FloorCreationModalProps = {
    opened: boolean,
    onClose: () => void
}

export const FloorCreationModal = ({ opened, onClose }: FloorCreationModalProps) => {

    const form = useForm({
        initialValues: {
            ownerName: "",
            message: "",
            link: "",
            color: "#b07c5e",
            windowsTint: "#b9eaed"
        }
    })

    const { loading, success, error, send } = useCreateFloor()

    const handleSubmit = async (values: typeof form.values) => {
        console.log(values)
        await send(values.ownerName, values.message, values.link, strToHexColor(values.color), strToHexColor(values.windowsTint))
    }


    useEffect(() => {
        if (success) {
            onClose()
        }

    }, [success])

    return (<Modal opened={opened} onClose={onClose} title="Create a new floor">
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                required
                Label="Owner name"
                placeholder="Satoshi"
                {...form.getInputProps("ownerName")} />
            <Space h="md" />
            <TextInput
                required
                Label="Message"
                placeholder="Hello World"
                {...form.getInputProps("message")} />
            <Space h="md" />
            <TextInput
                required
                Label="Link"
                placeholder="www.google.com"
                {...form.getInputProps("link")} />
            <Space h="md" />
            <ColorInput label="Color" required {...form.getInputProps("color")} />
            <Space h="md" />
            <ColorInput label="Windows tint" required {...form.getInputProps("windowsTint")} />
            <Space h="md" />
            {
                !!error && (
                    <>
                        <Space h="md" />
                        <Text color="red">An error occured</Text>
                    </>
                )
            }
            <Group position="right">
                <Button type="submit" loading={loading}>Mint</Button>
            </Group>

        </form>
    </Modal>)
}
