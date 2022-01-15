export class Back{
  static url:String="http://localhost:8484/Troc/rest";
  static staticUrl:String=''
  static config ={
    noAuthHeader :{
      "content-Type":"application/json;charset=utf-8"
    },
    authHeader :{
      "content-Type":"application/json;charset=utf-8",
      "Authorization":""
    }
  }
}

