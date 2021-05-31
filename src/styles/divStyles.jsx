import { makeStyles } from "@material-ui/core/styles";
import consbg from '../img/consbg.svg';

const useStyles = makeStyles({
    consDiv: {
        backgroundImage: `url(${consbg})`,
        padding: '1.6em',
        color: '#fffffe',
    },
    colourDiv: {
        backgroundColor: '#242629',
        padding: '1.6em',
        color: '#94a1b2',
    },
    colourDivTwo: {
        backgroundColor: '#16161a',
        padding: '1.6em',
        color: '#94a1b2',
    },
    textDefault:{
        marginBottom: '1rem',
    },
    cardDefault:{
        border: '2px solid',
        boxShadow: 'none',
        borderRadius: '15px',
        elevation: 0,
        backgroundColor: "transparent",
        align: 'center',
        margin: '5px',
        marginBottom: '1rem',
    },
    cardImage:{
    }
});

export { useStyles };