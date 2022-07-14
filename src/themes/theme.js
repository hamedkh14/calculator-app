const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          text: {
            actionButton: "#f44336",
          },
          background: {
            button: {
              primary: "#f2f2f2",
            },
            paper: "#e5e5e5",
            keyboard: "#f9f9f9",
          },
        }
      : {
          text: {
            actionButton: "#ed665c",
          },
          background: {
            button: {
              primary: "#393939",
            },
            paper: "#222",
            keyboard: "#373737",
          },
        }),
  },
});

export default getDesignTokens;
