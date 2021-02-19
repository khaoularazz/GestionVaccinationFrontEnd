import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  dt: any[] = []
  dt1: any[] = []
  dt2: any[] = []
  date: any[] = []
  age: any[] = []
  dt3: any[] = []
  totaldose1 : any
  totaldose2 : any
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.navigate();
    this.clientService.villenmbrevaccin().subscribe(data => {
      // console.log(data);

      for (let d in data) {

        this.dt.push(data[d]["nmbrevaccin"])
      }
      console.log(this.dt);

    }),
      error => console.log(error);

    this.clientService.getvaccinsdate().subscribe(data => {
      console.log(data);

      for (let d in data) {

        this.dt1.push(data[d]["nmbredose1"])
        this.dt2.push(data[d]["nmbredose2"])
        this.date.push(data[d]["date"])
      }
    }),
      error => console.log(error);

    this.clientService.getnmbrevaccinage().subscribe(data => {
      console.log(data);

      for (let d in data) {
        this.dt3.push(data[d]["nmbrevaccin"])
        this.age.push(data[d]["age"])
      }


    }),
      error => console.log(error);


    this.clientService.getnmbretotalvaccines().subscribe(data => {
      console.log(data);
      this.totaldose1=data["response"][0]
      this.totaldose2=data["response"][1]
    }),
      error => console.log(error);
  }

  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: this.dt, label: 'Nombre des gens complétement vaccinés par ville' }
  ];


  public chartLabels: Array<any> = ['Agadir', 'Al Hoceïma', 'Assilah',
    'Beni Mellal', 'Casablanca', 'Chefchaouen', 'El Jadida', 'Fès', 'fnideq', 'Ifrane', 'Kénitra', 'Marrakech', 'Oujda', 'Rabat', 'Tanger', 'Tétouan'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(159, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(192, 212, 78, 0.2)',
        'rgba(208, 62, 125, 0.2)',
        'rgba(153, 75, 75, 0.2)',
        'rgba(159, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',

      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }





  public chartType1: string = 'doughnut';

  public chartDatasets1: Array<any> = [
    { data: this.dt3, label: 'Nembre des gens Complétement vaccinés par age' }
  ];

  public chartLabels1: Array<any> = ['<25ans', 'entre 25ans et 50ans', '>50ans'];

  public chartColors1: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
      borderWidth: 2,
    }
  ];

  public chartOptions1: any = {
    responsive: true
  };
  public chartClicked1(e: any): void { }
  public chartHovered1(e: any): void { }

  public chartType2: string = 'line';

  public chartDatasets2: Array<any> = [
    { data: this.dt1, label: 'Nombre Totale des gens demi-vaccinés' },
    { data: this.dt2, label: 'Nombre Totale des gens complétement vaccinés' }
  ];

  public chartLabels2: Array<any> = this.date;

  public chartColors2: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions2: any = {
    responsive: true
  };
  public chartClicked2(e: any): void { }
  public chartHovered2(e: any): void { }
}





