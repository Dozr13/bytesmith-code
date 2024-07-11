import { Html, Heading, Text, Container, Section } from "@react-email/components"

interface AdminEmailTemplateProps {
    name: string
    email: string
    message: string
}

const AdminEmailTemplate = ({
    name,
    email,
    message,
}: AdminEmailTemplateProps) => {
    return (
        <Html lang="en">
            <Container>
                <Section>
                    <Heading as="h1">New Contact Form Submission</Heading>
                    <Text>
                        You have received a new message from your contact form.
                    </Text>
                    <Text>
                        <strong>Name:</strong> {name}
                    </Text>
                    <Text>
                        <strong>Email:</strong> {email}
                    </Text>
                    <Text>
                        <strong>Message:</strong> {message}
                    </Text>
                    <Text>
                        Please respond to the client as soon as possible.
                    </Text>
                </Section>
            </Container>
        </Html>
    )
}

export default AdminEmailTemplate
