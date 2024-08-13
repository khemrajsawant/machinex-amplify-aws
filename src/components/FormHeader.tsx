import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FormHeader(props) {
  const typeheader = props.headerkind?props.headerkind:'medium'
  if(typeheader=='medium'){
    return (
      <Typography ><Box sx={[{"fontWeight":600,m:0.1,fontSize:"1rem",p:1.2,borderRadius:"1rem",backgroundColor:"#e0f2f1",width:"100%"},{textDecoration: 'underline'},{textTransform:"capitalize"}]}>{props.headerName}</Box></Typography>
    )
  } else if(typeheader=='regular'){
    return (
      <Typography ><Box sx={[{"fontWeight":500,m:0.1,fontSize:"0.875rem"},{textTransform:"capitalize"}]}>{props.headerName}</Box></Typography>
    )
} else if(typeheader=='pageheader'){
  return (
    <Box sx={[{"fontWeight":600,py:"0.6rem",paddingLeft:"0.5rem",textJustify:"center",m:0.1,fontSize:"1.2rem",color:"#002d80",borderRadius:"0.25rem",backgroundColor:"#e0f2f1",width:"100%"},{textTransform:"capitalize"}]}>{props.headerName}</Box>
  )
}

}
