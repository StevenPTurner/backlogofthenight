import type { MediaEntry } from "../types/MediaEntry.types";
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'

interface BacklogListProps {
    entryList: MediaEntry[]
}

export default function BacklogList({ entryList }: BacklogListProps) {
    const backlogEntry = (entry: MediaEntry) => {
        return <ListItem>
            <ListItemText primary={entry.title} />
        </ListItem>
    }
    return (
        <Paper elevation={3}>
            <List>
                {entryList.map(backlogEntry)}
            </List>
        </Paper>
    );
}
