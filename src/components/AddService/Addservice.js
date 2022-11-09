import React from 'react';

const Addservice = () => {
    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const description = form.description.value;
        const service ={
            name,
            photo,
            rating,
            time,
            description,

        }
        fetch('http://localhost:5000/services', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){

                alert('New Service added successfully!!')
                form.reset()
                // setUpdate(true)
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-semibold m-4 text-blue-800'>Add New Service</h2>
            <form onSubmit={handleAddService} action="" className='w-3/4 m-auto'>
                <input name='name' type="text" placeholder="Service Name" className="input input-bordered input-accent w-full m-2" />
                <input name='photoURL' type="text" placeholder="Service PhotoURL" className="input input-bordered input-accent w-full m-2" />
                <input name='rating' type="text" placeholder="Add Rating" className="input input-bordered input-accent w-full m-2 " />
                <input name='time' type="text" placeholder="Approximate time of service" className="input input-bordered input-accent w-full m-2" />
                <textarea name='description' className="textarea w-full textarea-accent  m-2" placeholder="Service Description"></textarea>
                <input className='btn bg-pink-400 w-1/2 mb-8' type="submit" value="Add Service" />
                
            </form>
        </div>
    );
};

export default Addservice;