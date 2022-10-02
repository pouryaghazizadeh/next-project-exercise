import { styled } from "@mui/material/styles"
import { Typography, Grid, Container } from "@mui/material"
import { useRouter } from "next/router"
import { Button } from "../atoms/Button"
import { useState } from "react"
import TextareaAutosize from '@mui/base/TextareaAutosize';
const ContainerCard = styled(Container)(theme => {
    return ({
        border: "1px solid #b2b2b2",
        borderRadius: "1rem",
        padding: "1rem",
        minHeight: "100px",
    })
})
const ContainerButtons = styled(Grid)({
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.8rem"

})
const TitleCard = styled(Typography)(() => {
    return ({
        // width:"100px"

    })
})
const InputUpdate = styled(TextareaAutosize)({
    width: "100%",
    resize: "none",
    outline: "none",
    lineHeight: "1.5rem"
})


const CardTodo = ({ handleDelete, todoUpdated,currantData, handleEdit, userName }) => {
    const [edit, setEdit] = useState(false)

    const router = useRouter()
    console.log(todoUpdated);
    const handleEditBtn = (e) => {
        setEdit(!edit)
        // update component without  refresh
        // router.replace(router.asPath)

    }

    return (
        <ContainerCard>
            <Grid container spacing={1}>
                <Grid item xs={7} >  <TitleCard variant="h5" >{userName && userName}</TitleCard></Grid>
                <ContainerButtons item xs={5} >
                    <Button variant="contained" size="small" text={edit ? "Add" : "Edit"} onClick={handleEditBtn} />
                    <Button size="small" variant="contained" text="Delete" onClick={handleDelete && handleDelete} />
                </ContainerButtons>
                <Grid item xs={12} >
                    {edit ?
                        <InputUpdate onChange={handleEdit} value={todoUpdated.updatedTodo!==""?todoUpdated.updatedTodo:currantData} /> :
                        <Typography>{currantData}</Typography>
                    }
                </Grid>
            </Grid>
        </ContainerCard>
    )
}

export default CardTodo