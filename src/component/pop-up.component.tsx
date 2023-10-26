import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
export default function PopUpComponent({
    open, setOpen, children
}) {
  
  return (
    <Modal open={open} >
      <Box display={"flex"} width={'100%'} height={'100%'} justifyContent={'center'} alignSelf={'center'} flexDirection={"column"}>
        <Box  bgcolor={"white"} display={'flex'} flexDirection={"column"} alignSelf={'center'} >
        <IconButton onClick={()=>setOpen(false)}  sx={{alignSelf:'flex-end', m:1}} >
          <CancelIcon></CancelIcon>
        </IconButton>
        <Box>
            {children}
        </Box>
        </Box>
      </Box>
    </Modal>
  );
}
