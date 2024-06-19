import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, IconButton, InputBase, List, ListItem, Modal, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {};

const Searchbar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("");

  const results = [
    "",
    // "this is some results", "returned from the database", "blah blah blah"
  ];

  const selectFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search" onClick={() => setOpenModal(true)}>
        <SearchIcon sx={{ color: "#ffb703" }} />
      </IconButton>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", width: "70%", height: "80vh", borderRadius: 5 }}>
          <Stack alignItems="center" p={4}>
            <Stack direction="column" sx={{ mb: "10px" }}>
              <Typography variant="h4" fontWeight={600} color="text.primary">
                What are you searching for?
              </Typography>
            </Stack>

            <Paper elevation={3} sx={{ width: "50%", borderRadius: "8px", display: "flex", alignItems: "center", padding: "5px", bgcolor: "#f4f4f4", mb: "2%" }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where are you going?" onChange={(event) => setSearchTerm(event.target.value)} />

              <IconButton
                type="button"
                sx={{
                  p: "10px",
                  bgcolor: "black",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                aria-label="search"
              >
                <SearchIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </Paper>

            <Box sx={{ width: "70%" }}>
              <Stack direction="column" spacing={2}>
                {results.map((result) => {
                  return (
                    <Box sx={{ p: "5px" }}>
                      <Typography color="text.primary">{result}</Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Searchbar;
