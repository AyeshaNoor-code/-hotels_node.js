const express=require('express');
const router=express.Router();
const person = require('../person');
 // Correct import statement


 
router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains the person data, from frontend
        const newPerson = new person(data); // Create new person instance
        const response = await newPerson.save(); // Save person to database
        console.log('Data Saved:', response);
        res.status(200).json(response);
    } 
    catch (err) {
        console.error('Error saving data:', err); // Log error details
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




router.get('/', async (req, res) => {
    try {
        const data = await person.find(); // Use the correct model name
        console.log(data);
    
        res.status(200).json(data); // Send the fetched data as a response
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




router.get('/:workType', async (req, res)=>{
    try{
const workType = req.params.workType;
if(workType=='chief'|| workType=='waiter'||workType=='manager'){
const response= await Person.find({work: workType});//work, because we have defined work in person schema and now we are assigning workType to it
console.log('Response fetched');
res.status(200).json(response);
}
else{
res.status(404).json({error: 'Invalid work Type'});
}
}catch(err){
res.status(404).json({error: 'Invalid work Type'});
}
});






router.put('/:id', async(req, res)=>{
    try{
        const personId=req.params.id; //Extract if from URL Parameter
        const updatedPersonData= req.body;

        const response=await person.findByIdAndUpdate(personId, updatedPersonData,{ // succes
            new:true, //Return the updated document....... 
            runValidators:true //Run Mongoose Validation.......
        })
        if(!response){                            //if id incorrect
            return res.status(404).json({error:'Person not found'});
        }
        console.log('Data Updated');
        res.status(200).json(response);//200:OK
    }
    catch(err){                         //failure in case that server is not working or system error
        res.status(500).json({error: 'Internal Server Error'});
    }
    });

 





    router.delete('/:id', async (req, res) => {
        try {
            const personId = req.params.id;
            const response = await person.findByIdAndDelete(personId); // success
            if (!response) {  // if id incorrect
                return res.status(404).json({ error: 'Person not found' });
            }
            console.log('data deleted');
            return res.status(200).json({ message: 'Person Deleted Successfully' });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    
    module.exports = router;
    
 