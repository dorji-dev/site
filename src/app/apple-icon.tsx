import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const AppleIcon = () => {
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
          fontSize: 112,
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

export default AppleIcon;
