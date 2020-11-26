import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './RangeDouble.module.css';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

type PropsType={
    min:number
    max:number
}

export let RangeDouble=React.memo( (props:PropsType)=> {
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([props.max/2, props.max-props.max/3]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={styles.case}>
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Temperature range
            </Typography>
            <Slider
                value={value}
                min={props.min}
                max={props.max}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
        </div>
    );
})