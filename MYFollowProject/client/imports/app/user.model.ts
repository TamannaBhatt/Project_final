export class User
{
  _id: string;
 username:string;
 email : string;
 password : string;
 confirmPassword:string;
 profile: Profile;
}
export class Profile{
     name: string;
     contactNumber:string;
     companyName:string;
     description:string;
     foundedIn:string;
     dateOfJoining:string;
     street1:string;
     street2:string;
     state:string;
     country:string;
     pinCode:string;    
}
