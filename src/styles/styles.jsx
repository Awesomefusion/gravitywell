import { makeStyles } from "@material-ui/core/styles";
import consbg from '../img/consbg.svg';

const useStyles = makeStyles({
    consDiv: {
        backgroundImage: `url(${consbg})`,
        padding: '1.6em',
    },
    whiteDiv: {
        backgroundColor: 'white',
        padding: '1.6em',
    },
});

export { useStyles };