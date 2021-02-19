import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ClientService {
  public l = new Subject<boolean>();
  public v = new Subject<boolean>();
  public logadmin = new Subject<boolean>();
  public logclient = new Subject<boolean>();
  //logadmin:any=false;
  //logclient:any=false;
  private baseURL = "http://localhost:8080/registration";
  private URL = "http://localhost:8080/emailverification";
  private URLLoginClient = "http://localhost:8080/login/Client";
  private URLLoginAdmin = "http://localhost:8080/login/Admin";
  private URLCENTREVAC = "http://localhost:8080/CentresVaccinationDisponibles";
  private URLCREATEREND = "http://localhost:8080/creerRendezVous";
  private URLGETREnd = "http://localhost:8080/getRendezVous";
  private URLValiderREnd = "http://localhost:8080/validerRendezVous";
  private URLvillenmbrevaccin = "http://localhost:8080/villenmbrevaccin";
  private URLvaccinsdate = "http://localhost:8080/vaccinsdate";
  private URLnmbrevaccinage = "http://localhost:8080/nmbrevaccinage";
  private URLnmbretotalvaccines = "http://localhost:8080/nmbretotalvaccines";
  private URLgetCertificat = "http://localhost:8080/getCertificat";
  private URLdemanderCertificat = "http://localhost:8080/demanderCertificat";
  private urllistere =  "http://localhost:8080/reclamationlist" ;
  private urlget = "http://localhost:8080/getreclamation" ;
  private urltrai = "http://localhost:8080/traitementreclamation" 
  private urlrec =  "http://localhost:8080/reclamation" ;

  constructor(private httpClient: HttpClient) { }
  d: any;
  createClient(cl: Client): Observable<Object> {
    let params = new HttpParams()
      .append('nom', cl.nom)

      .append('email', cl.email)


    return this.httpClient.post(`${this.baseURL}`, params);

  }
  verifier(cl: Client): Observable<Object> {
    this.logclient.next(true);
    let params = new HttpParams()
      .append('nom', cl.nom)
      .append('prenom', cl.prenom)
      .append('email', cl.email)
      .append('password', cl.password)
      .append('code', cl.code_ver)

    return this.httpClient.post(`${this.URL}`, params);
  }
  loginClient(cl: Client): Observable<Object> {
    let params = new HttpParams()

      .append('email', cl.email)
      .append('password', cl.password)
    this.httpClient.post(`${this.URLLoginClient}`, params).subscribe(data => {
      console.log(data);

      console.log(data);
      if (data != null) {
        this.logclient.next(true);
        console.log(this.logclient);
      }
    

    }), error => console.log(error);

    return this.httpClient.post(`${this.URLLoginClient}`, params);

  }
navigate(){
  this.v.next(false)
}
  loginAdmin(cl: Client): Observable<Object> {
    let params = new HttpParams()
      .append('email', cl.email)
      .append('password', cl.password)
    this.httpClient.post(`${this.URLLoginAdmin}`, params).subscribe(data => {
      console.log(data);

      console.log(data);
      if (data != null) {
        this.logadmin.next(true);
        this.l.next(true);
        console.log(this.l);

        ;
      }
      else {
        this.logadmin.next(true);
      }

    }), error => console.log(error);
    return this.httpClient.post(`${this.URLLoginAdmin}`, params);

  }
  centrevac(cl: Client): Observable<Object> {
    let params = new HttpParams()
      .append('ville', cl.ville)
      .append('date', cl.date)


    return this.httpClient.post(`${this.URLCENTREVAC}`, params);
  }
  createrend(cl: Client): Observable<Object> {
    let params = new HttpParams()
      .append('email', cl.email)
      .append('centrenom', cl.centrenom)
      .append('ville', cl.ville)
      .append('sex', cl.sex)
      .append('age', cl.age)
      .append('date', cl.date)
      .append('tel', cl.tel)
    return this.httpClient.post(`${this.URLCREATEREND}`, params);
  }

  getRend(ville: any, centrvac: any): Observable<Object> {
    let params = new HttpParams()
      .append('centrnom', centrvac)
      .append('ville', ville)

    return this.httpClient.post(`${this.URLGETREnd}`, params);
  }
  validerRend(id: any): Observable<Object> {
    let params = new HttpParams()

      .append('id', id)

    return this.httpClient.post(`${this.URLValiderREnd}`, params);
  }
  villenmbrevaccin(): Observable<Object> {
    return this.httpClient.get(`${this.URLvillenmbrevaccin}`);
  }

  getvaccinsdate(): Observable<Object> {
    return this.httpClient.get(`${this.URLvaccinsdate}`);
  }

  getnmbrevaccinage(): Observable<Object> {
    return this.httpClient.get(`${this.URLnmbrevaccinage}`);
  }
  getnmbretotalvaccines(): Observable<Object> {
    return this.httpClient.get(`${this.URLnmbretotalvaccines}`);
  }
  getCertificat(email: any): Observable<Object> {
    let params = new HttpParams()

      .append('email', email)

    return this.httpClient.post(`${this.URLgetCertificat}`, params);
  }

  demanderCertificat(email: any): Observable<Object> {
    let params = new HttpParams()
      .append('email', email)
    return this.httpClient.post(`${this.URLdemanderCertificat}`, params);
  }
  listereclamation(  ville: string , centrevaccination :string ):Observable<Object>{

    let params = new HttpParams()
  
    .append('ville', ville)
    .append('centrevaccination', centrevaccination)
    return this.httpClient.post(`${this.urllistere}` , params)
  
  }
  getreclamationByid(id:string):Observable<Object>{

    let params = new HttpParams()
    .append('id', id)
  
    return this.httpClient.post(`${this.urlget}`, params)
  
  }
  traitementreclamation(id:string , body : string ):Observable<Object>{

    let params = new HttpParams()
  
    .append('id', id)
    .append('body', body)
     
    return this.httpClient.post(`${this.urltrai}`, params)
  
  }
  reclamation( evenements: string[] , email : string ):Observable<Object>{

    let params = new HttpParams()
  
    .append('email', email)
    .append('evenements', evenements.join(', '))
    return this.httpClient.post(`${this.urlrec}` , params)
  
  }
}