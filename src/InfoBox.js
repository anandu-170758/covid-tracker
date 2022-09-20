import React from 'react'
import{Card,CardContent,Typography} from "@mui/material";

function InfoBox({title,cases,total}) {
  return (
    <Card className='InfoBox'>
        <CardContent>
            <Typography className="InfoBox_title"color="textSecondary">
                    {title}
            </Typography>
                <h2 className='InfoBox_cases'>{cases}</h2>
            <Typography className='InfoBox_Total'>
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox