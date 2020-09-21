import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //Used to capture id from url.
import { fakeListings } from '../fake-data'; //Used to import the fake data that we are using for this project.
import { Listing } from '../types'; // Used to import listing from types.ts.

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  email: string = ''; // Create an email variable so you can export to the HTML.
  message: string = ''; // Create an email variable so you can export to the HTML.
  listing: Listing; // Create an email variable so you can export to the HTML.

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //This line of code is going to capture the id from the url and store it in a const called id.
    this.listing = fakeListings.find((listing) => listing.id === id); //Assign the matching fake listing to the listing variable.
    this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}`;
  }
  // Create a new method that will activate when the user hits the send button.
  sendMessage(): void {
    alert('Your message has been sent!'); // An alert will display when called upon.
    this.router.navigateByUrl('/listings'); // Navigate back to the listings page.
  }
}
