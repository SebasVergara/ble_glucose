import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  private lineChart: Chart;
  glucose: any;
  created: any;
  constructor(
    private modalController: ModalController,
    private firestore: AngularFirestore,
  ) {
    this.glucose = new Array();
    this.created = new Array();
  }

  ngOnInit() { }
  ionViewDidEnter() {

    firebase.firestore().collection('user_1').orderBy("created").limit(12).onSnapshot({}, (graph: any) => {
      // console.log(graph);
      graph.docs.forEach((data, index) => {
        var time = data.data().created.seconds;
        var timeHuman = (new Date(time * 1000).toLocaleString());
        this.glucose[index] = data.data().glucose;
        this.created[index] = time * 1000;
        console.log(timeHuman)
        // this.created[index] = timeHuman;
        this.chart();
      });
    })
  }
  chart() {
    console.log(this.created);
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      configuration: {
        responsive: true,
        maintainAspectRatio: false
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            displayFormats: {
              'millisecond': 'MMM DD',
              'second': 'MMM DD',
              'minute': 'MMM DD',
              'hour': 'MMM DD',
              'day': 'MMM DD',
              'week': 'MMM DD',
              'month': 'MMM DD',
              'quarter': 'MMM DD',
              'year': 'MMM DD',
            },
            ticks: {
              fontSize: 10,
              maxRotation: 0 // angle in degrees
            }
          }]
        }
      },
      data: {
        labels: this.created,
        datasets: [
          {
            label: "Glucemia",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.glucose,
            spanGaps: false,
          }
        ]
      }
    });
  }
  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
