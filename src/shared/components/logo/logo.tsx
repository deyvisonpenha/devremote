import { Rubik_Microbe } from "@next/font/google";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const titleFont = Rubik_Microbe({
  weight: "400",
});

export const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 200,
        alignItems: "center",
      }}
    >
      <Typography
        className={titleFont.className}
        sx={{
          fontWeight: 400,
          margin: 0,
          letterSpacing: "0.2rem",
          fontSize: "1em",
        }}
      >
        DEV
      </Typography>
      <Typography
        className={titleFont.className}
        sx={{
          margin: 0,
          letterSpacing: "0.3rem",
          fontSize: "1.5em",
        }}
      >
        REMOTE
      </Typography>
    </Box>
  );
};
