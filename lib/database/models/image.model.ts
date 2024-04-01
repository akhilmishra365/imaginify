import {    Document , Schema, model, models } from 'mongoose';

//since we are working with typescript what do we say if we create a type for this image  so that our frontend immediately knowws what properties do we have on the documents  built off the image schema we can do that by creating new interface for the image 
//ye extend  kar raha hai document interface of mongoose JISSE vo auti=omatically feilds dega like _id
export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: string; //Assuming Url is stored as a string
    width?: number;
    height?: number;
    config?: object; //Assuming config is stored as an object
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
       firstName : string;
        lastName: string;
    }; 
    createdAt?: Date;
    updatedAt?: Date;
} 

const ImageSchema = new Schema({
    //titile bc we want to know whats the title of the image 
    title : { type: String, required: true },
    //transformation bc we want to know whats the transformation of the image
    transformationType : { type: String, required: true },
    publicId : { type: String, required: true },
    secureURL :{ type: String ,required: true },
    width: { type: Number  },
    height: { type: Number  },
    config : { type: Object },
    transformationUrl : { type: String },
    aspectRatio:{type : String},
    color:{type : String},
    prompt:{type : String},
    author : {type : Schema.Types.ObjectId, ref: 'User'},
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now }

});

//turning schema into model 
//==> we check if the model already exists in the models object, if it does, we use it, otherwise we create a new model

const Image = models?.Image || model('Image', ImageSchema);

export default Image;