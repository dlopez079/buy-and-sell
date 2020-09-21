import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Used to capture id from url.
import { fakeListings } from '../fake-data'; //Used to import the fake data that we are using for this project.
import { Listing } from '../types'; // Used to import listing from types.ts.

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css'],
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //This line of code is going to capture the id from the url and store it in a const called id.
    this.listing = fakeListings.find((listing) => listing.id === id); //Assign the matching fake listing to the listing variable.
  }
}
