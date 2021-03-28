import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url = "https://public.tableau.com/views/DelhiOdd-EvenScheme2016effectsonAirPollution/AveragePollutantLevelAnalysis?:language=en&:display_count=y&:origin=viz_share_link"


  constructor() { }

}
