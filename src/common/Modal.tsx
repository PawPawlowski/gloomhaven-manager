import React, {PropsWithChildren} from "react";
import {Dialog, Grid, IconButton} from "@material-ui/core";
import styles from "./Modal.module.scss";
import {Close} from "@material-ui/icons";

interface DetailProps {
    isOpen: boolean;
    handleClose: () => void;
    onConfirm?: Confirmation;
}

interface Confirmation {
    handle: () => void;
    text: string;
}


export default function Modal({isOpen, handleClose, children, onConfirm}: PropsWithChildren<DetailProps>) {
    return (
        <Dialog
            className={styles.overlay}
            maxWidth={"xl"}
            open={isOpen}
            onClose={handleClose}>
            <div className={styles.window}>
                <IconButton onClick={handleClose} className={styles.closeButton}>
                    <Close/>
                </IconButton>
                {children}
                {onConfirm ? <Grid container direction={"row"} className={styles.pad}>
                    <Grid item xs={12} className={styles.center}>
                        <button onClick={onConfirm.handle} className={styles.confirm}>{onConfirm.text}</button>
                    </Grid>
                </Grid> : null}
            </div>
        </Dialog>
    );
}