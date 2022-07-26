
// CANVAS SECTION
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); 


const img = new Image() 



// IMAGE UPLOAD & IMAGE DATA
const reader = new FileReader();

const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener('change', uploadImage);

function uploadImage(event){
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      img.src = reader.result;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0);
        
      } 
    };
}


// LOOP THROUGH IMAGE DATA + GREY EFFECT

function greyscale(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        const grey = data[i] * 0.21 + data[i + 1] *0.71 + data[i + 2] * 0.07;
        data[i] = grey; 
        data[i + 1] = grey; 
        data[i + 2] = grey; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[0].addEventListener('click', greyscale);

// SEPIA EFFECT

function sepia(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        const grey = data[i] * 0.21 + data[i + 1] *0.71 + data[i + 2] * 0.07;        
        data[i] = grey + 95; 
        data[i + 1] = grey + 58; 
        data[i + 2] = grey; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[1].addEventListener('click', sepia);

// INVERT EFFECT

function invert(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        data[i] = 255 - data[i]; 
        data[i + 1] = 255 - data[i + 1]; 
        data[i + 2] = 255 - data[i + 2]; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[2].addEventListener('click', invert);



// ADDITIONAL RGB EFFECTS


function rbg(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        const green = data[i + 1]
        data[i] = data[i]; 
        data[i + 1] = data[i + 2]; 
        data[i + 2] = green; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[3].addEventListener('click', rbg);



function bgr(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        const red = data[i]
        data[i] = data[i + 2]; 
        data[i + 1] = data[i + 1]; 
        data[i + 2] = red; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[4].addEventListener('click', bgr);



function gbr(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        const red = data[i]
        data[i] = data[i + 1]; 
        data[i + 1] = data[i + 2]; 
        data[i + 2] = red; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[5].addEventListener('click', gbr);



function grb(){
    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i+= 4){
        const red = data[i]
        data[i] = data[i + 1]; 
        data[i + 1] = red; 
        data[i + 2] = data[i + 2]; 
    }
     ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll("button")[6].addEventListener('click', grb);


// CLEAR BUTTON

function clearChanges(){
    img.src = reader.result;
}

document.querySelectorAll("button")[7].addEventListener('click', clearChanges);


// DOWNLOAD BUTTON

function download(){
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = "image.png";
    link.click();
}

document.querySelectorAll("button")[8].addEventListener('click', download);
