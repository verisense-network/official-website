import { Box, Card, Container, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"


export default function Partners() {
    const data = [
        {
            name: "ElizaOS",
            image: require("./assets/elizaos.jpg"),
        },
        {
            name: "ai16z",
            image: require("./assets/ai16z.jpg"),
        },
        {
            name: "Virtual",
            image: require("./assets/virtuals.jpg"),
        },
        {
            name: "Agno",
            image: require("./assets/agno.png"),
        },
        {
            name: "OpenAI Swarm",
            image: require("./assets/openai.png"),
        },
        {
            name: "LangGraph",
            image: require("./assets/langchain.png"),
        },
        {
            name: "Microsoft Autogen",
            image: require("./assets/autogen.svg"),
        },
        {
            name: "CrewAI",
            image: require("./assets/crewai.svg"),
        },
        {
            name: "Vertex AI",
            image: require("./assets/vertex.svg"),
        },
        {
            name: "Langflow",
            image: require("./assets/langflow.svg"),
        },
    ]
    return <>
        <Heading size="lg" className="text-theme-color">Building Together with the Best</Heading>
        <Container maxW={"90%"} paddingTop={30} paddingBottom={50}>
            <Box display={"grid"} gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }} gap={5} justifyContent={"center"} alignItems="center">
                {data.map((item) => (
                    <Card
                        key={item.name}
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={"transparent"}
                        borderRadius={10}
                        boxShadow="md"
                        width={100}
                        className="grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Image style={{ height: 140, objectFit: "contain" }} src={item.image.default} alt={item.name} />
                        <Text fontSize="14" className="text-nowrap" color={"#ccc"}>{item.name}</Text>
                    </Card>
                ))}
            </Box>
        </Container>
    </>
}