import {db} from './FirebaseConfig'
export const loadNotes = async (uid)=>{
    const notesSnapshot= await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    notesSnapshot.forEach(item=>{
        notes.push({
            id:item.id,
            ...item.data()
        });
    })
    return notes;
}