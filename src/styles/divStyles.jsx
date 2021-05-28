import { makeStyles } from "@material-ui/core/styles";
import consbg from '../img/consbg.svg';

const useStyles = makeStyles({
    consDiv: {
        backgroundImage: `url(${consbg})`,
        padding: '1.6em',
        color: 'white',
    },
    whiteDiv: {
        backgroundColor: 'white',
        padding: '1.6em',
        color: 'black',
    },
    textDefault:{
        marginTop: '1rem',
    },
});

export { useStyles };