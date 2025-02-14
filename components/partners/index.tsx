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
        <Heading size="lg" className="text-theme-color" paddingTop={{ base: 100, lg: 150 }}>Building Together with the Best</Heading>
        <Container maxW={"90%"} paddingTop={70} paddingBottom={{ base: 10, md: 120}}>
            <Box display={"grid"} gridTemplateColumns={{ base: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }} gap={12} justifyContent={"center"} alignItems="center">
                {data.map((item) => (
                    <Card
                        key={item.name}
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={"transparent"}
                        borderRadius={10}
                        boxShadow="md"
                        width="auto"
                        className="grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Image className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded overflow-hidden" style={{ objectFit: "contain" }} src={item.image.default} alt={item.name} />
                        <Text mt={4} fontSize={{ base: "14px", lg: "16px" }} className="text-nowrap" color={"#ccc"}>{item.name}</Text>
                    </Card>
                ))}
            </Box>
        </Container>
    </>
}