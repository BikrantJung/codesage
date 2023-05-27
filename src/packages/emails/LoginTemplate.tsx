import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Font,
  Section,
  Button,
  Text,
} from "@react-email/components";
import * as React from "react";

interface PlaidVerifyIdentityEmailProps {
  url?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const CodeSageLoginEmail = ({ url }: PlaidVerifyIdentityEmailProps) => (
  <Html>
    <Head>
      {/* <Font
        fontFamily="IBM Plex Sans"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: "https://fonts.gstatic.com/s/ibmplexsans/v19/zYXgKVElMYYaJe8bpLHnCwDKhdHeFQ.woff2",
          format: "woff2",
        }}
      /> */}
    </Head>
    <Body style={main}>
      <Container style={container}>
        <Heading
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            color:'black'
          }}
        >
          CodeSage.io
        </Heading>
        <Heading
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            color:'black'
          }}
        >
          Welcome back!
        </Heading>
        <Text style={tertiary}>Verify Your Identity</Text>
        <Heading style={secondary}>
          Click the button below to complete your login.
        </Heading>
        <Section style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Button href={url} style={button}>Login</Button>
        </Section>
        <Text style={paragraph}>Not expecting this email?</Text>
        <Text style={paragraph}>
          Contact{" "}
          <Link href="mailto:login@plaid.com" style={link}>
            login@plaid.com
          </Link>{" "}
          if you did not request this code.
        </Text>
      </Container>
      <Text style={footer}>Securely powered by Plaid.</Text>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "white",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  color:'black'
};

const container = {
  backgroundColor: "#f4f4f0",
  border: "2px solid black",
  borderRadius: "8px",
  transform:'translate(-4px,-4px)',
  boxShadow: "4px 4px 0px 0px black",
  margin: "0 auto",
  marginTop: "20px",
  width: "360px",
  padding: "32px 16px 96px",
};
// const button = {
//   height:"44px",
//   padding:"0px 16px",
//   borderRadius:"8px",
//   border:"2px solid black",
//   fontWeight:600,
// }
const button = {
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '8px',
  height:"44px",
  paddingRight: '16px',
  paddingLeft: '16px',
};


const logo = {
  margin: "0 auto",
};

const tertiary = {
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const secondary = {
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  textDecoration: "underline",
};

const footer = {
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};
