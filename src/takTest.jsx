import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export function TakTest() {


    return (
        <Container maxWidth={false} sx={{ bgcolor: 'yellow' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: { xs: 'column', lg: 'row' } }}>
                <Box sx={{ p: 1, width: { xs: '100vw', lg: '30vw' }, bgcolor: 'powderblue' }}>
                    <Typography variant='h2'>Box1</Typography>
                </Box>
                <Box sx={{ p: 1, width: { xs: '100vw', lg: '70vw' }, bgcolor: 'blue' }}>
                    <Typography variant='h2'>Box2</Typography>
                </Box>
            </Box>
        </Container>
    )
}