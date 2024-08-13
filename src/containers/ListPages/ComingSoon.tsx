import React from "react";
import Container  from "@mui/material/Container";
import Stack  from "@mui/material/Stack";


import { useForm } from "react-hook-form";

export default function ComingSoon(props) {
  const { control, handleSubmit } = useForm({ reValidateMode: "onBlur" });
  const [notification, setNotification] = React.useState({open:false,severity:'error',message:"Failed",duration:0})
  const [enableSave, setEnableSave] = React.useState(true);
  
  return (
    <div>    <Container maxWidth="xl" sx={[{ marginTop: (theme) => theme.spacing(10) }]}>

<h3>Coming Soon</h3>


  </Container></div>
  )
}
