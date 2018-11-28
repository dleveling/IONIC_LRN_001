//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Student} from '../../models/student'


@Injectable()
export class ListstuProvider {

  constructor(public http: Http) {
    console.log('Hello ListstuProvider Provider');
  }

  myStudent():Observable<Student[]>{
    return this.http.get('https://bayes.000webhostapp.com/getStudent.php')
    .map((res:Response) => <Student[]> res.json())
    .catch(this.handleError);
  }

  insertStudentGet(studentID:String,studentName:String){
    return this.http.get('https://bayes.000webhostapp.com/insertStudent.php?studentID='+studentID+'&studentName='+studentName)
                    .map((res:Response) => <Student[]> res.json())
                    .catch(this.handleError);
  }

  
  insertStudentPost(DatastudentID:String,DatastudentName:String){

    let data = {'studentID':DatastudentID,'studentName':DatastudentName}
    let header = new Headers
    header.append('Content-Type','application/json')

    return this.http.post("https://bayes.000webhostapp.com/insertStudentPOST.php",data,{headers:header})
                    .map((res:Response) => {return res.json()})
                    .catch(this.handleError);
    
    }    /// SEND TYPE POST 


  private handleError(error:any){
    return Observable.throw(error.json().errorMessage || "เกิดข้อผิดพลาด Server ");   
  }

}
