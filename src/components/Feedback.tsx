
'use client';

import { db } from '@/config/firebase.config';
import firebase from 'firebase/app';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Button, Label, TextInput, Textarea, Toast } from 'flowbite-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Feedback() {
const  [phone,setPhone] = useState('');
const [feedback , setFeedback] = useState('');


async function addDataToFireStore(phone: string, feedback:string) {
  const docRef = await addDoc(collection(db, 'feedback'), {
    phone:phone,
    feedback:feedback,
    timestamp:serverTimestamp()
  });


}

const handleSubmit = async (e:any) => {
  e.preventDefault()
  console.log('handleSubmit')
  // const feedbackCollection = firestore().collection('feedback')
  try {
    await addDataToFireStore(phone,feedback);
    toast.success("Thanks for feedback",{
      position : "bottom-right"
    })    
    setPhone('')
    setFeedback('')
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='sm:p-20 md:px-44 lg:px-60 my-5 full flex justify-center '>
    <div className="flex w-screen
 flex-col gap-4   ">
<h1 className='text-center font-bold  text-3xl mt-11'>Feedback</h1>
<form action="" onSubmit={handleSubmit}>
      <div className=' p-5' >
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput required id="phone" type="phone" sizing="md" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className=' px-5'>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Write your feedback" />
        </div>
        <Textarea required id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </div>
      <div className='flex justify-center w-full'>
        <Button type='submit' className='text-center w-full mx-5 rounded-md my-3'  color='failure'>Submit</Button>
      </div>
      </form>
    </div>
    
    <Toaster/>
    </div>
  );
}

export default Feedback;