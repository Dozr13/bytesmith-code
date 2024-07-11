import { Html, Heading, Text, Container, Section } from "@react-email/components"

interface ClientEmailTemplateProps {
    name: string
    message: string
}

const ClientEmailTemplate = ({
    name,
    message,
}: ClientEmailTemplateProps) => {
    return (
        <Html lang="en">
            <Container>
                <Section>
                    <Heading as="h1">Thank you for reaching out, {name}!</Heading>
                    <Text>
                        We have received your message and will get back to you shortly.
                    </Text>
                    <Text>
                        Here is a copy of your message:
                    </Text>
                    <Text>
                        {message}
                    </Text>
                    <Text>
                        Best regards,<br />
                        Wade Pate<br />
                        ByteSmith Code
                    </Text>
                </Section>
            </Container>
        </Html>
    )
}

export default ClientEmailTemplate
