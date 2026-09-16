import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a5f4f",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 600,
          lineHeight: 1,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    },
  );
};

export default Icon;
