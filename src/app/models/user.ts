import {Test} from "./test";

export interface User {
   id?: string;
   name?: string;
   image?: string;
   phone?: number;
   pocket?: any;
   parent?: User[];
   children?: User[];

   tests?: Test[];
   otpVerified?: boolean;
   fcmToken?: string;
}
