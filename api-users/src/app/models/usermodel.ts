export interface Usermodel {
    username:{
        firstname:string
        lastname:string
        surename:string
    }
    dob:{
        age:number
        date:Date
    }
    gender:string
    email:string
    price:number
    phone:number
    imageurl:string
    address:{
        city:string
        country:string
        pincode:number
        state:string

    }
}
