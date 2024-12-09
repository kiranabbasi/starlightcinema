import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>

                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
                        format: "woff",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Here&apos;s your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>Thank you for signing up with us. Please use the code below to verify your account.</Text>
                </Row>
                <Row>
                    <Text>Verification Code: {otp}</Text>
                </Row>
                <Row>
                    <Text>If you did not request this, please ignore this email.</Text>
                </Row>
            </Section>

            <Row>
                <Button
                 href= {``}
                 style={{color: '#61dafb'}}
                >
                  Verify Here 
                </Button>
            </Row>
        </Html>
    )
}
