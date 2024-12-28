import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
value:string = 'vinay';
selectedCity = '';
toggle: boolean = true;
display:boolean = false;



 fruites = ["Apples","Bannana","carrot"];
cities = [{"name" : 'hyderabad' , "value": '1' }, 
  {"name" : 'secunderbad' , "value": '2' },
  {"name":"nampally", "value": "3"}

]

onCityChange(event: any) {
  console.log('Selected City Value:', event.target.value);
}

  constructor() {
   }

  ngOnInit(): void {
  }

  bindData(e:any){
    this.value = e.target.value;
   // console.log(e.target.value)
  }

  toggleButton(){
   this.toggle = !this.toggle;
  }


  displayNotice(){
    this.display = !this.display;
  }



 


}
