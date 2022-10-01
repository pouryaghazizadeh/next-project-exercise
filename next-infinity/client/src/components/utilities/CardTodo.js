import { styled } from "@mui/material/styles"
import { Typography, Grid, Container } from "@mui/material"
import { Box } from "@mui/system"
import { Button } from "../atoms/Button"
const ContainerCard = styled(Container)(theme => {
    return ({
        // background:"red",
        border: "1px solid #b2b2b2",
        borderRadius: "1rem",
        padding: "1rem",
        // margin:"0.5rem"

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

const TodoDesc = styled(Typography)({


})

const CardTodo = () => {
    return (
        <ContainerCard>

            <Grid container spacing={1}>
                <Grid item xs={7} >  <TitleCard variant="h5" >userName1</TitleCard></Grid>
                <ContainerButtons item xs={5} > <Button variant="contained" size="small" text="Add" /><Button size="small" variant="contained" text="Delete" /></ContainerButtons>
                <Grid item xs={12} ><TodoDesc > this ofgsd fdnsonds ifndosnfsd ofidhsofn okfndsonfds okfndskonfsd nvksonoksd nofjdsnbojfbds fnjodsnbfjsdn fdosbnodsbnfo fkodnskfns fjkdsnof  nfodsbnfdos vnokdsnofds</TodoDesc></Grid>


            </Grid>







        </ContainerCard>
    )
}

export default CardTodo