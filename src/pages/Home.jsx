import React, { useState } from 'react';
import ImageComponent from "../components/ImageComponent"
import './Home.css'

const Home = () => {

    const [images,setImages]=useState([
        {url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicjumbo.com%2Ffree-images%2Fnature%2F&psig=AOvVaw2eOA7n-qQTsRImgMYdtgJV&ust=1733393243310000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjo3ZfvjYoDFQAAAAAdAAAAABAE" , ready:true, error:false},
        {url:"https://i.pinimg.com/736x/44/3d/91/443d91762446d91a54637ff1d657acf7.jpg" , ready:true, error:false},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMVsdina6dpQcsLAKvanbtM2pCr655FL2xV2rFsH5sGalORh8DjzCkg9zQmXSTOke33s&usqp=CAU" , ready:true, error:false},
        {url:"https://static.vecteezy.com/system/resources/thumbnails/033/443/598/small_2x/stacked-stones-in-the-middle-of-a-lake-at-sunset-ai-generated-photo.jpg" , ready:true, error:false}
    ]);

    while(images.length<4){
        images.push({url:"" , ready:true, error:false});
    }

    const UpdatedImageState=(index,updatedImage)=>{
        setImages((prevImages)=>
        prevImages.map((img,i)=>(i===index?updatedImage:img))
     );
    };

  return (
    <div className='home-page'>
        <h1></h1>
        <div className='image-grid'>
            {images.map((image,index)=>(
                <ImageComponent
                    key={index}
                    // image={image}
                    onUpdate={(updatedImage)=>UpdatedImageState(index,updatedImage)}
                />
            ))}

        </div>
    </div>
  );
}

export default Home;
