import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TableItem = ({data, categoria_id, titulo, valor}) => {

    let dataFormatada = data.split('-').reverse().join('-')

    return(
        <TableRow

            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ color: '#fff' }} align="center">{dataFormatada}</TableCell>
            <TableCell 
                sx={categoria_id === 'Ganho' ? { color: '#008000' } : { color: 'red' }} 
                align="center">
                    {categoria_id}
            </TableCell>
            <TableCell sx={{ color: '#fff' }} align="center">{titulo}</TableCell>
            <TableCell 
                sx={categoria_id === 'Ganho' ? { color: '#008000' } : { color: 'red' }} 
                align="center">
                    R$ {valor}
            </TableCell>
        </TableRow>
    )
}