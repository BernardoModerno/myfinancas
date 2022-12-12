import './styles.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const InfoTable = () => {
    return(
        <div className="container-infoTable">
            <TableContainer sx={{background: '#000', color: '#fff', borderRadius: 10}} >
                <Table size='small' aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#fff' }} align="center">Data</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Categoria</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Título</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }} align="center">10/10/2022</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Ganho</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Salário</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">R$ 1000</TableCell>
                        </TableRow>

                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }} align="center">10/10/2022</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Ganho</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Salário</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">R$ 1000</TableCell>
                        </TableRow>

                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }} align="center">10/10/2022</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Ganho</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">Salário</TableCell>
                            <TableCell sx={{ color: '#fff' }} align="center">R$ 1000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
