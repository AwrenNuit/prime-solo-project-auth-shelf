import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function(props){
    const {item} = props;
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    let [description, setDescription] = useState(item.description);

    const cancleEdit = () => {
        setDescription(item.description);
        setEditMode(false);
    }

    const saveEdit = () => {
        dispatch({type: 'EDIT_ITEM', payload: {
            id: item.id,
            description: description
        }});
        setDescription('');
        setEditMode(false);
    }

    let itemDescription;
    if(editMode){
        itemDescription = (
            <TextField 
                label="description"
                value={description}
                multiline
                onChange={e=>setDescription(e.target.value)}
            />
        );
    } else {
        itemDescription = (
            <Typography variant='body1'>
                {item.description}
            </Typography>
        );
    }

    let buttonArea;
    if(editMode){
        buttonArea = (
            <>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={cancleEdit}
                >Cancle</Button>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={saveEdit}
                >Save</Button>
            </>
        )
    } else {
        buttonArea = (
            <Button
                variant='contained'
                color='primary'
                onClick={()=>setEditMode(true)}
            >
                Edit
            </Button>
        )
    }
    return (
        <Card>
            <CardMedia 
                image={item.image_url}
            />
            <CardContent>
                {itemDescription}
                {buttonArea}
            </CardContent>
        </Card>
    )
}