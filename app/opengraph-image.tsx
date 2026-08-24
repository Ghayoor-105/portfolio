import { ImageResponse } from "next/og";


export const alt = "Ghayoor Khan — AI Laboratory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0c0e12",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#00e5ff",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#00e5ff",
            }}
          />
          SYSTEM ACTIVE
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#EDEDF0",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          <span>Ghayoor Khan</span>
        </div>

        <div
          style={{
            display: "flex",
            color: "#bac9cc",
            fontSize: 32,
            marginTop: 24,
            letterSpacing: 1,
          }}
        >
          AI Engineer / Software Engineer
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              border: "1px solid #222A3A",
              color: "#bac9cc",
              padding: "10px 20px",
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            LLMs / RAG
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #222A3A",
              color: "#bac9cc",
              padding: "10px 20px",
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Computer Vision
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid #222A3A",
              color: "#bac9cc",
              padding: "10px 20px",
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Full-Stack
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}