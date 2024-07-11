import { Html, Heading, Text } from "@react-email/components"

interface EmailTemplateProps {
    name: string
    email: string
    message: string
}

const EmailTemplate = ({
    name,
    email,
    message,
}: Readonly<EmailTemplateProps>) => {
    return (
        <Html lang="en">
            <Heading as="h1">Thank you for reaching out</Heading>
            <Text>You just submitted a form. Here are the details:</Text>
            <Text>
                Name: {name}
            </Text>
            <Text>Email: {email}</Text>
            <Text>Email: {message}</Text>
        </Html>
    )
}

export default EmailTemplate
