import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import io from 'socket.io-client';

let socket;

const Home = (props) => {

    const [suggestions, setSuggestions] = useState([]);
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");

    const ENDPOINT = "https://still-sands-81765.herokuapp.com";

    const submitSuggestion = async (suggestion) => {
        console.log("So far so good");
        await fetch("https://still-sands-81765.herokuapp.com/suggestions/", {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(suggestion)
        });
        console.log("Suggestion submitted!");
        console.log(suggestion);
        await fetchSuggestions();
    }

    const fetchSuggestions = async () => {
        const url = "https://still-sands-81765.herokuapp.com/suggestions/";
        console.log(url);
        const res = await fetch(url, {
            method: "GET",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);
        setSuggestions(data);
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }

    useEffect(() => {
        fetchSuggestions();

        socket = io(ENDPOINT);

        console.log(socket);

        socket.emit('join', () => {
            console.log("Socket connection established");
        });

        return () => {
            socket.disconnect();
            socket.off();
        }

    },[]);

    useEffect(() => {
        socket.off('suggestionAdded').on('suggestionAdded', (suggestion) => {
            setSuggestions([suggestion, ...suggestions]);
        })
    })

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
            <h1>Idea List</h1>
                <Paper style={{width: 600, maxWidth: 600, marginBottom: 20}}>
                    <List>
                        {(suggestions.length === 0) ? 
                            (<ListItem>
                                <ListItemText>You don't have any ideas!</ListItemText>
                            </ListItem>) : 
                            suggestions.map((item, index) => {

                                const date = new Date(item.ts);

                                return (<div key={index}>
                                    <ListItem>
                                        <ListItemText>
                                            <h2 style={{marginBottom: -5}}>{item.content}</h2>
                                            {item.user_name} @ {date.toLocaleString()}
                                        </ListItemText>
                                    </ListItem>
                                    {(suggestions[index + 1]) ? <Divider/> : null}
                                </div>)
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home




/*<Grid item>
    <br/>
    <TextField
    label="Username"
    variant="outlined"
    autoComplete='off'
    value={username}
    onChange={(event) => {
        setUsername(event.target.value);
    }}
    />
    <br/>
    <br/>
    <TextField
    label="Suggestion"
    variant="outlined"
    autoComplete='off'
    autoFocus
    multiline
    value={content}
    onChange={(event) => {
        setContent(event.target.value);
    }}
    />
    <br/>
    <br/>
    <Button onClick={async ()=>{
        await submitSuggestion({user_name: username, content});
    }}>Submit</Button>
</Grid>*/