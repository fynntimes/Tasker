import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  slug: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  getTitle() {
    // we don't have a db yet so for now let's just format it with certain rules

    var splitStr = this.slug.replace('_', ' ').toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); // capitalize every word
    }
    return splitStr.join(' '); 
  }

}
