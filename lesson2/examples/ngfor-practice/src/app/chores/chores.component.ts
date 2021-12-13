import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores",
       tasks: ["Empty dishwasher", "Start Launchcode prep work", "Buy groceries"]},
       {title: "Today's Chores",
       tasks: ["Load dishwasher", "Finish Launchcode prep work", "Buy groceries you forgot"]},
       {title: "Tomorrow's Chores",
       tasks: ["Empty dishwasher AGAIN", "Play with Launchcode practice code", "Groceries again"]},
      ]
   todoTitles = ["Yesterday's Chores", "Today's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
