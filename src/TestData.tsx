import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
Amplify.configure(outputs);
const client = generateClient<Schema>();

// list all items



const  TestData:any  = async () => {
    
const { data: accountmaster  } = await client.models.AccountMasterForm.list();

console.log(accountmaster);

    return (<>
    {console.log("Data Hook useEffect",accountmaster)}
    </>)
}

export default TestData;
// get a specific item
// const { data: todo } = await client.models.Todo.get({
//   id: '...',
// });