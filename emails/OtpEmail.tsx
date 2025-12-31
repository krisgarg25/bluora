import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface OtpEmailProps {
  validationCode: string;
}

export const OtpEmail = ({ validationCode }: OtpEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Bluora Verification Code</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Bluora Verification</Heading>
          <Text style={text}>
            Your verification code for Bluora is below. Enter this code to complete
            your sign-up.
          </Text>
          <Section style={codeBox}>
            <Text style={codeText}>{validationCode}</Text>
          </Section>
          <Text style={text}>
            If you didn't request this code, you can safely ignore this email.
          </Text>
          <Text style={footer}>
            &copy; {new Date().getFullYear()} Bluora. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OtpEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "center" as const,
};

const codeBox = {
  background: "#f4f4f4",
  borderRadius: "4px",
  margin: "16px auto",
  width: "280px",
  textAlign: "center" as const,
};

const codeText = {
  color: "#000",
  fontSize: "32px",
  fontWeight: "bold",
  letterSpacing: "8px",
  lineHeight: "40px",
  margin: "0",
  padding: "20px",
};

const footer = {
  color: "#898989",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  textAlign: "center" as const,
};
