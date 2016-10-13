export class User
{
  _id: string;
 email : string;
 password : string;
 profile: Profile;
}
export class Profile{
     name: string;
     contact:string;
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
