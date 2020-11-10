import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Boton from './boton';
import ContentModalPokemon from './contentModalPokemon';

/* function rand() {
  return Math.round(Math.random() * 20) - 10;
} */

function getModalStyle() {
    /*   const top = 50 + rand();
      const left = 50 + rand(); */

    return {
        top: 100,
        left: 0,
        right: 0,
        bottom: 100,
        margin: "auto"
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({ text, className,data }) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
           <ContentModalPokemon {...data} />
           <div>
               <p className="text-center underline">Hace clilc fuera del modal para cerrarlo</p>
           </div>
        </div>
    );

    return (
        <div>
            <Boton onClick={handleOpen} text={text} className={className}>
                Open Modal
      </Boton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}