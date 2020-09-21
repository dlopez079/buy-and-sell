import { Component, OnInit } from '@angular/core';
import { fakeMyListings } from '../fake-data'; //Used to import the fake mydata that we are using for this project.
import { Listing } from '../types'; // Used to import listing from types.ts.

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css'],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = []; // Create a listing member variable.

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }
  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}!`);
  }
}
